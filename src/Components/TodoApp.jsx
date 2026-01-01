// import React from "react";
// import "./TodoApp.css"
// import { useState } from "react"

// const TodoApp = () => {
//     // THIS STORES SOMETHING. EMPTY BOX AND EMPTY ARRAY
//     const [task, setTask] = useState("");
//     const [tasks, setTasks] = useState([]);

//     const TasksLists = tasks.map((task, index) => (
//         <li key={index} className= {task.completed ? "completed" : ""}> 
//              {task.text} 
//              <button onClick = {() => deleteTask(index)}>❌</button>
//              <button onClick = {() => toggleComplete(index)} >✔️</button>
//         </li>
//     ))


//     //THIS IS THE DEFINITION OF THE ONCLICK METHOD
//     const addTask = () => {
//         if (task.trim() === "")
//             return;

//         //COPY THE THE OLD TASK VALUE TO THE NEW

//         setTasks([...tasks, {text : task, completed : false}]); 
//         setTask("") // Clears the task state
//     }

//     //CREATING A DELETE  FUNCTION FOR THE DELETE BUTTON
//     const deleteTask = (indexToDelete) => {
//         const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
//         setTasks(updatedTasks)
//     }

//     //CREATING A TOGGLE FUNCTION FOR THE TOGGLE BUTTON
//     const toggleComplete = (indexToToggle) => {
//         const updatedTasks = tasks.map((task, index) => {
//             if(index === indexToToggle) {
//                 return {...task, completed: ! task.completed }
//             }
//             return task;
//         })

//         setTasks(updatedTasks);
//     }

//     return (
//         <div className="todo-container">
//             <h1> My To-Do List</h1>

//             <div className="input-section">
                
//                 <input type="text" 
//                 placeholder="Enter your task here"
//                 value={task}
//                 onChange = {(e) => setTask(e.target.value)} 
//                 />
//                 <button onClick = {addTask}> Add </button>
//             </div>

//             <ul>
//                     {
//                     TasksLists/* {tasks.map((task, index) => (
//                         <li key = {index}>{task}</li>
//                     ))} */}
//             </ul>
//         </div>
//     );
// };

// export default TodoApp