import React from 'react';
import Image from 'next/image';

const HistoryPage = () => {
  return (
    <div className="w-full h-full px-4 py-2 text-black dark:text-white">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {/* Gambar untuk light mode */}
          <Image src="/history-blue.png" alt="History Icon Light" width={32} height={32} className="block dark:hidden" />
          {/* Gambar untuk dark mode */}
          <Image src="/history-white.png" alt="History Icon Dark" width={32} height={32} className="hidden dark:block" />
          History
        </h1>
      </div>
    </div>
  );
};

export default HistoryPage;
