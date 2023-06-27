import React, { FC, useEffect } from "react";
import "./QuestionCard.css";

type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion?: (id: string) => void;
  publishQuestion?: (id: string) => void;
};

// FC - function component
const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props;

  function publish(id: string) {
    publishQuestion && publishQuestion(id);
  }

  function del(id: string) {
    deleteQuestion && deleteQuestion(id);
  }

  useEffect(() => {
    console.log("question card mounted");

    return () => {
      console.log("question card destroy", id);
    };
  }, []);

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: "green" }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button
        onClick={() => {
          publish(id);
        }}
      >
        发布问卷
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id);
        }}
      >
        删除问卷
      </button>
    </div>
  );
};

export default QuestionCard;
