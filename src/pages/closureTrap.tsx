import React, { FC, useRef, useState, useEffect } from "react";

const Demo: FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  function add() {
    setCount(count + 1);
  }

  function alertFn() {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  }

  return (
    <>
      <p>闭包陷阱</p>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alertFn</button>
      </div>
    </>
  );
};

export default Demo;
