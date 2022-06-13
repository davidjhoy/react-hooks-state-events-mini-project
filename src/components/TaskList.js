
import React from "react";
import Task from "./Task";

function TaskList({ handleDelete, renderedTasks}) {
 
  
  return (
    <div className="tasks">
      {renderedTasks.map((task)=>{
    return <Task key={task.text} text = {task.text} category = {task.category} handleDelete = {handleDelete}/>
   })}
   
   
    </div>
  );

  
  
}

export default TaskList;
