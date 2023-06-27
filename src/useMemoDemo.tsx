import React, { FC, useMemo, useState } from "react";

const useMemoDemo: FC = () => {
  console.log("demo...");
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const [text, setText] = useState("hello");

  const sum = useMemo(() => {
    console.log("gen sum...");
    return num1 + num2;
  }, [num1, num2]);

  function addNum1() {
    setNum1(num1 + 1);
  }
  function addNum2() {
    setNum2(num2 + 1);
  }
  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={addNum1}>新增Num1</button>
      </p>
      <p>
        {num2} <button onClick={addNum2}>新增Num2</button>
      </p>
      <div>
        {/* 表单组件，受控组件 */}
        <input onChange={(e) => setText(e.target.value)} value={text} />
      </div>
    </>
  );
};

export default useMemoDemo;
