import React from "react";

import Button from "src/component/button";
import Form from "src/component/form";
import FormItem from "src/component/form/form-item";
import Input from "src/component/input";
import Row from "src/component/row";
import Col from "src/component/col";

import * as S from "./style";

function SignIn() {
  const onSubmit = React.useCallback(() => {
    console.log("Submited");
  }, []);

  return (
    <S.Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col span={24}>
            <FormItem required label="Username">
              <Input required placeholder="Enter your username" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem required label="Firstname">
              <Input required placeholder="Enter your firstname" />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Lastname">
              <Input placeholder="Enter your lastname" />
            </FormItem>
          </Col>
          <Col span={24}>
            <Button block>SIGN IN</Button>
          </Col>
        </Row>
      </Form>
    </S.Container>
  );
}

export default SignIn;
