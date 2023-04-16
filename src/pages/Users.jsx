import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react'
export default function Users(){

    let [users,setUsers] = useState([])
    let [error,setError] = useState("")
    useEffect(()=>{
         fetch("http://localhost:8000/users/")
            .then(res=>res.json())
            .then(data=>{
                setUsers(data)
                setError("")
            })
            .catch(err=>{
                setError("No user with id")      
            })
        }
,[error,users])
        
    return (
        <div>
            <Navbar />
            <h1>Users</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>fullname</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                { users.length === 0 ? <h1>No users</h1> :
                    users?.map(user=><><UserRow key={user._id} user={user} /></>)
                }
                </tbody>
            </table>
        </div>
    )
}



function UserRow({user}){
    return (
            <tr >
            <td >{user._id}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td><button style={{background:"blue",color:"white"}}>Edit</button></td>
            <td><button style={{background:"red",color:"white"}} onClick={()=>alert("do you really want to delete")}>delete</button></td>
        </tr>
    )

}