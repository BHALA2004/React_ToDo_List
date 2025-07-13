import { useState } from "react"

export default function UseState(){
    const [count,setCount] = useState(0);
    const [name, setName] = useState(4);

    function Decrement(name){
        setName(name-1);
    }

    return(

        <div>
             <h1>Count : {count}</h1>
             <h2>Count : {name}</h2>
             <button onClick={() => setCount(count+1)}>Increment</button>
             <button onClick={() => Decrement(name)}>Decrement</button>
        </div>

       
        

    )
}