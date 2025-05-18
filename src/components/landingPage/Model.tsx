'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromBottom } from '@/app/utils/motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Model = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <div className="relative flex flex-col h-full w-full px-5 md:px-10 lg:px-20" id="about-me">
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col items-center justify-center min-h-screen w-full text-center z-[20]">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <motion.div variants={slideInFromLeft(0.5)} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="flex flex-col gap-6 font-bold text-gray-200 max-w-[800px] w-full">
            <span className="font-bold text-3xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gray-200 font-orelega">MRICondyleNET MODEL</span>
          </motion.div>

          <motion.p variants={slideInFromRight(0.8)} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="text-sm sm:text-lg text-gray-400 max-w-[800px] w-full px-4 sm:px-0">
            Our model is the most advanced ever made for gene assessment.
          </motion.p>

          <motion.div variants={slideInFromBottom} animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.8 }} className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mt-10 flex justify-center">
            <div className="relative w-[80%] max-w-full h-[300px] sm:h-[400px] overflow-hidden">
              <Image src="/ai_model.png" alt="AI Model" fill className="object-contain hover:scale-105 hover:-translate-y-1" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Model;
