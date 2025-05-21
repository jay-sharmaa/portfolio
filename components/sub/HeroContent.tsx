"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight } from '@/utils/motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const HeroContent = () => {
    const [selectedTab, setSelectedTab] = useState('Study Help');

    const imageMap: { [key: string]: string } = {
        'Study Help': '/New Project.png',
        'FitLite': '/Fitlite.png',
        'Virtual Vogue': '/VirtualVogue.png',
    };

    const phoneImage = (
        <div className="relative w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] aspect-[9/16]">
            <Image
                src="/phn.png"
                alt="Phone preview"
                fill
                className="object-contain"
                priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={imageMap[selectedTab]}
                    alt={`${selectedTab} Preview`}
                    width={160}
                    height={160}
                    className="object-contain"
                />
            </div>
        </div>
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 mt-10 sm:mt-16 w-full z-[20] gap-10"
        >
            <div className="flex flex-col gap-5 justify-center text-start w-full lg:w-1/2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 leading-relaxed min-w-[200px]">
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
                className="w-full lg:w-1/2 flex flex-col items-start lg:items-start"
            >
                <div className="w-full flex justify-start pl-2 sm:pl-4 mb-4">
                    <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-end">
                        {['Study Help', 'FitLite', 'Virtual Vogue'].map((title) => (
                            <button
                                key={title}
                                onClick={() => setSelectedTab(title)}
                                className={`px-4 py-1 text-sm font-medium rounded-full transition duration-200 ${selectedTab === title
                                        ? 'bg-white text-black'
                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                    }`}
                            >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedTab === 'Study Help' && (
                    <a
                        href="https://appetize.io/embed/b_ihevdlvxqe6e3h7x7y7ouyfiaq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105 duration-300"
                    >
                        {phoneImage}
                    </a>
                )}

                {selectedTab === 'FitLite' && (
                    <a
                        href="https://appetize.io/embed/b_65yzgrf7u7swgiy4zdyiki3rke"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105 duration-300"
                    >
                        {phoneImage}
                    </a>
                )}

                {selectedTab === 'Virtual Vogue' && (
                    <div className="cursor-not-allowed opacity-70">
                        {phoneImage}
                    </div>
                )}

            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
