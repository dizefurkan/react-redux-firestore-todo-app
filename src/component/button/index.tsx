import React from "react";
import * as S from "./style";

export type ButtonType = "primary" | "default";

type Props = {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
};

function Button(props: Props) {
  return (
    <S.Button
      $block={props.block}
      $type={props.type || "default"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </S.Button>
  );
}

export default Button;
