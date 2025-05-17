"use client"; 
import React from 'react'; 
import { motion } from 'framer-motion'; 
import { slideInFromRight } from '@/utils/motion'; 
import { Typewriter } from 'react-simple-typewriter'; 
import Image from 'next/image'; 
 
const HeroContent = () => { 
    return ( 
        <motion.div 
            initial="hidden" 
            animate="visible" 
            className="flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 mt-16 w-full z-[20] gap-10" 
        > 
            <div className="flex flex-col gap-5 justify-center text-start w-full lg:w-1/2"> 
                <div className="flex flex-row items-center gap-4"> 
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 my-5 leading-relaxed min-w-[250px]"> 
                        <Typewriter 
                            words={['I am an Android Developer.', 'Check out my projects!']} 
                            loop={0} 
                            cursor 
                            cursorStyle="_" 
                            typeSpeed={70} 
                            deleteSpeed={50} 
                            delaySpeed={1000} 
                        /> 
                    </div> 
                </div> 
            </div> 
 
            <motion.div 
                variants={slideInFromRight(0.8)} 
                className="w-full lg:w-1/2 flex justify-end items-center pr-[50px]" 
            > 
                <a href="https://appetize.io/embed/b_ihevdlvxqe6e3h7x7y7ouyfiaq" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 duration-300">
                    <Image 
                        src="/ph.png" 
                        alt="Phone preview" 
                        width={300} 
                        height={600} 
                        className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain cursor-pointer" 
                        priority 
                    />
                </a>
            </motion.div> 
        </motion.div> 
    ); 
}; 
 
export default HeroContent;