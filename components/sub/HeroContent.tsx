"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroContent = () => {
    const paragraph = `I'm an Android Developer with experience in Flutter, Native Android Development, and Machine Learning. Check out my projects and skills.`;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

                <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 my-5 max-w-[680px] leading-relaxed"
                >
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

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
