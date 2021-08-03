import React from "react";

import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { deleteTodo, Todo as TodoType, updateTodo } from "src/reducer/todos";

import Todo from "./todo";
import Container from "src/component/container";

import * as S from "./style";

function Todos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const onTodoDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const onTodoEdit = (todo: TodoType) => {
    dispatch(updateTodo(todo));
  };

  console.log(todos);
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
