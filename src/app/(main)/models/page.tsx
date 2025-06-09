import React from 'react';
import Image from 'next/image';

const ModelsPage = () => {
  return (
    <div className="w-full h-full px-4 py-2 text-black dark:text-white">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {/* Gambar untuk light mode */}
          <Image src="/models-blue.png" alt="Models Icon Light" width={32} height={32} className="block dark:hidden" />
          {/* Gambar untuk dark mode */}
          <Image src="/models-white.png" alt="Models Icon Dark" width={32} height={32} className="hidden dark:block" />
          About Models
        </h1>
        <div className='rounded-lg flex flex-col items-center justify-center p-10 mt-6 transition-colors border-2 border-sky-400 dark:border-[#2AB7C6] bg-[#F4F9FF] dark:bg-[#161B22]'>

        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
