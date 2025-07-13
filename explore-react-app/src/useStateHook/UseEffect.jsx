import { useEffect , useState} from "react"

export default function UseEffect(){

    const[data,setData] = useState(null);

    useEffect(() => {
       fetch("https://official-joke-api.appspot.com/random_joke")
       .then((response) => response.json())
       .then((data) => setData(data))
       
    }, []);

    return(
        <>
        
            <h1>Haii</h1>
            <div>{data ? <p>Data: {data.punchline}</p> : <p>Loading data...</p>}
            </div>

        </>
    )

}