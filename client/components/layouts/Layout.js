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

  return (
    <LayoutStyled>
      {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link href="/">Home </Link>

          <div>{renderLayout()}</div>
        </div>
      </nav> */}
      {/* <main className="form-signin">{props.children}</main> */}

      <div>{renderLayout()}</div>
    </LayoutStyled>
  );
};

export default Layout;
