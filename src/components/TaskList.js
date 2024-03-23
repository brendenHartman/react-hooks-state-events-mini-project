import React from "react";
import Task from './Task.js';
import {v4 as uuid} from 'uuid';

function TaskList({tasks, handleRemove}) {

  return (
    <div className="tasks">
      {tasks.map((task) => <Task  key={uuid()} category={task.category} text={task.text} handleRemove={handleRemove}/>)}
    </div>
  );
}

export default TaskList;
