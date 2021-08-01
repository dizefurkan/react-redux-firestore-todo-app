import { styled } from "src/theme";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 400px;

  ${({ theme }) => `
    @media (min-width: 440px) {
      margin-left: auto;
      margin-right: auto;
      padding: 0;
    }
  `}
`;
