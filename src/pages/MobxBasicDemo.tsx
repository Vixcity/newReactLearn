import React, { FC, useEffect } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Modal the application store
class Timer {
  secondsPassed = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increase() {
    this.secondsPassed++;
  }
  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

type PropsType = { timer: Timer };
const TimerView = observer((props: PropsType) => {
  const { timer } = props;

  return (
    <button onClick={() => timer.reset()}>Seconds Passed: {timer.secondsPassed}</button>
  );
});

const MobxBasicDemo: FC = () => {
  useEffect(() => {
    const id = setInterval(() => {
      myTimer.increase();
    }, 1000);

    return () => {
      clearInterval(id); // 自己定义的定时器，要自己去销毁
    };
  }, []);

  return (
    <div>
      <p>MobxBasicDemo</p>
      return <TimerView timer={myTimer}></TimerView>
    </div>
  );
};

export default MobxBasicDemo;
