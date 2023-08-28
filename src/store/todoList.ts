import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export type TodoItemType = {
  id: string;
  title: string;
  complete: boolean; // 是否完成
};

const INIT_STATE: TodoItemType[] = [
  {
    id: nanoid(5),
    title: "吃饭",
    complete: false,
  },
  {
    id: nanoid(5),
    title: "睡觉",
    complete: false,
  },
];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: INIT_STATE,
  reducers: {
    addTodo(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      return [action.payload, ...state]; // 把数据放到第一个
    },
    removeTodo(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      const { id: removeId } = action.payload;
      return state.filter((todo) => todo.id !== removeId);
    },
    toggleComplete(
      state: TodoItemType[],
      action: PayloadAction<{ id: string }>
    ) {
      const { id: toggleId } = action.payload;
      return state.map((todo) => {
        const { id, complete } = todo;
        if (id !== toggleId) return todo;
        return {
          ...todo,
          complete: !complete,
        };
      });
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoListSlice.actions;

export default todoListSlice.reducer;
