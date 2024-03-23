import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newName, setName] = useState("");
  const [newCategory, setCategory] = useState("Code");

  function handleNewInput(event){
    setName(event.target.value)
  }

  function handleNewCategory(event){
    setCategory(event.target.value);
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      text: newName,
      category: newCategory
    }
    onTaskFormSubmit(newItem);
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {categories.filter((category) =>   category === "All" ? null : category).map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
