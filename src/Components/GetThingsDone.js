import React from "react"
import { useState } from 'react'
import { useRef, useEffect } from "react";
import "./GetThingsDone.css"

const GetThingsDone = () => {

    const [thingsToDo, setThingsToDo] = useState("");
    const [listsOfthings, setListOfThings] = useState([]);

    const inputRef = useRef(null)

    const addThingsToDo = () => {
        if (thingsToDo.trim() === "") 
            return

        setListOfThings([...listsOfthings, {text :thingsToDo, completed : false}])
        setThingsToDo("")
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const deleteButton = (deleteToggle) => {
        const updateThingsToDo = listsOfthings.filter((_, index) =>
        index !== deleteToggle)
        setListOfThings(updateThingsToDo)
    }

    const toggleCompleted = (checkToggle) => {
        const updateThingsToDo = listsOfthings.map((thingsToDo, index) => {
            if (index === checkToggle) {
                return {...thingsToDo, completed : !thingsToDo.completed}
            }
            return thingsToDo
        })
        setListOfThings(updateThingsToDo)
    }


    return (
        <div className="appContainer">
            <h1> Get things Done App</h1>

            <div className="inContainer">
                <input type = "text"
                placeholder = "Enter your Activity ..."
                value={thingsToDo}
                onChange={(event) => setThingsToDo(event.target.value)}
                ref={inputRef}
                 />

                 <button onClick={addThingsToDo}> + </button>
            </div>
            <ul>
                {
                    listsOfthings.map((thingsToDo, index) => (
                        <li key = {index} className = {thingsToDo.completed? "completed" : ""}>
                            {thingsToDo.text} 
                            <button className="green" onClick ={() => toggleCompleted(index)}>check</button>
                            <button className="red" onClick={() => deleteButton(index)}>Delete</button>
                         </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default GetThingsDone