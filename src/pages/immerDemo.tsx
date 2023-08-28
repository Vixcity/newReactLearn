import React, { FC, useState } from "react";
import { produce } from "immer";
import QuestionCard from "../components/QuestionCard";

const ImmerDemo: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: "温鑫", age: 20 });

  function changeAge() {
    setUserInfo(
      produce((draft) => {
        draft.age++;
      })
    );
  }

  // 列表页
  const [questionList, setQuestionList] = useState([
    {
      id: "q1",
      title: "问卷1",
      isPublished: false,
    },
    {
      id: "q2",
      title: "问卷2",
      isPublished: true,
    },
    {
      id: "q3",
      title: "问卷3",
      isPublished: false,
    },
    {
      id: "q4",
      title: "问卷4",
      isPublished: true,
    },
  ]);

  function add() {
    // 新增
    setQuestionList(
      produce((draft) => {
        draft.push({
          id: "q" + (questionList.length + 1),
          title: "问卷" + (questionList.length + 1),
          isPublished: false,
        });
      })
    );
  }
  return (
    <div>
      <h1>ImmerDemo</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>Immer更改State的值</button>
      <h1>问卷列表页2</h1>
      {questionList.map((question) => {
        const { id, title, isPublished } = question;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
          />
        );
      })}
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  );
};

export default ImmerDemo;
