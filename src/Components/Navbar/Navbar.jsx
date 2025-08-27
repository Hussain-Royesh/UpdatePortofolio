import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={Logo} alt="the pic of logo" />
        
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="blogs">Blogs</a></li>
                <li><a href="about">About me</a></li>
                <li><a href="achievement">Achievement!</a></li>
            </ul>
        </nav>
    
        <div className='Nav-Connect-Me'>
            <button>Contact Me</button>
        </div>
      
    </div>
  )
}

export default Navbar
