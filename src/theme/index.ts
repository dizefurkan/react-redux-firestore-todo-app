import baseStyled, { ThemedStyledInterface } from "styled-components";

const theme = {
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
};

export default theme;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
