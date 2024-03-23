import React from "react";

function Task({category, text, handleRemove}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button name={text} className="delete" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
