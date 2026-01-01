// import React from "react"
// import { useState } from "react"

// import "./TodoAppB.css"


// const TodoAppB = () => {
//     const [task, setTask] = useState("");
//     const [tasks, setTasks] = useState([])

//     const AddTask = () => {
//         if (task.trim() === "")
//             return

//         setTasks([...tasks, {text : task, completed : false}]);
//         setTask("")
//     }

//     const deleteButton = (indexDelete) => {
//         const updateTasks = tasks.filter((task, index) => index !== indexDelete);

//         setTasks(updateTasks)
//     }

//     const toggleButton = (indexToggle) => {
//         const updateTask = tasks.map((task, index) => {
//             if (index === indexToggle) {
//                 return {...task, completed : ! task.completed}
//             }
//             return task;
//         })

//         setTasks(updateTask)
//     }

//     return (
//         <div className="app-Container">

//             <h1> To-Do App</h1>

//             <div className="input-Container">

//                 <input type = "text"
//                 placeholder="Enter your task"
//                 value={task}
//                 onChange={(event) => setTask(event.target.value)}
//                 />

//                 <button onClick={AddTask}> Add </button>
//             </div>

//             <ul>
//                 {
//                     tasks.map((task, index) => (
//                         <li key ={index} className = {task.completed? "completed":""}> 
//                         {task.text} 
//                         <button onClick={() => toggleButton(index)}> ✔️</button>
//                         <button onClick = {() => deleteButton(index)}> ❌ </button>
                        
//                         </li>
                       
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default TodoAppB