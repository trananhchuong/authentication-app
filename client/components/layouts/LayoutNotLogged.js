import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

LayoutNotLogged.propTypes = {};

function LayoutNotLogged() {
  return (
    <div className="nav-link active">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default LayoutNotLogged;
