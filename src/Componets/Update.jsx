import { useLoaderData } from "react-router-dom";


const Update = () => {

    const data = useLoaderData()

    console.log(data)

    const handleSubmit = e => {
        e.preventDefault() ;
        const form = e.target ;
        const name = form.name.value ;
        const email = form.email.value ;
        const updatedUser = {name, email} ;
        console.log(email,name) ;

        fetch(`http://localhost:5000/users/${data._id}` ,{
            method: 'PUT' ,
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                alert("User Updated Successfully")
            }
        })
    }

    return (
        <div>
            <h1>Update Information of {data.name}</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name"defaultValue={data.name} id="" /> <br />
        <input type="email" name="email" defaultValue={data.email} id="" /> <br />
        <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;