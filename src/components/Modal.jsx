import {useState} from "react"
export default function Modal(){
    const [showModal,setShowModal] = useState(true)
    if(!showModal) return null
 
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:'fixed',top:0,left:0,zIndex:1000,height:'100vh',width:'100vw',background:'rgba(0,0,0,0.4)'}} >
            <div style={{width:'30vw',position:'relative',height:'80vh',background:'white'}}>
            <button style={{position:'absolute',top:'-10px',right:'-10px'}} onClick={()=>setShowModal(false)}>X</button>
                
                <label htmlFor="email">Email</label>
                <input type="text" name="" idemail />
            </div>
        </div>
    )
}