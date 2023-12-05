import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const ToastStyled = styled(ToastContainer)`
  .toastify-text-icon-color-success {
    color: ${({ theme }) => theme.colors.light};
  }

  .toastify__icon-color-info {
    color: ${({ theme }) => theme.colors.light};
  }

  .toastify__progress-bar {
    background: ${({ theme }) => theme.colors.light};
  }

  .toastify__close-button {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default ToastStyled;
