import { styled } from "src/theme";

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: 4px;
  height: 48px;
  padding: 0 16px;
`;
