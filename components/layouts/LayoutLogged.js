import React from "react";
import PropTypes from "prop-types";

LayoutLogged.propTypes = {};

function LayoutLogged({ logout }) {
  return (
    <div className="nav-link active" onClick={logout}>
      Logout
    </div>
  );
}

export default LayoutLogged;
