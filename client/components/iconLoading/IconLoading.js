import React from "react";
import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const IconLoadingStyled = styled.div`
  .spinner {
    animation: spin infinite 1s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

IconLoading.propTypes = {};

function IconLoading() {
  return (
    <IconLoadingStyled>
      <FaSpinner className="spinner" />
    </IconLoadingStyled>
  );
}

export default IconLoading;
