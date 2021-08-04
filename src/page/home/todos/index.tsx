import React from "react";

import { db } from "src/firebase";
import { useAppSelector } from "src/store/hooks";
import { Todo as TodoType } from "src/reducer/todos";

import Todo from "./todo";
import Container from "src/component/container";

import * as S from "./style";

function Todos() {
  const user = useAppSelector((state) => state.auth.user);
  const todos = useAppSelector((state) => state.todos.todos);

  const onTodoDelete = (id: string) => {
    if (!user) return;
    const _newData = todos.filter((todo) => todo.id !== id);
    db.collection("todo-list").doc(user).set({ tasks: _newData });
  };

  const onTodoEdit = (todo: TodoType) => {
    if (!user) return;
    const _newData = todos.map((t) =>
      t.id === todo.id ? { id: t.id, task: todo.task } : t
    );
    db.collection("todo-list").doc(user).set({ tasks: _newData });
  };

  return (
    <Container>
      <S.Todos>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onEdit={onTodoEdit}
            onDelete={onTodoDelete}
          />
        ))}
      </S.Todos>
    </Container>
  );
}

export default React.memo(Todos);
