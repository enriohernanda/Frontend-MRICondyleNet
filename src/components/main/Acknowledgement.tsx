'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft, slideInFromRight } from '../../app/utils/motion';

const Acknowledgment = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16">
      <motion.div className="md:w-1/2 text-center md:text-left" variants={slideInFromLeft(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-8">Acknowledgment</h2>
        <p className="text-white text-lg mt-4">
          This poject is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
          sem quam semper libero
        </p>
      </motion.div>

      <motion.div className="w-[250px] h-[250px] flex justify-center items-center" variants={slideInFromRight(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <motion.img
          src="/logo-MRICondyleNet.png"
          className="w-[250px] h-[250px] object-contain"
          alt="Company Logo"
          animate={{
            rotateY: inView ? [0, 360] : 0,
          }}
          transition={{
            rotateY: { duration: 2, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 5, ease: 'linear' },
          }}
        />
      </motion.div>
    </div>
  );
};

export default Acknowledgment;
