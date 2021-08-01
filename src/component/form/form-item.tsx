import React from "react";

type FormItemProps = {
  required?: boolean;
  label?: string;
  children: React.ReactNode;
};

function FormItem(props: FormItemProps) {
  return (
    <label>
      <span>
        {props.required ? "*" : ""}
        {props.label}
      </span>
      <div>{props.children}</div>
    </label>
  );
}

export default FormItem;
