'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft, slideInFromRight } from '../../../app/utils/motion';
import Image from 'next/image';

const Segmentation = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16 text-center md:text-left">
      <motion.div className="md:w-1/2" variants={slideInFromLeft(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">Segmentation</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, sit amet adipiscing sem neque sed ipsum
        </p>
      </motion.div>

      <motion.div className="w-full md:w-1/2 flex justify-center md:justify-start" variants={slideInFromRight(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <div className="relative w-[450px] h-[450px] md:w-[500px] md:h-[500px]">
          <Image src="/segmentation.png" alt="Features Segmentation" fill className="object-contain" />
        </div>
      </motion.div>
    </div>
  );
};

export default Segmentation;
