import { styled } from "src/theme";

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["5xl"]};
`;
