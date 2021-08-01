import React from "react";
import * as S from "./style";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container(props: Props) {
  return (
    <S.Container className={props.className}>{props.children}</S.Container>
  );
}

export default Container;
