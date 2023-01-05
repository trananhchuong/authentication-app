import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import authenticationApi from "../api/authenticationApi";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({});
  const [auth, setAuth] = useState(false);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);
  const [cookies, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    getHasAuthentication();
  }, []);

  const getHasAuthentication = async () => {
    try {
      const response = await authenticationApi.getUserInfo();

      if (response?.isValid) {
        setAuth(true);
        setUserInfo(response);
        setIsLoadingGlobal(false);
        router.push("/homepage");
      } else {
        setAuth(false);
        setIsLoadingGlobal(false);
      }
    } catch (e) {
      console.log("🚀 ~ file: AppProvider.js:41 ~ getHasAuthentication ~ e", e);
      setAuth(false);
      setIsLoadingGlobal(false);
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoadingGlobal(true);

      const response = await authenticationApi.logoutAction({
        token: cookies?.access_token,
      });
      removeCookie("access_token");
      getHasAuthentication();
    } catch (error) {
      console.log("🚀 ~ file: AppProvider.js:38 ~ handleLogout ~ error", error);
      setIsLoadingGlobal(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        userInfo,
        auth,
        getHasAuthentication,
        isLoadingGlobal,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
