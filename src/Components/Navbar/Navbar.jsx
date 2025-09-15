import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-blue-200'>
      <nav>
        <ul style={{display:"flex", cursor:"pointer", gap:'10px',alignContent:'center',textAlign:"center",padding:"20px"}}>
          <Link to='/'> <li>Home</li></Link> 
          <Link to="/projects"><li>Projects</li></Link>  
          <Link to="/profile"> <li>Profile</li></Link>
          <Link to='/order'><li>Order</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
