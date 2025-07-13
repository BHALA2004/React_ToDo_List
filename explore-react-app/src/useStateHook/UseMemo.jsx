import { useMemo, useState } from "react";

export default function Usememo(){

    const items = ["Apple","Banana","Cherry","Date"];
    const [ search,setsearch] = useState("");
    const [counter,setCounter] = useState(0);

   const filteredItems =  useMemo(() => {
        console.log("Filtering items...");
         return items.filter((item) => item.includes(search));

     

    },[search])

    
 
    return(
        <div>
            <input type="text" placeholder="Enter a word" onChange={(e) => setsearch(e.target.value)} />
             <h1>Count : {counter}</h1>
             <button onClick={() => setCounter(counter+1)}>Increase</button>
             <h1>Filtered</h1>
             <ul>
                {filteredItems.map((items) => {
                    return <li key={items}> {items}</li>
                })}
             </ul>

        </div>
       
        

    )
}