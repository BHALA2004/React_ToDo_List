import { useLayoutEffect, useState } from "react"

export default function UseLayout (){

    const [color,setcolor ] = useState("red")

    function changeColor(value){
        document.body.style.backgroundColor = value;
        setcolor(value);
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color;


    },[])

    return(
        <div>
 <h1>See the difference before renders</h1>
        <button onClick={() => changeColor("pink")}>Chnage Color</button>
        </div>
       
    )
}