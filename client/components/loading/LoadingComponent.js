import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MultiLoading from "./MultiLoading";

export const LoadingStyles = styled.div`
  height: 100%;
  min-height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingComponent(props) {
  const { customStyle, typeLoading, color, } = props;

  return (
    <LoadingStyles style={customStyle}>
      <MultiLoading className={typeLoading} color={color}/>
    </LoadingStyles>
  );
}

LoadingComponent.propTypes = {
  customStyle: PropTypes.object,
  typeLoading: PropTypes.string,
  color: PropTypes.string,
};

LoadingComponent.defaultProps = {
  customStyle: {},
  typeLoading: 'circle-loading',
  color: '',
};

export default LoadingComponent;
