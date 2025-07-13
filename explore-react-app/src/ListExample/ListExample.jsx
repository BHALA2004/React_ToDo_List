export default function ListExample(){
    const list = ["React","JavaScript","HTML","CSS"];
    return(
        <>
         <h1>List Example</h1>

        <ul>
            {
                list.map((event,index) => {
                   return <li key ={index}>{event.toUpperCase()}</li>

                })
            }
            {
                list.map((event, index) => (
                    <li key={index}>{event.toUpperCase()}</li>
                ))
            }
        </ul>
        </>

       

    );
}