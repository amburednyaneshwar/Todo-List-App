import React, { useState } from "react";
import './App.css';
import FlipMove from "react-flip-move";
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
           
<form className="tasks">
    <br/>
    <input type="text" placeholder="Add a task..." onChange={handlesearch} value={search}></input> 
    <button  onClick={handlesubmit}>Add</button>
 
    <FlipMove duration={300} easing="ease-in-out">
{task.map((nvalue,ind)=>{
    return <div className="items" key={ind}>
       <p >{nvalue}
       <i class="fa fa-trash-o" onClick={()=>Deletetodo(ind)} ></i>
      </p>     
      </div>  
})}
</FlipMove>
</form> 
</div>     
)}

  const Todo=()=>{
      return(
          <div>
              <Name></Name>
              <List></List>
          </div>
      )
  }
  export default Todo;