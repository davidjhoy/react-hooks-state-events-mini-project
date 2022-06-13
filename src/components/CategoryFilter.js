import React from "react";


function CategoryFilter({categories, handleClick, selectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat)=>{
        return (<button key = {cat} name = {cat} onClick={handleClick} className={cat===selectedCategory? "selected":null}>{cat}</button>)
      })}
    </div>
  );
    }

export default CategoryFilter;
