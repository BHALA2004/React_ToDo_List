export default function TaskForm(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event Submitted");
    }

    return(

        <form onSubmit={handleSubmit}>
            <div className="task-add-section">

            <input type="text" placeholder="Enter Task" />
                        <button type="submit" className="add-button">Add</button>

            

            </div>


        </form>

    );
}