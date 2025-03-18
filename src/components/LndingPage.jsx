import { motion } from "framer-motion";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const LndingPage = () => {
  // Framer Motion Variants for left-to-right animation
  const slideInVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        data-scroll
        data-scroll-speed="-0.8"
        className="w-full h-screen bg-zinc-900 pt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-struc mt-28 px-20">
          {["We create", "Eye Opening", "Presentation"].map((items, index) => (
            <motion.div
              key={index}
              className="masker border-zinc-800"
              variants={slideInVariants}
              initial="initial"
              animate="animate"
            >
              <h1 className='uppercase text-[6vw] font-["Founders Grotesk"] leading-[5vw] tracking-tight font-medium'>
                {items}
              </h1>
            </motion.div>
          ))}
        </div>

        <div className="flex border-t-[1px] border-zinc-800 mt-32 py-5 px-20 justify-between">
          {["for public and private companies", "From pitch to IPO"].map(
            (items, index) => (
              <motion.p
                key={index}
                className="text-md mt-3 font-light capitalize text-s tracking-tight leading-none"
                variants={slideInVariants}
                initial="initial"
                animate="animate"
              >
                {items}
              </motion.p>
            )
          )}

          <div className="start flex items-center gap-5">
            <motion.div
              className="px-5 capitalize py-2 border-2 active:bg-zinc-600 cursor-pointer rounded-full border-zinc-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={slideInVariants}
              initial="initial"
              animate="animate"
            >
              Start
            </motion.div>
            <motion.div
              className="w-10 h-10 flex items-center justify-center border-2 rounded-full border-zinc-500"
              whileHover={{ rotate: 360 }}
              variants={slideInVariants}
              initial="initial"
              animate="animate"
            >
              <span className="active:bg-zinc-600 cursor-pointer rotate-[89deg]">
                <FaArrowDownLong />
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LndingPage;
