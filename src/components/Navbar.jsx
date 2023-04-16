import { useNavigate,Link } from "react-router-dom"
export default function Navbar(){
    let navigate = useNavigate()
    if(localStorage.getItem('token')){
        return (
            <ul  style={{display:"flex",gap:"20px"}}>
                <li><Link to ="/">Home</Link></li>
               <li> <Link to ="/users">users</Link></li>
                <li><button onClick={()=>{navigate("/login");localStorage.removeItem("token")}}>logout</button></li>
            </ul>
        )
    }
    return (
        <ul style={{display:"flex",gap:"20px"}}>
                <Link to ="/">Home</Link>
                <Link to ="/login">login</Link>
                <Link to ="/register">register</Link>
                <Link to ="/users">users</Link>
        </ul>
    )
}