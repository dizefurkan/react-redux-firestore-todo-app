import React from "react";

import * as S from "./style";

type Props = {
  overlay: React.ReactNode;
  children: React.ReactNode;
};

function Dropdown(props: Props) {
  const [isOverlayVisible, setOverlayVisibility] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setOverlayVisibility(true);
  }, []);
  const onMouseLeave = React.useCallback(() => {
    setOverlayVisibility(false);
  }, []);

  return (
    <S.Wrapper
      tabIndex={0}
      onFocus={onMouseEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={(event) => {
        event.key === "Escape" && onMouseLeave();
      }}
    >
      <div>{props.children}</div>
      <S.OverlayWrapper $visible={isOverlayVisible}>
        {props.overlay}
      </S.OverlayWrapper>
    </S.Wrapper>
  );
}

export default Dropdown;
