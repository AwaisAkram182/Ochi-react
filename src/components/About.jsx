import React from 'react'

const About = () => {
  return (
   <>
   <div className='w-full px-10 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>
    <h1 className='aboutff text-black font-["Big Shoulders Thin"] text-[3vw] leading-[3.5vw]
    tracking-tight '>
        Ochi is a strategicc for fast-growing tech bussinesses that need to raise funds,explain complex ideas, and hire great people.
    </h1>
    <div className='w-full flex  border-t-2 mt-20 border-[#a1b562]'>
    <div className='w-1/2'>
    <h1 className='font-semibold mt-4 text-2xl text-zinc-900'>Our Approach</h1>
    <button className=' active:bg-zinc-600 cursor-pointer flex uppercase gap-5 items-center px-6 py-6 bg-zinc-900 rounded-full font-semibold  mt-10'>Read More
    <div className='w-2 h-2 bg-zinc-100 rounded-full'>
        </div>
        </button>
    </div>
    <div className='w-[38vw]  overflow-hidden h-[60vh] bg-[#b0c859] mt-10 rounded-2xl'>
     <img className='w-[38vw] bg-contain  overflow-hidden h-[60vh]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
   
    </div>
    </div>
   </div>
   </>
  )
}

export default About
