 import { motion } from 'framer-motion'
import React from 'react'
 
 
 const Marque = () => {
 
    return (
    <>
    <div  className='w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-[hsl(172,100%,15%)] '>
        <div className='text uppercase border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden gap-10 '>
        <motion.div className="overflow-hidden whitespace-nowrap flex gap-15 ">
  <motion.h1
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }}
    transition={{ ease: "linear", duration: 9, repeat: Infinity }}
    className="text-[13vw] leading-none font-['Neue Montreal'] font-bold mb-4"
  >
    We are ochi
  </motion.h1>
  <motion.h1
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }}
    transition={{ ease: "linear", duration: 9, repeat: Infinity }}
    className="text-[13vw] leading-none font-['Neue Montreal'] font-bold mb-4"
  >
    We are ochi
  </motion.h1>
  <motion.h1
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }}
    transition={{ ease: "linear", duration: 9, repeat: Infinity }}
    className="text-[13vw] leading-none font-['Neue Montreal'] font-bold mb-4"
  >
    We are ochi
  </motion.h1>
</motion.div>

           
        </div>

    </div>
    
    </>
    
   )
 }
 
 export default Marque
 