import React, { useContext } from "react";
import LayoutLogged from "./LayoutLogged";

import { useCookies } from "react-cookie";
import styled from "styled-components";
import authenticationApi from "../../api/authenticationApi";
import { AppContext } from "../../Context/AppProvider";
import AuthenticationComponent from "../authen/AuthenticationComponent";
import IconLoading from "../iconLoading/IconLoading";

const LayoutLoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutStyled = styled.div``;

const Layout = () => {
  const { userInfo, auth, getHasAuthentication, isLoadingGlobal } =
    useContext(AppContext);
  const [cookies, removeCookie] = useCookies(["user"]);

  const logout = async () => {
    const response = await authenticationApi.logoutAction({
      token: cookies?.access_token,
    });
    removeCookie("access_token");
    getHasAuthentication();
  };

  const renderLayout = () => {
    if (auth) return <LayoutLogged logout={logout} userInfo={userInfo} />;
    return (
      <AuthenticationComponent getHasAuthentication={getHasAuthentication} />
    );
  };

  if (isLoadingGlobal) {
    return (
      <LayoutLoadingStyled>
        <IconLoading />
      </LayoutLoadingStyled>
    );
  }

  return <LayoutStyled>{renderLayout()}</LayoutStyled>;
};

export default Layout;
