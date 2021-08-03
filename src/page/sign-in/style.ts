import { styled } from "src/theme";
import _Container from "src/component/container";

export const Container = styled(_Container)`
  margin-top: 40px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["5xl"]};
`;
