import React, { FC, useState, useCallback } from "react";

const useCallbackDemo: FC = () => {
  const [text, setText] = useState("hello");

  const fn1 = () => console.log("fn1 text", text);
  const fn2 = useCallback(() => {
    console.log("fn2 text", text);
  }, [text]); // useEffect,useMemo,useCallback
  return (
    <>
      <div>
        <div>
          <button onClick={fn1}>fn1</button> &nbsp;{" "}
          <button onClick={fn2}>fn2</button>
        </div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
    </>
  );
};

export default useCallbackDemo;
