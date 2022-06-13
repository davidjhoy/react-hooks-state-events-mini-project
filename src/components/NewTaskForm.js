import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [details, setDetail] = useState("")
const [categoryChoice, setCategoryChoice] = useState("Code")

function handleChange(e){
  setDetail(e.target.value)
  
}

function handleSelectChange(e){
  setCategoryChoice(e.target.value)
  
}


function handleSubmit(e){
  e.preventDefault()
  const newTask = {text: details, category: categoryChoice}
  onTaskFormSubmit(newTask)
}


  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange = {handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {handleSelectChange}>
          {categories.map((cat)=>{
            if (cat === "All"){return false}
            else{
              return (<option key = {cat}>{cat}</option>)}
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
