import React from "react";

import Button from "src/component/button";
import Form from "src/component/form";
import FormItem from "src/component/form/form-item";
import Input from "src/component/input";
import Row from "src/component/row";
import Col from "src/component/col";

import { useAppDispatch, useAppSelector } from "src/store/hooks";

import * as S from "./style";
import { login, logout } from "src/reducer/auth";
import { auth } from "src/firebase";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [userName, setUserName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [isPending, setPending] = React.useState(false);

  const history = useHistory();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const onInputChange =
    (field: "userName" | "firstName" | "lastName") => (value: string) => {
      if (field === "userName") {
        setUserName(value);
      } else if (field === "firstName") {
        setFirstName(value);
      } else {
        setLastName(value);
      }
    };

  const onSubmit = React.useCallback(async () => {
    console.log("Submited");

    try {
      setPending(true);
      const user = await auth.signInAnonymously();
      if (user.user) {
        dispatch(login(user.user.uid));
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setPending(false);
    }
  }, []);

  React.useEffect(() => {
    if (user) {
      history.replace("/");
      return;
    }
  }, [user]);

  return (
    <S.Container>
      <h1>Welcome to Qooper</h1>
      <p>The simple todo app</p>
      <br />
      <br />
      <Form onSubmit={onSubmit}>
        <Row>
          <Col span={24}>
            <FormItem required label="Username">
              <Input
                required
                placeholder="Enter your username"
                value={userName}
                onChange={onInputChange("userName")}
              />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem required label="Firstname">
              <Input
                required
                placeholder="Enter your firstname"
                value={firstName}
                onChange={onInputChange("firstName")}
              />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Lastname">
              <Input
                placeholder="Enter your lastname"
                value={lastName}
                onChange={onInputChange("lastName")}
              />
            </FormItem>
          </Col>
          <Col span={24}>
            <Button block loading={isPending} disabled={isPending}>
              {isPending ? "..." : "SIGN IN"}
            </Button>
          </Col>
        </Row>
      </Form>
    </S.Container>
  );
}

export default SignIn;
