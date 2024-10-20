import { useEffect, useState } from "react"

// Realistic example of useEffect
export default function Users(){
    const [users, setUsers] = useState([])

    useEffect(function() {
        console.log("Fetching users!!!");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => setUsers(result))
    },[])

    // It is just to show rendering;)
    console.log(Math.random());

    return(
        <ul>
            <li>Users are going to be here...</li>
            {users.map(user => <li key={user.id}>{user.id} {user.name}</li>)}
        </ul>
    )

}