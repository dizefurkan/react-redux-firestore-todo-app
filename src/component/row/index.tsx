import React from "react";
import { styled } from "src/theme";

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(24, minmax(0, 1fr));
  gap: 12px;
`;

type Props = {
  children: React.ReactNode;
};

function Row(props: Props) {
  return <StyledRow>{props.children}</StyledRow>;
}

export default Row;
