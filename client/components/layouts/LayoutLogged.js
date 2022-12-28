import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

LayoutLogged.propTypes = {};

function LayoutLogged({ logout, userInfo }) {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="#" className="nav-link active" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
      <h1>Hello {userInfo?.username}</h1>
    </>
  );
}

export default LayoutLogged;
