import React from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { db } from "src/firebase";
import { setTodos } from "src/reducer/todos";
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
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const [isPending, setPending] = React.useState(false);
  const [isSavePending, setSavePending] = React.useState(false);
  const [userName, setUserName] = React.useState<string | undefined>(undefined);
  const todosLength = todos.length;

  const [task, setTask] = React.useState("");

  React.useEffect(() => {
    const userObjString = window.localStorage.getItem("user") || "";
    if (!userObjString) return;

    const _user = JSON.parse(userObjString);
    if (_user.userName) setUserName(_user.userName);
  }, []);

  React.useEffect(() => {
    if (!user) {
      history.replace("/signIn");
      return;
    }
  }, [user]);

  React.useEffect(() => {
    if (!user) return;

    setPending(true);
    db.collection("todo-list")
      .doc(user)
      .onSnapshot((doc) => {
        const _tasks = doc.data()?.tasks;
        if (!Array.isArray(_tasks)) {
          setPending(false);
          return;
        }

        dispatch(setTodos(_tasks));
        setPending(false);
      });
  }, [user]);

  const addTask = async () => {
    if (!user) return;
    if (isSavePending) return;

    const value = task.trim();
    if (!value) return;
    if (!todos || !Array.isArray(todos)) return;

    const _newData = [...todos, { id: uuidv4(), task }];

    setSavePending(true);
    db.collection("todo-list")
      .doc(user)
      .set({ tasks: _newData })
      .finally(() => {
        setSavePending(false);
        setTask("");
      });
  };

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
        {isPending && <S.LoadingText>loading...</S.LoadingText>}
        {!!todosLength && !isPending && (
          <S.TodosLengthText>{todosLength} task showing</S.TodosLengthText>
        )}
        {!!!todosLength && !isPending && (
          <S.TodosEmptyText>
            There is no todo item.
            <br /> Let's add 🕺🏿
          </S.TodosEmptyText>
        )}
      </Container>
      <Todos />
    </>
  );
}

export default HomePage;
