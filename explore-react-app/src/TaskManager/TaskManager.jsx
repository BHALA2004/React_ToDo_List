import { useState } from "react";
import TaskForm from "./TaskForm";
import './TaskManager.css';
export default function TaskManager(){
    const[state,changeState] = useState([]);
    return(
        <>
        
        <h1>Efficient Task</h1>
        <p>Task Count = {state.length}</p>
        <TaskForm/>
        </>
    );
}