import React, { FC } from "react";
import { observer } from "mobx-react";
import { ObserverTodoStore } from "./store";

type PropsType = {
  todo: ObserverTodoStore;
  del: (id: string) => void;
};

const TodoView: FC<PropsType> = observer((props: PropsType) => {
  function rename() {
    const newName = prompt("重新输入名称", todo.task);
    if (newName) {
      todo.rename(newName);
    }
  }

  function toggleComplete() {
    console.log(123);
    todo.toggleComplete();
  }

  const { todo, del } = props;

  return (
    <li onDoubleClick={rename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.task}
      </span>
      <button onClick={() => del(todo.id)}>删除</button>
    </li>
  );
});

export default TodoView;
