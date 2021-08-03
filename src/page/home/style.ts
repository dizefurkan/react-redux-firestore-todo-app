import { styled } from "src/theme";

export const TodosLengthText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: right;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutIcon = styled.div`
  margin-right: 8px;
`;
