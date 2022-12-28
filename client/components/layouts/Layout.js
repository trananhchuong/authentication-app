import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutLogged from "./LayoutLogged";
import LayoutNotLogged from "./LayoutNotLogged";

import styled from "styled-components";

const LayoutStyled = styled.div`
${'' /* 
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  } */}
`;

const Layout = (props) => {
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
    if (props.auth) return <LayoutLogged logout={logout} />;
    return <LayoutNotLogged />;
  };

  return (
    <LayoutStyled>
      <Head>
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        /> */}
      </Head>

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
