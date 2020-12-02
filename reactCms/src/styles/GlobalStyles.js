import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #151B30;
        min-height: 100vh;
        color: #fff;
        font-size: 14px;
        line-height: 1.325;
        text-rendering: optimizeLegibility;
        font-family: DIN, Helvetica Neue, Helvetica, Arial, sans-serif;
        letter-spacing: 0.123rem;
    }
`;

export const theme = {
  primary: "#222B45",
  secondary: "#151B30",
  sidirgot: "#03aba6",
  text_primary: "#fff",
  text_secondary: "#444",
  button_primary: "#3182CE",
  button_edit: "#D69E2E",
  button_red: "#E53E3E",
  blue: "#3182CE",
  green: "#38A169",
  yellow: "#D69E2E",
  red: "#E53E3E",
  gray: "#64707D",
  teal: "#319795;",
  borderPrimary: "#3182CE",
};

export default GlobalStyles;
