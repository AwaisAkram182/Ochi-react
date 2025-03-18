 import React from 'react'
 import Navbar from './Components/Navbar'
import LndingPage from './components/LndingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Cards from './components/Cards' 
import LimitCards from './components/LimitCards'
import Fotter from './components/Fotter'
import LocomotiveScroll from 'locomotive-scroll'


 const App = () => {
  
   return (
     <>
     <div className=' w-full min-h-screen text-white bg-zinc-900'>
       <Navbar/>
       <LndingPage/>
       <Marque/>
       <About/>
       <Eyes/>
       <Cards/>
       <LimitCards/>
       <Fotter/>
     </div>
     </>
   )
 }
 
 export default App
 