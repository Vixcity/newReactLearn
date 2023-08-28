import React, { FC, useRef } from "react";

const useRefDemo: FC = () => {
  const nameRef = useRef("温鑫"); // 不是 DOM 节点了，就是一个普通的 JS 变量，更新不会触发 rerender

  function changeName() {
    nameRef.current = "温呆呆"; // 修改 Ref 值不会触发 rerender（state 修改会触发组件 rerender）
  }

  return (
    <div>
      <p>name {nameRef.current}</p>
      <button onClick={changeName}>changeName</button>
    </div>
  );
};

// const useRefDemo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function selectInput() {
//     const inputElem = inputRef.current;
//     if (inputElem) inputElem.select(); // DOM 节点，DOM 操作 API
//   }

//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello world" />
//       <button onClick={selectInput}>点击选中</button>
//     </div>
//   );
// };

export default useRefDemo;
