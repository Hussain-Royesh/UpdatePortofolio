import React from 'react'
import user from '../../assets/img/user.png'
import Projects  from '../Pages/Projects'

const Person={
    name:"Muhammad Hussain",
    theme:{
        backgroundColor:'gray',
        color:"white",
        textAlign:'center',
        margin:"30px",
        borderRadius:'20px',
        
    }  

    
}


function DynamicProfile(props){

    return(

        <>
        <div  style={Person.theme}>
            <h1 style={{fontWeight:600, padding:'30px'}}>{Person.name} is our Top Instructor in Deutschland</h1>

         <img  style={{display:"flex",
            borderRadius:'50%', padding:'40px', textAlign:'center'}} src={user} alt="the user profile photo is here" />   
         <ul>He is our TOEFL certified</ul>
               <span style={{backgroundColor:'red'}}>{props.name} </span>
         <ul>He got his Master Degree in China</ul>
         <ul>He has worked in Europe for 10 years</ul>
        </div>
        </>


    )


}
 function Profiles(){

        return(
            
            <img style={{borderRadius:'30px', display:"flex", gap:"20px", padding:'20px'}} src={user} alt="the user Profile" />
        )
    }
const Profile = () => {
   
  return (
    <div style={{backgroundColor:'lightblue', borderRadius:'30px', border:"1px solid yellow", width:'70%', alignContent:"center", alignItems:'center'
    }}>
    <section style={{width:'50%', textAlign:"center",display:"flex", padding:"30px 20px 10px 0px", margin:"10px"
    }}>
            <h2>the Profile Users</h2>

              <Profiles/>
              <Profiles/>

    </section>
    <section style={{padding:'30px', borderRadius:'30px', backgroundColor:'ButtonFace', display:"flex", flex:"1"}}>
        <h2>Projects Section</h2>

        <Projects/>
    </section>
    <section style={{alignItems:"center", padding:'30px', margin:"4px", justifyContent:'center',
        display:"flex",flexDirection:"column"
    }}>
        <h4 style={{fontWeight:800, padding: '0px 20px 0px 10px '}}    >Dynamic Profile is practiced here </h4>
      
        < DynamicProfile/>
        <DynamicProfile name="Royesh"/>
    </section>

    </div>
  )
}

export default Profile
