import { createGlobalStyle } from "styled-components";
import { colors } from "./theme/colors";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${colors.secondary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
