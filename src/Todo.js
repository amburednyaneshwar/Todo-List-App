import React, { useState } from "react";
import './Todo.css';

 
const Name=()=>{
    return(
      <div>
    <div className='Name'>
    <h1>My To-do List</h1>
    </div>
    </div>
    )
  }

  const List=()=>{
    const [search,setSearch]=useState("")
const [task, setTask]=useState([])

 const handlesearch=(event)=>{
       setSearch(event.target.value)
 }
 const handlesubmit=(e)=>{
     e.preventDefault()
     setTask((oldtask)=>{
      return  [...oldtask,search];
    })
    setSearch("")
 }
 const Deletetodo=(value)=>{
const newitems=task.filter((elem, ind)=>{
return ind!==value;
})
setTask(newitems)
}
      return(
          <div>
              <div className="schedule">
<form className="tasks">
    <br/>
    <h3>Add your task</h3>
    <input type="text" placeholder="Add a task..." onChange={handlesearch} value={search}></input> 
    <br/>
    {/* <p><b/>Select a date</p> */}
    {/* <input type="datetime-local" placeholder="Select date..." ></input> */}
    <br/><br/>
     <button  onClick={handlesubmit}>Create Task</button>
</form>
<div className="data">
    
  <div>
{task.map((nvalue,ind)=>{
    return <div className="items" key={ind}> 
       <p >{nvalue}
       <i class="fas fa-trash" onClick={()=>Deletetodo(ind)}> </i>
      </p>
      </div>
    
})}
</div> 

</div>
</div>

</div>      
      )
  }

  const Todo=()=>{
      return(
          <div>
              <Name></Name>
          
              <List></List>

          </div>
      )
  }
  export default Todo;