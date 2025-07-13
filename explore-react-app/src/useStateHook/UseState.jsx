import { useState } from "react";
import "../App.css";
export default function UseState(){

    const [ count,setCount ] = useState(0);

    return(

        <>

        <h1>haiii {count}</h1>
        <button onClick={()=> {
            setCount(count+1);
        }}>Increase</button>

        </>

    )

}