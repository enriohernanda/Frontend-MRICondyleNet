import React from 'react';
import Image from 'next/image';

const VisualizePage = () => {
  return (
    <div className="w-full h-full px-4 py-2 text-black dark:text-white">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {/* Gambar untuk light mode */}
          <Image src="/visualize-blue.png" alt="Visualize Icon Light" width={32} height={32} className="block dark:hidden" />
          {/* Gambar untuk dark mode */}
          <Image src="/visualize-white.png" alt="Visualize Icon Dark" width={32} height={32} className="hidden dark:block" />
          Visualize
        </h1>
      </div>
    </div>
  );
};

export default VisualizePage;
