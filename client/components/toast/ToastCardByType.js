import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { TYPE_CONSTANTS } from "./ToastConstants";

const ToastCardByTypeStyled = styled.div`
  display: flex;

  .content__box {
    flex: 1;

    .title {
      font-weight: 600;
    }
  }
`;

function ToastCardByType({ type, message }) {
  const renderTitle = () => {
    switch (type) {
      case TYPE_CONSTANTS.SUCCESS:
        return "Success";
      case TYPE_CONSTANTS.ERROR:
        return "Error";
      default:
        return "Title not found";
    }
  };

  return (
    <ToastCardByTypeStyled>
      <div className="content__box">
        <div className="title">{renderTitle()}</div>
        <div className="content">{message}</div>
      </div>
    </ToastCardByTypeStyled>
  );
}

ToastCardByType.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.number,
};

ToastCardByType.defaultProps = {
  message: "",
  type: TYPE_CONSTANTS.SUCCESS,
  duration: 3000,
};

export default ToastCardByType;
