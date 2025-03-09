'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import { zoomIn } from '../../app/utils/motion';

const Publication = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-10 min-h-screen w-[90%] sm:w-[80%] px-4 sm:px-12 md:px-16 py-20 justify-center mx-auto">
      <a href="#" target="_blank" rel="noopener noreferrer" className="w-full hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/80">
        <motion.div
          className="p-6 sm:p-10 opacity-[0.9] rounded-xl w-full shadow-lg shadow-cyan-500/50 bg-transparent backdrop-blur-md cursor-pointer transition-transform duration-300 hover:scale-105"
          variants={zoomIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] font-bold text-3xl md:text-3xl lg:text-4xl">
              {startTyping && <Typewriter key={key} words={['Publication.']} loop={false} cursor cursorStyle="_" typeSpeed={50} deleteSpeed={0} delaySpeed={500} />}
            </span>
            <p className="text-gray-400 text-base sm:text-lg text-center sm:text-right">Date of Conference : Lorem ipsum</p>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mb-4 mt-6 sm:mt-10">Publication Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. </h2>

          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8">
            <span className="text-white">Published in: </span> lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
        </motion.div>
      </a>
    </div>
  );
};

export default Publication;
