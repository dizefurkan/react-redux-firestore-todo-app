import React from "react";

type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
};

function Form(props: Props) {
  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit();
    },
    [props.onSubmit]
  );

  return <form onSubmit={onSubmit}>{props.children}</form>;
}

export default Form;
