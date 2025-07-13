import { useState } from "react";
import { useRef } from "react";


export default function UseRef(){

    const userRef = useRef(5);
    const [val,setVal] = useState(0);

    function handleClick(){
        setVal(val+1)
        userRef.current = 50;
        console.log(userRef.current);
    }


  

    return (

        <div>
                <h1>Haiii</h1>
                <h1>count : {userRef.current} {val}</h1>
                <input type="text" placeholder="Enter a text" ref={userRef} />
                <button onClick={handleClick}>Button</button>


        

        </div>
    

    )
}