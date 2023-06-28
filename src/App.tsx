import React from "react";
import { useGetInfo } from "./hooks/index";
import { useTitle } from "ahooks";
import "./App.css";
// import List1 from "List1";
import List2 from "List2";
// import ImmerDemo from "immerDemo";
// import UseRefDemo from "useRefDemo";
// import UseMemoDemo from "useMemoDemo";
// import UseCallback from "useCallback";
import ClosureTrap from "closureTrap";

function App() {
  const { loading, info } = useGetInfo();
  useTitle("APP Page 2");
  return (
    <>
      <p>{loading ? "加载中" : info}</p>
      <List2></List2>
      <ClosureTrap></ClosureTrap>
    </>
  );
}

export default App;
