import React from "react";
import { useHistory } from "react-router-dom";

import { db } from "src/firebase";
import { addTodo } from "src/reducer/todos";
import { logout } from "src/reducer/auth";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

import Todos from "./todos";
import Input from "src/component/input";
import Header from "src/component/header";
import Container from "src/component/container";
import Dropdown from "src/component/dropdown";

import LogoutIcon from "src/asset/svg/gr-logout";
import * as S from "./style";

function HomePage() {
  const history = useHistory();
  const user = useAppSelector((state) => state.auth.user);
  const todosLength = useAppSelector((state) => state.todos.todos.length);
  const dispatch = useAppDispatch();

  const [task, setTask] = React.useState("");

  React.useEffect(() => {
    if (!user) {
      history.replace("/signIn");
      return;
    }
  }, [user]);

  React.useEffect(() => {
    db.collection("todo-list")
      .doc("SF")
      .get()
      .then((doc) => {
        console.log("Current data: ", doc.data());
      });
    // .onSnapshot((doc) => {
    //   console.log("Current data: ", doc.data());
    // });
  }, []);

  const addTask = () => {
    const value = task.trim();
    if (!value) return;

    dispatch(
      addTodo({
        id: "" + new Date().getUTCMilliseconds(),
        task,
      })
    );
    setTask("");
  };
  const userName = JSON.parse(localStorage.getItem("user") || "")?.userName;

  return (
    <>
      <Header>
        <Dropdown
          overlay={
            <S.LogoutButton
              style={{ width: "100%" }}
              onClick={() => dispatch(logout())}
            >
              <S.LogoutIcon>
                <LogoutIcon />
              </S.LogoutIcon>
              Logout
            </S.LogoutButton>
          }
        >
          <span>{userName}</span>
        </Dropdown>
      </Header>
      <Container>
        <Input
          placeholder="Type a task"
          value={task}
          onEnter={addTask}
          onChange={setTask}
        />
        {!!todosLength && (
          <S.TodosLengthText>{todosLength} task showing</S.TodosLengthText>
        )}
      </Container>
      <Todos />
    </>
  );
}

export default HomePage;
