import React from "react";
// import { useGetInfo } from "./hooks/index";
// import { useTitle } from "ahooks";
import "./App.scss";
// import List1 from "./pages/List1";
// import List2 from "./pages/List2";
// import ImmerDemo from "./pages/immerDemo";
// import UseRefDemo from "./pages/useRefDemo";
// import UseMemoDemo from "./pages/useMemoDemo";
// import UseCallback from "./pages/useCallback";
// import ClosureTrap from "./pages/closureTrap";
// import StyleComponentsDemo from "styledComponentsDemo";
import FormElement from "./pages/FormElementDemo";
// import ContextDemo from "./pages/ContextDemo/ContextDemo";
// import CountReducer from "./pages/CountReduce";
// import Count from "./pages/CountRedux";
// import TodoListDemo from "pages/TodoList";
// import MobxBasicDemo from "pages/MobxBasicDemo";
import MobXTodoList from "pages/MobXTodoList/MobXTodoList";

function App() {
  // const { loading, info } = useGetInfo();
  // useTitle("APP Page 2");

  return (
    <>
      <FormElement />
      {/* <p>{loading ? "加载中" : info}</p> */}
      {/* <List2></List2> */}
      {/* <ContextDemo /> */}
      {/* <CountReducer /> */}
      {/* <TodoReducer /> */}
      {/* <Count /> */}
      {/* <TodoListDemo /> */}
      {/* <MobxBasicDemo /> */}
      <MobXTodoList />
    </>
  );
}

export default App;
