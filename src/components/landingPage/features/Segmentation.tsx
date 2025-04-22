'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { zoomIn } from '../../../app/utils/motion';

const cards = [
  {
    title: 'Precision Segmentation',
    description: 'Utilizes advanced instance segmentation models (e.g., Detectron2, Cascade Mask R-CNN, DeepLabV3+) to accurately isolate the mandibular condyle from MRI scans.',
  },
  {
    title: 'AI-Powered Diagnosis Support',
    description: 'Assists radiologists and researchers in identifying potential TMJ disorders with automated, consistent, and reproducible segmentation results.',
  },
  {
    title: 'Ensemble Learning Integration',
    description: 'Combines multiple model predictions using majority voting to enhance robustness and reduce false positives/negatives.',
  },
  {
    title: 'Augmented Dataset',
    description: 'Enhanced with data augmentation techniques (flip, rotate, scale, etc.) to improve model generalization across diverse MRI inputs.',
  },
  {
    title: 'Flexible Deployment',
    description: 'Supports both cloud-based (Google Colab) and local (GPU-enabled systems) environments for model training and evaluation.',
  },
  {
    title: 'Structured Dataset Format',
    description: 'Organized in COCO JSON format with clean folder structure, enabling seamless integration with computer vision frameworks.',
  },
  {
    title: 'Research-Oriented Design',
    description: 'Built with research in mind, enabling reproducibility, experimentation, and easy extension to other anatomical structures or segmentation tasks.',
  },
];

const Segmentation = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="min-h-screen w-[90%] sm:w-[80%] px-4 sm:px-12 md:px-16 py-20 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => {
        const cardContent = (
          <motion.div
            key={index}
            className={`
        p-6 sm:p-8 opacity-[0.9] rounded-xl shadow-lg shadow-cyan-500/50 
        bg-transparent backdrop-blur-md transition-transform duration-300 
        hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/80
        w-full h-full min-h-[320px] flex flex-col justify-start
        max-w-[500px]
      `}
            variants={zoomIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h2 className="text-lg md:text-2xl font-bold text-white mb-2">{card.title}</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-base md:text-lg">{card.description}</p>
          </motion.div>
        );

        return cardContent;
      })}
    </div>
  );
};

export default Segmentation;
