import React, { createContext, useEffect, useState } from "react";
import authenticationApi from "../api/authenticationApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [auth, setAuth] = useState(false);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(true);

  useEffect(() => {
    getHasAuthentication();
  }, []);

  const getHasAuthentication = async () => {
    try {
      const response = await authenticationApi.getUserInfo();

      setAuth(true);
      setUserInfo(response);
      setIsLoadingGlobal(false);
    } catch (e) {
      console.log("🚀 ~ file: AppProvider.js:41 ~ getHasAuthentication ~ e", e);
      setAuth(false);
      setIsLoadingGlobal(false);
    }
  };

  return (
    <AppContext.Provider value={{ userInfo, auth, getHasAuthentication, isLoadingGlobal }}>
      {children}
    </AppContext.Provider>
  );
};
