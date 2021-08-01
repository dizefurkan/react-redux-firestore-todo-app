import React from "react";
import { styled } from "src/theme";
import { css } from "styled-components";

type StyledColumnProps = {
  $span: number;
  $sm?: number;
};

const StyledColumn = styled.div<StyledColumnProps>`
  grid-column: span ${({ $span }) => $span} / span ${({ $span }) => $span};

  ${({ theme, $sm }) => css`
    @media (max-width: ${theme.screen.sm}px) {
      grid-column: span ${$sm || 24} / span ${$sm || 24};
    }
  `}
`;

type Props = {
  span: number;
  sm?: number;
  children: React.ReactNode;
};

function Column(props: Props) {
  if (props.span < 1 || props.span > 25)
    throw Error("number arrange should be 1-24");
  return (
    <StyledColumn $span={props.span} $sm={props.sm}>
      {props.children}
    </StyledColumn>
  );
}

export default Column;
