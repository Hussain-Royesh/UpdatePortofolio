import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/home'
import Footer from './components/Footer/Footer'
import Projects from './components/Pages/Projects'
import Profile from './components/Profile/Profile'
import OnlineOrder from './components/OnlineOrder/OnlineOrder'

function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/order' element={ <OnlineOrder/>}/>
      

      </Routes>  
    
    <Footer/>
    </BrowserRouter>

    
</>
  )
}

export default App
