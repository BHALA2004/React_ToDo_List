import { useState,useLayoutEffect } from "react"

export default function UseLayoutEffect(){

    const[ state,setState ] = useState("red");

    useLayoutEffect(() => {
        document.body.style.backgroundColor = state;
    },[state])
    return(
        <div>
             <h1>haiiiooo</h1>
        <button onClick={() => setState("green")}>Green</button>
        <button onClick={() => setState("red")}>Red</button>
        </div>

       

    )
}