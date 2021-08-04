import { styled } from "src/theme";

export const LoadingText = styled.p`
  margin: 40px 0;
`;

export const TodosLengthText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: right;
`;

export const NoDataIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const TodosEmptyText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  text-align: center;
  margin-top: 24px;
  font-weight: 400;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutIcon = styled.div`
  margin-right: 8px;
`;
