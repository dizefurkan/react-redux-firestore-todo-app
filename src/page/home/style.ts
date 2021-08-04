import { styled } from "src/theme";

export const LoadingText = styled.p`
  margin: 40px 0;
`;

export const TodosLengthText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: right;
`;

export const TodosEmptyText = styled.p`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  text-align: center;
  margin-top: 24px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutIcon = styled.div`
  margin-right: 8px;
`;
