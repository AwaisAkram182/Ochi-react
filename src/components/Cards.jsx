import React from "react";
import { motion } from "framer-motion";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

const projects = [
  { title: "FYDE", img: image1 },
  { title: "TRAWA", img: image2 },
  { title: "VISE", img: image3 },
  { title: "NOVA", img: image4 }
];

const Cards = () => {
  return (
    <div className="cursor-default w-full py-20 bg-zinc-900">
      <div className="w-full px-10 md:px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-white text-[6vw] md:text-[3vw] font-semibold tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-10 md:px-20">
        <motion.div className="flex flex-wrap justify-center gap-9 mt-20">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="cardcontainer w-full md:w-[46%] h-[70vh] min-h-[300px] overflow-hidden rounded-xl gap-10 bg-amber-300 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h1
                className="absolute text-[#CDEA68] text-5xl md:text-6xl font-semibold tracking-tight z-[9] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none"
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h1>
              <div className="card w-full h-full">
                <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
