import React from 'react'

const LimitCards = () => {
  return (
   <>
   <hr />
    <div className='w-full h-full bg-zinc-900 px-14  flex py-10  gap-5'>
        <div className='cardcontt h-[50vh] w-1/2'>
            <div className=' cardd relative flex items-center justify-center rounded-xl w-full h-full  bg-[#004D43]'>
                <img className='absolute ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute uppercase px-10 rounded-full bottom-5 py-2 bg-[#224D44] text-[#CCE968] left-8 border-1'>Explore</button>
            </div>
        </div>
        <div className='cardcontt flex gap-5 w-1/2 h-[50vh]'>
             <div className='cardd relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                 <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                     <button className=' absolute px-4 uppercase rounded-full bottom-5 py-2 bg-[#192826] text-white left-5 border-1 cursor-pointer'>Awards</button>
             </div>
             <div className='cardd relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
                <img className='h-30' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                     <button className=' absolute px-4 uppercase rounded-full bottom-5 py-2  bg-[#212121] text-white left-5 border-1 cursor-pointer'>Join Us</button>
             </div>   
        </div>
    </div>
   </>

  )
}

export default LimitCards
