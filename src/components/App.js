import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  //const [tasksToFilter, setTasksToFilter] = useState(TASKS);
  const [masterTask, setTasks] = useState(TASKS);
  const [category, setMasterCategory] = useState("All");
  function handleSubmit(newTask){
    setTasks([...masterTask, newTask])
  }

  function handleRemove(event){
    setTasks(masterTask.filter((task) => task.text !== event.target.name));
  }

  function handleFilter(category){
    setMasterCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={masterTask.filter((task) => task.category === category || category === "All")} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
//setTasksToFilter(masterTask.filter((task) => {
 // console.log(category)
  //console.log(task.category)
 // return (category === "All" || task.category === category);
//}));