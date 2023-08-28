import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { StateType } from "../store/index";
import type { TodoItemType } from "store/todoList";
import { removeTodo, addTodo, toggleComplete } from "store/todoList";
import { nanoid } from "nanoid";

const TodoListDemo: FC = () => {
  const todoList = useSelector<StateType>(
    (state) => state.todoList
  ) as TodoItemType[];
  console.log(todoList);

  const dispatch = useDispatch();

  function add() {
    const id = nanoid(5);
    const newTodo = {
      id,
      title: `todo-${id}`,
      complete: false,
    };

    dispatch(addTodo(newTodo));
  }

  return (
    <div>
      <p>TodoListDemo</p>
      <div>
        <button onClick={add}>添加</button>
      </div>
      {todoList.map((todo) => {
        const { id, title, complete } = todo;
        return (
          <div
            key={id}
            style={{ textDecoration: complete ? "line-through" : "" }}
          >
            <span onClick={() => dispatch(toggleComplete({ id }))}>
              {title}
            </span>
            &nbsp;
            <button onClick={() => dispatch(removeTodo({ id }))}>删除</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoListDemo;
