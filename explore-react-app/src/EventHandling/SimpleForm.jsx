export default function SimpleForm(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text"  name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );  
}