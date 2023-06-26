import React, { FC, useState } from "react";
import "./List2.css";
import QuestionCard from "QuestionCard";

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

  function add() {
    // 新增
    setQuestionList(
      questionList.concat({
        id: "q" + (questionList.length + 1),
        title: "问卷" + (questionList.length + 1),
        isPublished: false,
      })
    );
  }

  function deleteQuestion(id: string) {
    // 删除
    setQuestionList(
      questionList.filter((q) => {
        if (q.id === id) return false;
        else return true;
      })
    );
  }

  function publishQuestion(id: string) {
    // 修改
    setQuestionList(
      questionList.map((q) => {
        if (q.id !== id) return q;
        else
          return {
            ...q,
            isPublished: true,
          };
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
