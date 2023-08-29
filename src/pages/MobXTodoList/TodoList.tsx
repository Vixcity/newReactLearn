import React, { FC } from "react";
import { observer } from "mobx-react";
import { ObserverTodoListStore } from "./store";
import TodoView from "./TodoView";

type PropsType = {
  store: ObserverTodoListStore;
};

const TodoList: FC<PropsType> = observer((props: PropsType) => {
  const { store } = props;
  function newTodo() {
    const taskName = prompt("输入一个Todo名称");
    if (taskName) {
      store.addTodo(taskName);
    }
  }

  function del(id: string) {
    store.removeTodo(id);
  }

  return (
    <>
      <button onClick={newTodo}>add Todo</button>
      <ul>
        {store.todos.map((todo) => {
          const { id } = todo;
          return <TodoView key={id} todo={todo} del={del}/>;
        })}
      </ul>
      <p>完成的数量：{store.completeTodosCount}</p>
    </>
  );
});

export default TodoList;
