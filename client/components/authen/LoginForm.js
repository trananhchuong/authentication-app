import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import authenticationApi from "../../api/authenticationApi";
import {
  ERROR_MESSAGE,
  getErrorByCode,
  USER_INFORMATION_FORM_INPUT_NAME,
} from "../../constants/authenConstants";
import CustomFormInput from "../formCustomInput/CustomFormInput";
import LoadingComponent from "../loading/LoadingComponent";
import ToastComponent from "../toast/ToastComponent";
import { TYPE_CONSTANTS } from "../toast/ToastConstants";
import { toast, Flip } from "react-toastify";
import ToastCardByType from "../toast/ToastCardByType";

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

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaValidate()),
  });

  const [toastType, setToastType] = useState("");

  const renderToastCard = (content) => {
    const { message, type } = content;
    console.log(
      "🚀 ~ file: LoginForm.js:49 ~ renderToastCard ~ content",
      content
    );
    setToastType(type);
    toast(<ToastCardByType message={message} type={type} />);
  };

  const onSubmit = async (formValues) => {
    try {
      const response = await authenticationApi.loginAction(formValues);

      const content = {
        message: "Login Successfully",
        type: TYPE_CONSTANTS.SUCCESS,
      };
      renderToastCard(content);
    } catch (error) {
      const message = error?.response?.data?.message;

      const content = { message, type: TYPE_CONSTANTS.ERROR };
      renderToastCard(content);
    }
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
          Sign In
        </button>
      </form>
      <ToastComponent type={toastType} autoClose={3000} transition={Flip} />
    </div>
  );
}

export default LoginForm;
