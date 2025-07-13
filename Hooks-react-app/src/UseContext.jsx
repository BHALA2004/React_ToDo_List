import React, { use, useContext, useState } from "react"
const userContext =  React.createContext(null)

export default function UseContext(){

   const[user,setUser] = useState({name: "Bala"});

    return(

        <userContext.Provider value={{user,setUser}}>
                <h1>UseContext Example</h1>
                <Parent/>
                </userContext.Provider>
                
        

    )
}

function Parent(){

    const users = useContext(userContext);

    return(

        <div>
              <h2>Haii  {users.user.name}</h2>
        <button onClick={() => users.setUser({name : "Venuu"})}>Change</button>

        </div>

      

    )
}