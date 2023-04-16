import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function UserProfile(){
    let {id} = useParams()
    let [user,setUser] = useState({})
    let [error,setError] = useState("")
    useEffect(()=>{
         fetch("http://localhost:8000/users/"+id)
            .then(res=>res.json())
            .then(data=>{
                setUser(data)
                setError("")
            })
            .catch(err=>{
                setError("No user with id")      
            })
        }
,[error])
    if(error){
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>User Profile</h1>
            <h1>hello { user?.fullname}</h1>
        </div>
    )
}