import React from "react";

function CategoryFilter({categories, handleFilter}) {
  function handleClick(event){
    const buttons = event.target.parentNode.childNodes
    for(let i = 0; i < buttons.length; i++){
      buttons[i].classList = "";
    }
    event.target.className = "selected";
    handleFilter(event.target.name)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button name={category} key={category} onClick={handleClick}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
