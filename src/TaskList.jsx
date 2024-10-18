import React, { useState, useEffect } from "react";
import "./tasklist.css"

function TaskList() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then(data => setTareas(data))
        .catch((error) => console.error("Hubo un error con la API:", error));
     }, [])

     return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center">Lista de tareas</h2>
                <ul className="list-group mt-4">
                    {tareas.map((tarea) => <li key={tarea.id} className="list-group-item">{tarea.id}- {tarea.title}</li>)}
                </ul>
            </div>
        </div>
     )
}

export default TaskList;