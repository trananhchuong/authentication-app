import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>

        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <Link href="/">Forgot your password? </Link>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
