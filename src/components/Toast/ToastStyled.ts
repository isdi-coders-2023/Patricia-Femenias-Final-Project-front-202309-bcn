import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .toast {
    &--success {
      background-color: #055b2dcc;
      color: ${({ theme }) => theme.colors.light};
    }

    &--error {
      background-color: #c52323;
      color: ${({ theme }) => theme.colors.light};
    }
  }
  .Toastify-text-icon-color-success {
    color: ${({ theme }) => theme.colors.light};
  }

  .Toastify__progress-bar {
    background: ${({ theme }) => theme.colors.light};
  }

  .Toastify__close-button {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default ToastStyled;
