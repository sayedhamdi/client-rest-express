import {useState} from "react"
export default function Modal({text,onSubmit,children}){
    const [showModal,setShowModal] = useState(false)
    
 
    return (
        <div>
            <button onClick={()=>setShowModal(true)}>{text}</button>
            { showModal ? <div style={{display:"flex",justifyContent:"center",alignItems:"center",position:'fixed',top:0,left:0,zIndex:1000,height:'100vh',width:'100vw',background:'rgba(0,0,0,0.4)'}} >
            <div style={{padding:'100px 80px',position:'relative',background:'white',display:"flex",gap:"30px",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <button style={{position:'absolute',top:'-10px',right:'-10px'}} onClick={()=>setShowModal(false)}>X</button>
                {children}
                <button onClick={onSubmit}>{text}</button>
            </div> 
            
        </div>:null}
        </div>
    )
}