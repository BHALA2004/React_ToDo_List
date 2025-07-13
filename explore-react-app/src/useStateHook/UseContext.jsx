import { createContext, useContext, useState } from "react"

const UserContext = createContext(null);
export default function UseContext(){
    const [user,setUser] = useState({name:"Bala",email:"bala@gmail.com"})
    return(

        <UserContext.Provider value={{user,setUser}}>

            <h1>Haii</h1>
         <Dashboard/>

        </UserContext.Provider>
      

    )
}



function Dashboard(){

    const {user,setUser} = useContext(UserContext);
    

    return(

        <>
        <h1>Hii User , {user.name}</h1>
        <button onClick={() => setUser({name:"aaara",email:"aara@gmail"})}>Change User</button>
        <Profile/>
        </>

    )
}

function Profile(){

    const {user,setUser}  = useContext(UserContext);
    return(

        <>
        <div>
            <h1>Name :{user.name}</h1>
            <h1>email:{user.email}</h1>
        </div>
        </>

    )
}