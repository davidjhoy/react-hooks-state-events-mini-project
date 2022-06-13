import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";



function App() {

  const categories = CATEGORIES
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [renderedTasks, setRenderedTasks] = useState(tasks)
  //set state for categories 
 

  function onTaskFormSubmit(task){
    const updatedTaskList = ([...tasks, task])
    setTasks(updatedTaskList)
    setRenderedTasks(updatedTaskList)
  }
 

  function handleClick(e){
    const newVal = e.target.innerText
    
    setSelectedCategory(newVal);
  

    if (newVal !== "All"){
      const NewArr = tasks.filter((task)=>{
        return task.category === newVal
      })
      setRenderedTasks(NewArr)
    } 
    else {
     setRenderedTasks(tasks)
    }
  }
  
  function handleDelete(e){
    const newArr = tasks.filter((task)=> task.text !== e.target.name)
    setTasks(newArr)
    setRenderedTasks(newArr)
    
    }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {categories}  selectedCategory = {selectedCategory}  handleClick = {handleClick}/>
      <NewTaskForm  categories = {categories} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList renderedTasks = {renderedTasks} handleDelete = {handleDelete} />
    </div>
  );
}

export default App;
