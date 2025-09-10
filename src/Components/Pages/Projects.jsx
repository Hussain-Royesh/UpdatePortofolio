import React, { useState } from 'react'
import { use } from 'react'

const Projects = () => {


 

  function ControlInput(){

    const[value,setValue]= useState('')

    return(
    <>
    <div style={{backgroundColor:'lightred'}}>
       <input style={{backgroundColor:'red', color:'white'}} type="text" value={value} onChange={(e)=>setValue(e.target.value)} /> 
      <p>{value}</p>
    </div>
    </>
     
    )
  }

    function Likes(){

        const [likes, setLikes] = useState(0)
        
        const  countlikes =()=>{
            setLikes(likes+1)
        }

    return(
        <>
        <button style={{display:'flex', width:'160px', cursor:"pointer"}} onClick={countlikes}>Count the Likes <span style={{fontWeight:"600", paddingLeft:'20px'}}>{likes}</span>  </button></>
    )
    }

    function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{color:'white', padding:'30px', fontWeight:'600'}}>You clicked {count} times!</p>
      <button style={{padding:"30px", fontWeight:'800', cursor:'pointer', color:"yellowgreen"}} onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

  // function Counter() {
  // const [count, setCount] = useState(0);
  //   return(
  //     <div>
  //     <p>{count}</p>
  //     <button onClick={()=> setCount(count+1)}>Click to Count</button>
  //   </div>
  //   )
    
  // }

  return (
    <div>
      <ul style={{ display:"flex", gap:"20px", padding:'10px 20px 30px 40px', cursor:"pointer"}}> 
        <li>
            UK PROJECTS
        </li>
        <li>UN projects</li>
        <li>Asia Projects</li>
      </ul>
      <div style={{backgroundColor:'greenyellow', width:'150px', borderRadius:'30px',margin:"20px"}}>
      <Likes/>
      </div>
      <div style={{backgroundColor:"gray", padding:'20px'}}>
        <ControlInput/>
      </div>

    <div style={{backgroundColor:'blue'}}>
      <Counter/>
    </div>
 
    </div>
  )
}

export default Projects
