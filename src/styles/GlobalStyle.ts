import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
 ::before,
 ::after {
   box-sizing: border-box;
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
`;

export default GlobalStyle;
