import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    }

  :root {
    --toastify-icon-color-success: #fff
  }

  body,
  h1, h2 {
       margin: 0;
  }

  html {
    font-family:  ${({ theme }) => theme.typography.mainFontFamily};
    color: ${({ theme }) => theme.colors.main};
     background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.degraded}
    );
  }

  p {
    margin: 0;
  }

  ul, li  {
    list-style: none;
     margin: 0;
    padding-left: 0;
  }

  a {
     text-decoration: none;
    color: inherit;
  }     

  button {
    border: none;
    background-color: inherit;
    font: inherit;
    cursor: pointer;  
  }

  input, textarea {
    font: inherit;
    border: none
  }
  
  dl, dt, dd {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
