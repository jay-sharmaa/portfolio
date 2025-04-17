"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import SparklesIcon from '@heroicons/react/24/solid/SparklesIcon'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 w-fit"
                >
                    <SparklesIcon className="text-[#b49bff] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">Android Developer Portfolio</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-2 mt-6 font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span className="text-5xl font-medium">Providing</span>
                    <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        the best
                    </span>
                    <span className="text-5xl font-medium">project experience</span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m an Android Developer with experience in Flutter, Native Android Development,
                    and Machine Learning. Check out my projects and skills
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    href="#about"
                    className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-purple-600 hover:bg-purple-700 transition"
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
