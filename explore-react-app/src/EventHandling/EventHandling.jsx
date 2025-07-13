import { useState } from "react";

export default function EventHandle(){

    const[message,setmessage] = useState("");
    const handleChange = (e) => {
        setmessage(e.target.value);
    };
    return(

        <>
        <h1>hai,</h1>
        <input type="text" placeholder="Enter message" onChange={handleChange} />
        <p>{message}</p>
        </>
        

    );
}