import React from "react";
import * as S from "./style";

type Props = {
  required?: boolean;
  placeholder?: string;
  value?: string;
  type?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
};

function Input(props: Props) {
  return (
    <S.Input
      required={props.required}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
}

export default Input;
