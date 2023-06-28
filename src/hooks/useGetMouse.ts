import { useState, useEffect, useCallback } from "react";

// 获取鼠标位置
function useGetMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandle = useCallback((event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  // 针对组件进行监听
  useEffect(() => {
    // 监听鼠标事件
    window.addEventListener("mousemove", mouseMoveHandle);
    // 当组件销毁时一定要销毁 DOM 事件
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  }, []);
  return [x, y];
}

export default useGetMouse;
