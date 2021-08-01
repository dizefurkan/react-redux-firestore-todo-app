import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
