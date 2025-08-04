'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { slideInFromTop } from '../../app/utils/motion';
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx';
import { BiLogoGmail } from 'react-icons/bi';
import Image from 'next/image';

const teamMembers = [
  { name: 'Chandra Prasetyo Utomo BSc, MS', role: 'Department of Informatics YARSI University', img: '/Chandra_Prasetyo_Utomo.png' },
  { name: 'Muhammad Fathurrachman M.Com.', role: 'Department of Informatics YARSI University', img: '/Muhammad-Fathur.png' },
  { name: 'Dr. Ahmad Badruddin Ghazali', role: 'Kulliyyah of Dentistry IIUM', img: '/Ahmad_Badruddin_Ghazali.png' },
  { name: 'Dr. Cortino Sukotjo DDS, Ph.D, MMSc', role: 'Department of Prosthodontics Pittsburgh University', img: '/prof-cortino.png' },
  { name: 'Dr. Widya Lestari, DDS, MDSc., Ph.D.', role: 'Kulliyyah of Dentistry IIUM', img: '/Widya_Lestari.png' },
  { name: 'Enrio Hernanda', role: 'Frontend Engineer', img: '/enrio.png' },
  { name: 'Anugrah Lan Pambudi', role: 'Backend Engineer', img: '/alan.png' },
  { name: 'Kafah Al Farizi Andeza', role: 'ML Engineer', img: '/kafah.png' },
  { name: 'Muhammad Wildan Pratama BSc', role: 'Department of Informatics YARSI University', img: '/Wildan.png' },
  { name: 'Nashuha Insani BSc', role: 'Department of Informatics YARSI University', img: '/Nashuha_Insani.png' },
];

const OurTeam = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 2 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % Math.ceil(teamMembers.length / cardsPerSlide)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerSlide]);

  const slides = Array.from({ length: Math.ceil(teamMembers.length / cardsPerSlide) });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen w-full text-center bg-transparent text-gray-200 gap-7"
    >
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gray-200"
      >
        Our Team
      </motion.h2>

      <div className="relative w-full max-w-6xl overflow-hidden px-4 sm:px-6 md:px-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((_, i) => (
            <div
              key={i}
              className={`grid ${
                cardsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-3'
              } gap-6 flex-none w-full items-stretch px-4 sm:px-6 md:px-10`}
            >
              {teamMembers
                .slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
                .map((member, index) => (
                  <motion.div
                    key={index}
                    className="shadow-inner shadow-cyan-500/50 bg-[#03001417] backdrop-blur-md px-4 py-6 rounded-2xl flex flex-col items-center gap-4 h-full min-h-[340px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-gray-600">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 mt-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base text-center">{member.role}</p>
                    <div className="flex space-x-3 mt-auto">
                      <a
                        href="#"
                        className="text-gray-200 hover:text-[#E4405F] transition-all duration-300 hover:scale-110"
                      >
                        <RxInstagramLogo size={24} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-200 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                      >
                        <RxLinkedinLogo size={24} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-200 hover:text-gray-400 transition-all duration-300 hover:scale-110"
                      >
                        <RxGithubLogo size={24} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-200 hover:text-red-600 transition-all duration-300 hover:scale-110"
                      >
                        <BiLogoGmail size={24} />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
