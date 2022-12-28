export const USER_INFORMATION_FORM_INPUT_NAME = {
  EMAIL: "email",
  USER_NAME: "username",
  PASSWORD: "password",
};

export const ERROR_MESSAGE = {
  REQUIRED_FIELD: "REQUIRED_FIELD",
  EMAIL_INVALID: "EMAIL_INVALID",
};

export const getErrorByCode = ({ errorCode }) => {
  switch (errorCode) {
    case ERROR_MESSAGE.REQUIRED_FIELD:
      return "The field can not be empty";

    case ERROR_MESSAGE.EMAIL_INVALID:
      return "The email is not valid";

    default:
      break;
  }
};
