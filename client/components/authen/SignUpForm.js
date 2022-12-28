import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ERROR_MESSAGE,
  getErrorByCode,
  USER_INFORMATION_FORM_INPUT_NAME,
} from "../../constants/authenConstants";
import CustomFormInput from "../formCustomInput/CustomFormInput";
import IconLoading from "../iconLoading/IconLoading";
import { yupResolver } from "@hookform/resolvers/yup";

SignUpForm.propTypes = {};

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

function SignUpForm({ handleSignup, isLoading, handleSignInClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate()),
  });

  const onSubmit = async (formValues) => {
    handleSignup && handleSignup(formValues);
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>

        <CustomFormInput
          name={USER_INFORMATION_FORM_INPUT_NAME.USER_NAME}
          errors={errors}
        >
          <input
            autocomplete="off"
            placeholder="Name"
            {...register(USER_INFORMATION_FORM_INPUT_NAME.USER_NAME)}
          />
        </CustomFormInput>

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
          {isLoading ? <IconLoading /> : "Sign Up"}
        </button>

        <div className="signup-switch" onClick={handleSignInClick}>
          Sign In
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
