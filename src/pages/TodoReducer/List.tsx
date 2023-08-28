import React, { FC, useContext } from "react";
// import reducer from "./reducer";
// import initialState from "./store";
import { TodoContext } from "./index";

const List: FC = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const { state, dispatch } = useContext(TodoContext);

  function del(id: string) {
    dispatch({ type: "delete", payload: id });
  }
  return (
    <ul>
      {state.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => del(todo.id)}>删除</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
