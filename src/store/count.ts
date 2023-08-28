import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = 100;

export const countSlice = createSlice({
  name: "count", // 模块的名字， redux store 默认是可以拆分成模块的
  initialState: INIT_STATE,
  reducers: {
    increase(state: number) {
      return state + 1; // 返回一个新的 state ，不可变数据
    },
    decrease(state: number) {
      return state - 1;
    },
  },
});

export const { increase, decrease } = countSlice.actions;

export default countSlice.reducer;
