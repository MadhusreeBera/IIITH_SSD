import React from "react";

const Student = () => {
  const data = [
    {
      examName: "Mid sem",
      courseName: "SSD",
      comment: "thanks",
      response: "cool",
    },
  ];
  return (
    <div>
      <div className="feedbackHeader ">
        <h1>Feedbacks</h1>
        <button>Add New Query</button>
      </div>
      {data.map((ele) => {
        return (
          <div className="feedbacks">
            <div className="font-bold">Exam Name: {ele.examName}</div>
            <div>Course Name: {ele.courseName}</div>
            <div>
              <label>Your Comment:</label>
              <textarea value={ele.comment}></textarea>
            </div>
            <div>
              TA's response:
              <textarea value={ele.response}></textarea>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Student;
