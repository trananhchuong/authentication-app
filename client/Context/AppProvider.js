import React, { createContext, useEffect, useState } from "react";
import authenticationApi from "../api/authenticationApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getHasAuthentication();
  }, []);

  const getHasAuthentication = async () => {
    try {
      const response = await authenticationApi.getUserInfo();

      console.log(
        "🚀 ~ file: index.js:19 ~ getHasAuthentication ~ response",
        response
      );

      // const content = await response.json();

      // setMessage(`Hi ${content.name}`);
      // setAuth(true);

      // const userToken = getCookie("token");

      // const response = await fetch("http://localhost:8000/api/user");

      // const content = await response.json();
      // console.log("🚀 ~ file: index.js:36 ~ getHasAuthentication ~ content", content)

      if (false) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (e) {
      console.log("🚀 ~ file: AppProvider.js:41 ~ getHasAuthentication ~ e", e)
      setAuth(false);
    }
  };

  return (
    <AppContext.Provider value={{ userInfo, auth }}>
      {children}
    </AppContext.Provider>
  );
};
