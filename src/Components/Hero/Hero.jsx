import React from 'react'
import './Hero.css'
import {Button} from '../../Components/Button/Button'
import userPic  from '../../assets/img/user.png'
const Hero = () => {
  function Example() {
  return <Button>Save changes</Button>
}
  return (
  
    <div className='hero'>
        <img src={userPic} alt="user picture in HERO Section" />
      <div className='hero-title'>
        <h2>I am a possionate Frontend Developer <span>based in AFG</span></h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio quam quas quibusdam tempora. Cupiditate, ex expedita cum aperiam iure consectetur vitae accusamus facilis eaque. Aspernatur dolore saepe rem illo! </p>
        </div>
       
      <div className='hero-section'>
        <div className='button1'><button>Projects</button></div>
        <div className='button2'> <button>Contact Me</button></div>
        <div>
        <Button>Save Changes</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Hero
