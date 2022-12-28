import React, { useContext } from "react";
import styled from "styled-components";
import AuthenticationComponent from "../components/authen/AuthenticationComponent";
import IconLoading from "../components/iconLoading/IconLoading";
import { AppContext } from "../Context/AppProvider";

Login.propTypes = {};

const LayoutLoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Login() {
  const { getHasAuthentication, isLoadingGlobal } = useContext(AppContext);

  if (isLoadingGlobal) {
    return (
      <LayoutLoadingStyled>
        <IconLoading /> 
      </LayoutLoadingStyled>
    );
  }

  return (
    <AuthenticationComponent getHasAuthentication={getHasAuthentication} />
  );
}

export default Login;
