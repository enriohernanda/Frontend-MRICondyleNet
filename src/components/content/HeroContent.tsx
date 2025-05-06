'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/app/utils/motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const HeroContent = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col items-center justify-center h-screen w-full px-20 text-center z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center top-[-70px]">
        <motion.p variants={slideInFromTop} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-lg text-gray-400 max-w-[600px] w-full">
          <Typewriter words={['MRICondyleNET']} loop={1} cursorStyle="" typeSpeed={80} delaySpeed={100} />
        </motion.p>

        <motion.div variants={slideInFromLeft(0.5)} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="flex flex-col gap-6 font-bold text-white max-w-[800px] w-full">
          <span className="text-3xl md:text-6xl lg:text-6xl">
            <span className="text-4xl md:text-6xl lg:text-6xl text-transparent bg-clip-text bg-[#D8D8D8] font-orelega">Dental Segmentation</span>
          </span>
        </motion.div>

        <motion.p variants={slideInFromRight(0.8)} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-lg text-gray-400 my-5 max-w-[600px] w-full">
          Project AI Yarsi University
        </motion.p>

        <motion.a variants={slideInFromBottom} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} href="/login" target="_self" rel="noopener noreferrer">
          <button
            type="button"
            className="py-3 px-14 me-2 mb-2 text-sm font-semibold rounded-xl focus:outline-none 
                   border-2 border-cyan-500 text-gray-200 
                   hover:bg-gradient-to-r from-blue-500 to-cyan-500 bg-[length:200%_100%] bg-left 
                   transition-all duration-500 ease-in-out 
                   hover:bg-[position:100%_0] cursor-pointer"
          >
            Start Now
          </button>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
