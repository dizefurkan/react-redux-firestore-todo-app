import React from "react";
import Container from "../container";

import * as S from "./style";

type HeaderProps = {
  children: React.ReactNode;
};

function Header(props: HeaderProps) {
  return (
    <S.Header>
      <Container>
        <S.HeaderContent>
          <S.HeaderTitle>Qooper</S.HeaderTitle>
          {props.children}
        </S.HeaderContent>
      </Container>
    </S.Header>
  );
}

export default Header;
