import { styled } from "src/theme";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

type OverlayWrapperProps = {
  $visible: boolean;
};

export const OverlayWrapper = styled.div<OverlayWrapperProps>`
  position: absolute;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  border-radius: 4px;
  top: 100%;
  width: 150px;
  right: 0;
  z-index: 1;
  background-color: #fff;
  padding: 8px 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid ${({ theme }) => theme.input.borderColor};

  ::after {
    position: absolute;
  top: -5px;
  right: 10px;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent ${({ theme }) =>
    theme.input.borderColor} transparent;
}
  }
`;
