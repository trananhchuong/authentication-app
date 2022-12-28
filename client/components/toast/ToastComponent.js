import PropTypes from "prop-types";
import { TYPE_CONSTANTS } from "./ToastConstants";
import classNames from "classnames";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";

const ToastComponentStyled = styled.div`
  --color-success: #4ac0a4;
  --color-error: #d62d68;

  --background-success: #dbf2ed;
  --background-error: #fbeaf0;

  --toastify-toast-width: 458px;

  .toast-container__box {
    .icon-type__box,
    .icon-close__box {
      margin-right: 8px;
      display: flex;
      align-items: center;
    }

    &.success {
      background: var(--background-success);
      border-left: 8px solid var(--color-success);

      .icon-type__box,
      .icon-close__box {
        svg {
          color: var(--color-success);
        }
      }
    }

    &.error {
      background: var(--background-error);
      border-left: 8px solid var(--color-error);

      .icon-type__box,
      .icon-close__box {
        svg {
          color: var(--color-error);
        }
      }
    }
  }

  .progress {
    background: ${(props) => {
      switch (props.type) {
        case TYPE_CONSTANTS.SUCCESS:
          return "var(--color-success)";
        case TYPE_CONSTANTS.ERROR:
          return "var(--color-error)";
        default:
          return "var(--color-success)";
      }
    }};
  }
`;

function ToastComponent(props, ref) {
  const { type, limit, autoClose, transition } = props;

  const CloseButton = ({ closeToast }) => {
    return <></>;
  };

  return (
    <ToastComponentStyled type={type}>
      <ToastContainer
        transition={transition}
        limit={limit}
        toastClassName={classNames({
          [TYPE_CONSTANTS.ERROR]: type === TYPE_CONSTANTS.ERROR,
          [TYPE_CONSTANTS.SUCCESS]: type === TYPE_CONSTANTS.SUCCESS,
          "toast-container__box": true,
        })}
        progressClassName="progress"
        autoClose={autoClose}
        closeOnClick={false}
        closeButton={CloseButton}
      />
    </ToastComponentStyled>
  );
}

ToastComponent.propTypes = {
  transition: PropTypes.elementType,
  limit: PropTypes.number,
  autoClose: PropTypes.number,
  type: PropTypes.string,
  duration: PropTypes.number,
};

ToastComponent.defaultProps = {
  transition: Bounce,
  limit: 0,
  autoClose: 5000,
  type: TYPE_CONSTANTS.SUCCESS,
  duration: 3000,
};

export default ToastComponent;
