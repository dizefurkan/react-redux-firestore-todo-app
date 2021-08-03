import baseStyled, { ThemedStyledInterface } from "styled-components";

const theme = {
  screen: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "36px",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  colors: {
    primary: "#fff",
    secondary: "#000",
    gray: "#9CA3AF",
    border: "#FAFAFA",
  },
};

export default theme;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
