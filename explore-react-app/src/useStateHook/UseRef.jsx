import { useRef } from "react"

export default function UseRef(){

    const userRef = useRef();

    const handleClick = () => {
        userRef.current.focus();

    }

    return (

        <div>
        <h1>Haelloo</h1>
        <input type="text" placeholder="Enter a value" ref={userRef}/>
        <button onClick={handleClick}>Click</button>

        </div>

        

    )
}