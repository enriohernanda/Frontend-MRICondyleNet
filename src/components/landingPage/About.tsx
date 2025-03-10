'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
    <div className="relative flex items-center justify-center min-h-screen w-full h-full px-4 md:px-8 lg:px-16">
      {/* Container with Border & Gradient Shadow */}
      <div
        className="relative z-20 flex flex-col items-center justify-center w-full h-auto p-8 
           shadow-teal-500/50 before:absolute before:inset-0 before:bg-gradient-to-r from-teal-500 to-cyan-500 before:blur-xl before:opacity-20"
      >
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="flex flex-col items-center justify-center w-full text-center">
          <div className="max-w-4xl mx-auto flex flex-col gap-5 justify-center items-center">
            <motion.div className="font-bold text-3xl md:text-3xl lg:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] font-orelega">
                {startTyping && (
                  <Typewriter
                    key={key}
                    words={[
                      'MRICondyleNET is an Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. ',
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                )}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
