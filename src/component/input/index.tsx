import React from "react";

import * as S from "./style";

type Props = {
  ref?: (ref: React.RefObject<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  value?: string;
  type?: string;
  onEnter?: () => void;
  onEscape?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string) => void;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange && props.onChange(event.target.value);
    },
    []
  );

  return (
    <S.Input
      ref={ref}
      required={props.required}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={(event) => {
        event.key === "Enter" && props.onEnter && props.onEnter();
        event.key === "Escape" && props.onEscape && props.onEscape();
      }}
    />
  );
});

export default Input;
