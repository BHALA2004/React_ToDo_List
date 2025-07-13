import { useReducer } from "react";

const initialState = {count:10};
export default function UseReduce(){
    const [state,dispatcher] =  useReducer(reducer,initialState);

    function reducer(state,action){
        switch(action.type){
            case 'inc':
                return {count : state.count + 1}
            case 'dec':
                return {count : state.count - 1}
        }
    }

    return(

        <div>
            <h1>count : {state.count}</h1>
            <button onClick={() => dispatcher({type:'inc'})}>Increment</button>
      <button onClick={() => dispatcher({type:'dec'})}>Decrement</button>

        </div>
        
      


    )
}