import { styled } from "src/theme";
import { css } from "styled-components";

import { ButtonType } from ".";

type Props = {
  $type: ButtonType;
  $block?: boolean;
};

export const Button = styled.button<Props>`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  height: 48px;

  ${({ $block }) => $block && "width: 100%"};

  ${({ theme, $type }) => {
    let color = "";
    let bgColor = "";
    let borderColor = "";

    switch ($type) {
      case "primary":
        color = theme.colors.secondary;
        bgColor = theme.colors.primary;
        borderColor = theme.colors.primary;
        break;
      default:
        borderColor = theme.colors.border;
        color = theme.colors.primary;
        bgColor = theme.colors.secondary;
    }

    return css`
      color: ${color};
      background-color: ${bgColor};
      border-color: ${borderColor};
    `;
  }}
`;
