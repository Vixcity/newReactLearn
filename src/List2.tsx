import React, { FC, useState, useEffect } from "react";
import { produce } from "immer";
import QuestionCard from "./components/QuestionCard";

const List1: FC = () => {
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

  useEffect(() => {
    console.log("question list changed");
  }, [questionList]);

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

  function deleteQuestion(id: string) {
    // 删除
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((q) => q.id === id);
        draft.splice(index, 1);
      })
    );
  }

  function publishQuestion(id: string) {
    // 修改
    setQuestionList(
      produce((draft) => {
        const q = draft.find((q) => q.id === id);
        if (q) q.isPublished = true;
      })
    );
  }

  return (
    <div>
      <h1>问卷列表页2</h1>
      {questionList.map((question) => {
        const { id, title, isPublished } = question;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            deleteQuestion={deleteQuestion}
            publishQuestion={publishQuestion}
          />
        );
      })}
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  );
};

export default List1;
