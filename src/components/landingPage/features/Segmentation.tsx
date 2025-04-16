'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft, slideInFromRight } from '../../../app/utils/motion';
import Image from 'next/image';

const Segmentation = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16 text-center ">
      {/* <motion.div className="w-full flex justify-center" variants={slideInFromRight(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <div className="relative w-[450px] h-[450px] md:w-[700px] md:h-[700px]">
          <Image src="/segmentation.png" alt="Features Segmentation" fill className="object-contain" />
        </div>
      </motion.div> */}
      <motion.div className="" variants={slideInFromLeft(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">🎯 Precision Segmentation</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">
          Utilizes advanced instance segmentation models (e.g., Detectron2, Cascade Mask R-CNN, DeepLabV3+) to accurately isolate the mandibular condyle from MRI scans.
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">🧠 AI-Powered Diagnosis Support</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">
          Assists radiologists and researchers in identifying potential TMJ disorders with automated, consistent, and reproducible segmentation results.
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">🔀 Ensemble Learning Integration</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">Combines multiple model predictions using majority voting to enhance robustness and reduce false positives/negatives.</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">🧪 Augmented Dataset</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">Enhanced with data augmentation techniques (flip, rotate, scale, etc.) to improve model generalization across diverse MRI inputs.</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">💾 Flexible Deployment</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">Supports both cloud-based (Google Colab) and local (GPU-enabled systems) environments for model training and evaluation.</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">📂 Structured Dataset Format</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">Organized in COCO JSON format with clean folder structure, enabling seamless integration with computer vision frameworks.</p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">📈 Research-Oriented Design</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#12FFFB] text-lg mb-4">
          Built with research in mind, enabling reproducibility, experimentation, and easy extension to other anatomical structures or segmentation tasks.
        </p>
      </motion.div>
    </div>
  );
};

export default Segmentation;
