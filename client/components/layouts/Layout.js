import { useRouter } from "next/router";
import React, { useContext } from "react";
import LayoutLogged from "./LayoutLogged";

import styled from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import AuthenticationComponent from "../authen/AuthenticationComponent";

const LayoutStyled = styled.div``;

const Layout = (props) => {
  const { userInfo, auth } = useContext(AppContext);

  const router = useRouter();

  const logout = async () => {
    console.log("🚀 ~ file: Layout.jx:10 ~ logout ~ logout");
    // await fetch("http://localhost:8000/api/logout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    // });

    // await router.push("/login");
  };

  const renderLayout = () => {
    if (auth) return <LayoutLogged logout={logout} />;
    return <AuthenticationComponent />;
  };

  return <LayoutStyled>{renderLayout()}</LayoutStyled>;
};

export default Layout;
