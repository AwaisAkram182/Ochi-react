import React, { useEffect, useState } from 'react'
import gsap,{Power2,Power4,ScrollTrigger} from "gsap/all";

const Eyes = () => {
    const [leftEye, setLeftEye] = useState({ x: 0, y: 0 });
    const [rightEye, setRightEye] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            const moveEye = (eye) => {
                let rect = eye.getBoundingClientRect();
                let centerX = rect.left + rect.width / 2;
                let centerY = rect.top + rect.height / 2;
                
                let deltaX = mouseX - centerX;
                let deltaY = mouseY - centerY;
                let angle = Math.atan2(deltaY, deltaX);
                
                let moveX = Math.cos(angle) * (rect.width / 4);
                let moveY = Math.sin(angle) * (rect.height / 4);
                return { x: moveX, y: moveY };
            };

            setLeftEye(moveEye(document.getElementById("left-eye")));
            setRightEye(moveEye(document.getElementById("right-eye")));
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.8" className='relative w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] bg-center bg-cover'>
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='bg-zinc-100 w-[15vw] h-[15vw] flex items-center justify-center rounded-full'>
                        <div id='left-eye' className='bg-zinc-900 w-2/3 h-2/3 flex items-center justify-center rounded-full relative'>
                            <div style={{ transform: `translate(${leftEye.x}px, ${leftEye.y}px)` }} className='absolute bg-white w-6 h-6 rounded-full'></div>
                        </div>
                    </div>
                    <div className='bg-zinc-100 w-[15vw] h-[15vw] flex items-center justify-center rounded-full'>
                        <div id='right-eye' className='bg-zinc-900 w-2/3 h-2/3 flex items-center justify-center rounded-full relative'>
                            <div style={{ transform: `translate(${rightEye.x}px, ${rightEye.y}px)` }} className='absolute bg-white w-6 h-6 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;