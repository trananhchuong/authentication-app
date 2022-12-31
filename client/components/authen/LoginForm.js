import { yupResolver } from "@hookform/resolvers/yup";
import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { HiSwitchHorizontal } from "react-icons/hi";
import * as yup from "yup";
import {
  ERROR_MESSAGE,
  getErrorByCode,
  USER_INFORMATION_FORM_INPUT_NAME,
} from "../../constants/authenConstants";
import CustomFormInput from "../formCustomInput/CustomFormInput";
import IconLoading from "../iconLoading/IconLoading";

LoginForm.propTypes = {};

const schemaValidate = () => {
  return yup.object().shape({
    [USER_INFORMATION_FORM_INPUT_NAME.EMAIL]: yup
      .string()
      .required(getErrorByCode({ errorCode: ERROR_MESSAGE.REQUIRED_FIELD }))
      .email(getErrorByCode({ errorCode: ERROR_MESSAGE.EMAIL_INVALID })),
    [USER_INFORMATION_FORM_INPUT_NAME.PASSWORD]: yup
      .string()
      .required(getErrorByCode({ errorCode: ERROR_MESSAGE.REQUIRED_FIELD })),
  });
};

function LoginForm({ handleLogin, isLoading, handleSignUpClick }, ref) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate()),
  });

  useImperativeHandle(ref, () => ({
    resetFormByRef: () => {
      resetForm();
    },
  }));

  const resetForm = () => {
    reset({
      [USER_INFORMATION_FORM_INPUT_NAME.EMAIL]: "",
      [USER_INFORMATION_FORM_INPUT_NAME.PASSWORD]: "",
    });
  };

  const onSubmit = async (formValues) => {
    handleLogin && handleLogin(formValues);
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>

        <span>or use your account</span>

        <CustomFormInput
          name={USER_INFORMATION_FORM_INPUT_NAME.EMAIL}
          errors={errors}
        >
          <input
            autocomplete="off"
            placeholder="Email"
            {...register(USER_INFORMATION_FORM_INPUT_NAME.EMAIL)}
          />
        </CustomFormInput>

        <CustomFormInput
          name={USER_INFORMATION_FORM_INPUT_NAME.PASSWORD}
          errors={errors}
        >
          <input
            autocomplete="off"
            type="password"
            placeholder="Password"
            {...register(USER_INFORMATION_FORM_INPUT_NAME.PASSWORD)}
          />
        </CustomFormInput>

        <button type="submit" className="button-signin">
          {isLoading ? <IconLoading /> : "Sign In"}
        </button>

        <div
          className="signup-switch"
          onClick={() => {
            resetForm();
            handleSignUpClick && handleSignUpClick();
          }}
        >
          <HiSwitchHorizontal />
          Signup
        </div>
      </form>
    </div>
  );
}

export default forwardRef(LoginForm);
