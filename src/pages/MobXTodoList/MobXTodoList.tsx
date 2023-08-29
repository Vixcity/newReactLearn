import React, { FC } from "react";
import TodoList from "./TodoList";
import store from "./store";

const MobXTodoList: FC = () => {
  return (
    <>
      <TodoList store={store} />
    </>
  );
};

export default MobXTodoList;
