import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

const loadedUsers = useLoaderData() ;
const [users, setUsers] = useState(loadedUsers) ;
const handleDelete = id => {
    console.log("delete :", id)
    fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data)
    if(data.deletedCount > 0){
        alert("User deleted") ;
        const remaining = users.filter( user=> user._id !== id)
        setUsers(remaining)
    }
    })
}

    return (
        <div>
            <h1>Users: {users.length}</h1>
            {
                users.map(user =><li key={user._id}>{user._id} : {user.name} : {user.email} 
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                  <button onClick={() => handleDelete(user._id)}>X</button></li>)
            }
        </div>
    );
};

export default Users;