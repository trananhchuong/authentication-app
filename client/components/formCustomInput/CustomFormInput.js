import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CustomFormInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;


  .content__box {
    position: relative;
  }

  .custom__input__label {
    font-size: 16px;
    text-align: left;

    font-weight: 700;
    color: #4d4d4d;

    &.isRequired:after {
      content: " *";
      color: red;
    }
  }

  .error-content {
    display: flex;

    color: #bc2d5f;
    font-size: 14px;
    margin-top: 4px;

    .icon__box {
      margin-right: 8px;
    }
  }
  .description {
    font-size: 14px;
    font-weight: 400;
    font-style: italic;

    margin-bottom: 8px;
  }
`;

CustomFormInput.propTypes = {
  label: PropTypes.any,
  errors: PropTypes.object,
  name: PropTypes.string,
  classNameCustom: PropTypes.string,
  labelForTrigger: PropTypes.bool,
  isRequired: PropTypes.bool,
  getValues: PropTypes.func,
  hasInputBorderError: PropTypes.bool,
  description: PropTypes.string,
};

CustomFormInput.defaultProps = {
  label: null,
  errors: {},
  name: null,
  classNameCustom: "custom-input__box",
  labelForTrigger: true,
  isRequired: false,
  getValues: () => {},
  hasInputBorderError: true,
  description: null,
};

function CustomFormInput(props) {
  const { errors, children, name, classNameCustom, hasInputBorderError } =
    props;

  const renderErrorMessage = (message) => {
    return (
      <div className="error-content">
        <div className="content">{message}</div>
      </div>
    );
  };

  return (
    <CustomFormInputStyled className={classNameCustom}>
      <div
        className={classNames({
          content__box: true,
          isError: hasInputBorderError && !!errors?.[name],
        })}
      >
        {children}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => renderErrorMessage(message)}
      />
    </CustomFormInputStyled>
  );
}

export default CustomFormInput;
