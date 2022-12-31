import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useMemo, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { Flip, toast } from "react-toastify";
import authenticationApi from "../../api/authenticationApi";
import {
  ACCESS_TOKEN_NAME,
  DEFAULT_COOKIE_MAX_AGE,
} from "../../constants/apiConstants";
import ToastCardByType from "../toast/ToastCardByType";
import ToastComponent from "../toast/ToastComponent";
import { TYPE_CONSTANTS, TYPE_CONSTANTS_ID } from "../toast/ToastConstants";
import { AuthenticationComponentStyled } from "./AuthenticationStyled";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

AuthenticationComponent.propTypes = {};

function AuthenticationComponent({ getHasAuthentication }) {
  const signUpFormRef = useRef(null);
  const loginFormRef = useRef(null);
  const containerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [toastType, setToastType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const router = useRouter();

  const renderToastCard = (content) => {
    const { message, type, toastId } = content;
    setToastType(type);
    toast(<ToastCardByType message={message} type={type} />, {
      toastId,
    });
  };

  const handleSignUpClick = () => {
    if (containerRef?.current && loginFormRef?.current) {
      loginFormRef?.current?.resetFormByRef();
      containerRef?.current?.classList?.add("right-panel-active");
    }
  };

  const handleSignInClick = () => {
    if (containerRef?.current && signUpFormRef?.current) {
      signUpFormRef?.current?.resetFormByRef();
      containerRef?.current?.classList?.remove("right-panel-active");
    }
  };

  const clearToast = () => {
    setTimeout(() => {
      toast.dismiss();
    }, 300);
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
        toastId: TYPE_CONSTANTS_ID.ID_LOGIN,
      };
      renderToastCard(content);
      setIsLoading(false);
      getHasAuthentication && getHasAuthentication();
      router.push("/");
      clearToast();
    } catch (error) {
      const message = error?.response?.data?.message;
      const content = {
        message,
        type: TYPE_CONSTANTS.ERROR,

        toastId: TYPE_CONSTANTS_ID.ID_LOGIN,
      };
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
        toastId: TYPE_CONSTANTS_ID.ID_REGIS,
      };

      renderToastCard(content);
      setIsLoading(false);
      handleSignInClick();
    } catch (error) {
      const message = error?.response?.data?.message;

      const content = {
        message,
        type: TYPE_CONSTANTS.ERROR,
        toastId: TYPE_CONSTANTS_ID.ID_REGIS,
      };
      renderToastCard(content);
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationComponentStyled>
      <div className="container" ref={containerRef}>
        <SignUpForm
          ref={signUpFormRef}
          handleSignup={handleSignup}
          isLoading={isLoading}
          handleSignInClick={handleSignInClick}
        />
        <LoginForm
          ref={loginFormRef}
          handleLogin={handleLogin}
          isLoading={isLoading}
          handleSignUpClick={handleSignUpClick}
        />

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
