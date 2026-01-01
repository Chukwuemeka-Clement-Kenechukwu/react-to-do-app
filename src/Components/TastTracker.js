import React from "react"
import { useState } from "react"

import  "./TaskTracker.css"

const TaskTracker = () => {
    
    const[task, setTask] = useState("");
    const[tasks, setTasks] = useState([]);

    const listTracker  = tasks.map((task, index) => (
        <li key = {index} className = {task.completed ? "completed" : ""}> 
        {task.text} 
        <button onClick = {() => toggleDelete(index)}>❌</button>
        <button onClick = {() => completedToggle(index)}>✔️</button>
        </li>
    ))

    // ADD BUTTON FUNCTION
    const tracker = () => {
        if (task.trim() === "")
            return

        setTasks([...tasks, {text : task, completed : false}]);
        setTask("")
    }

    // DELETE BUTTON FUNCTION
    const toggleDelete = (t_delete) => {
        const updateTracker = tasks.filter((_, index) => index !== t_delete)

        setTasks(updateTracker)
    }

    const completedToggle = (c_toggle) => {
        const updateTracker = tasks.map((task,index) => {
            if(index === c_toggle) {
                return {...task, completed : ! task.completed}
            }
            return task;
        })

        setTasks(updateTracker);
    }

    return (
        <section className="containerSection">
            <h1> Task Tracker App</h1>

            <div className="inputSection">
                <input type = "text"
                placeholder = "Enter Your Task Here"
                value = {task}
                onChange = {(event) => setTask(event.target.value)}
                />
                <button onClick = {tracker}>Add</button>
            </div>
            <ul>
                {
                    listTracker
                }
            </ul>
        </section>
    )
}

export default TaskTracker