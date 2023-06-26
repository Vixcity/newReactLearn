import React, { FC } from "react";
import "./List1.css";

const List1: FC = () => {
  // 列表页
  const questionList = [
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
  ];
  function edit(id: string) {
    console.log("edit", id);
  }
  return (
    <div>
      <h1>问卷发布页</h1>
      {questionList.map((question) => {
        const { id, title, isPublished } = question;
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
                edit(id);
              }}
            >
              编辑问卷
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List1;
