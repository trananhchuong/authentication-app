import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Flip, toast } from "react-toastify";
import styled from "styled-components";
import authenticationApi from "../../api/authenticationApi";
import ToastCardByType from "../toast/ToastCardByType";
import ToastComponent from "../toast/ToastComponent";
import { TYPE_CONSTANTS } from "../toast/ToastConstants";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {
  ACCESS_TOKEN_NAME,
  DEFAULT_COOKIE_MAX_AGE,
} from "../../constants/apiConstants";
import { useCookies } from "react-cookie";

const AuthenticationComponentStyled = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;

    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      outline: none;
    }

    &.ghost {
      background-color: transparent;
      border-color: #ffffff;

      &.disabled {
        pointer-events: none;
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;

    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
    }

    .button-signin {
      margin-top: 12px;
    }
  }

  .container {
    background-color: #fff;

    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }
`;

AuthenticationComponent.propTypes = {};

function AuthenticationComponent({ getHasAuthentication }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toastType, setToastType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const renderToastCard = (content) => {
    const { message, type } = content;

    setToastType(type);
    toast(<ToastCardByType message={message} type={type} />);
  };

  const handleSignUpClick = () => {
    if (containerRef?.current) {
      containerRef?.current?.classList?.add("right-panel-active");
    }
  };

  const handleSignInClick = () => {
    if (containerRef?.current) {
      containerRef?.current?.classList?.remove("right-panel-active");
    }
  };

  const handleLogin = async (formValues) => {
    try {
      setIsLoading(true);
      const response = await authenticationApi.loginAction(formValues);
      const { accessToken } = response;

      await setCookie(ACCESS_TOKEN_NAME, accessToken, {
        path: "/",
        maxAge: DEFAULT_COOKIE_MAX_AGE,
      });

      const content = {
        message: "Login Successfully",
        type: TYPE_CONSTANTS.SUCCESS,
      };
      renderToastCard(content);
      setIsLoading(false);

      getHasAuthentication && getHasAuthentication();
    } catch (error) {
      const message = error?.response?.data?.message;

      const content = { message, type: TYPE_CONSTANTS.ERROR };
      renderToastCard(content);
      setIsLoading(false);
    }
  };

  const handleSignup = async (formValues) => {
    try {
      setIsLoading(true);
      const response = await authenticationApi.signupAction(formValues);

      const content = {
        message: "Signup Successfully",
        type: TYPE_CONSTANTS.SUCCESS,
      };

      renderToastCard(content);
      setIsLoading(false);
    } catch (error) {
      const message = error?.response?.data?.message;

      const content = { message, type: TYPE_CONSTANTS.ERROR };
      renderToastCard(content);
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationComponentStyled>
      <div className="container" ref={containerRef}>
        <SignUpForm handleSignup={handleSignup} isLoading={isLoading} />
        <LoginForm handleLogin={handleLogin} isLoading={isLoading} />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={classNames({
                  ghost: true,
                  disabled: isLoading,
                })}
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className={classNames({
                  ghost: true,
                  disabled: isLoading,
                })}
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastComponent type={toastType} autoClose={3000} transition={Flip} />
    </AuthenticationComponentStyled>
  );
}

export default AuthenticationComponent;
