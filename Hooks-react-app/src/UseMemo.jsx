import {  useState ,useMemo } from "react"

export default function UseMemo(){

    const [count ,setcount] = useState(0);
    const [newcount , setnewcount] = useState(0);

    function increment(){
        setcount(count+1);
    }

    function decrement(){
        console.log("decrement called")
    }

    const r = useMemo(() =>
    {
           decrement()
    }
    ,[newcount])

    return(
        <div>

        <h1>Haii</h1>
        <h1>value1 :{count}</h1>
        <h2>value2 : {newcount}</h2>
        <button onClick={()=>{
            setnewcount(newcount+1);
        }}>Decrement</button>
         <button onClick={()=>{
            setcount(count+1);
        }}>Increment</button>
        </div>
       
        
    )
}