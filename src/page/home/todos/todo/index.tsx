import React from "react";
import Input from "src/component/input";

import { Todo } from "src/reducer/todos";

import * as S from "./style";

type Props = {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
};

function TodoComponent(props: Props) {
  const [isEditing, setEditMode] = React.useState(false);
  const [task, setTask] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onDeleteClick = React.useCallback(() => {
    props.onDelete(props.todo.id);
  }, [props.todo]);

  const onEditClick = () => {
    if (isEditing) {
      setEditMode(false);
      return;
    }

    setTask(props.todo.task);
    setEditMode(true);
    setTimeout(() => inputRef.current?.focus());
  };

  const onEditSave = () => {
    if (!task || !task.trim()) return;

    props.onEdit({ id: props.todo.id, task });
    setTask("");
    setEditMode(false);
  };

  const onCancel = () => {
    setTask("");
    setEditMode(false);
  };

  return (
    <S.Todo>
      <div style={{ flex: "1", display: isEditing ? "block" : "none" }}>
        <Input
          ref={inputRef}
          placeholder="Type a task"
          value={task}
          onEscape={onCancel}
          onEnter={onEditSave}
          onChange={setTask}
        />
      </div>
      {!isEditing && props.todo.task}
      <S.ActionsWrapper>
        <S.EditButton
          title={isEditing ? "Close without saving" : "Edit this task"}
          onClick={onEditClick}
        >
          {isEditing ? <S.CloseIcon /> : <S.EditIcon />}
        </S.EditButton>
        {isEditing ? (
          <S.SaveButton title="Save changes" onClick={onEditSave}>
            <S.CheckIcon />
          </S.SaveButton>
        ) : (
          <S.CloseButton
            title="Delete this task?"
            disabled={isEditing}
            onClick={onDeleteClick}
          >
            <S.DeleteIcon />
          </S.CloseButton>
        )}
      </S.ActionsWrapper>
    </S.Todo>
  );
}

export default TodoComponent;
