import { useEffect } from "react"

export default function UseEffect(){
    useEffect(() =>{
        document.body.style.backgroundColor = "green"

        setTimeout(()=>{
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        },1000)


    },[])
    return (
        <h1>See the change after a re-render Automatically cause</h1>
    )
}