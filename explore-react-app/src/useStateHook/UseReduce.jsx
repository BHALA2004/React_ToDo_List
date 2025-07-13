import { useReducer } from "react"
import "../App.css";
function Reduce(state,action){
    switch(action.type){
        case "inc":
            return {count : state.count+1};
        case "dec": 
            return {count : state.count-1};
      
    }
}

export default function UseReduce(){

    const initialState = {count : 0};
    const [state,dispatcher ] = useReducer(Reduce,initialState);
    return(

        <div>

        <h1>Count : {state.count}</h1>
        <button onClick={() => dispatcher({type:"inc"})}>Increase</button>
        <button onClick={() => dispatcher({type:"dec"})}>Decrease</button>
        </div>

    )

}