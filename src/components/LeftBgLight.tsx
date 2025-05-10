import React from 'react';
import Image from 'next/image';

const LeftBgLight = () => {
  return (
    <>
      <div
        className={`hidden lg:flex flex-col items-center w-1/2
  bg-[#3674B5]
  dark:bg-[#0D1117]
  text-white p-10 relative z-0 overflow-hidden`}
      >
        <h1 className="text-3xl font-bold pt-30">MRICondyleNet</h1>
        <div className="relative w-35 h-35 md:w-45 md:h-45 mt-5">
          <Image src="/logo-MRICondyleNet.png" alt="MRICondyleNet Logo" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image src="/theme-left-light.png" alt="waveTheme" layout="responsive" width={100} height={100} className="lg:translate-y-4 dark:hidden" />
          <Image src="/theme-left-dark.png" alt="waveTheme-dark" layout="responsive" width={100} height={100} className="lg:translate-y-4 hidden dark:block" />
        </div>
      </div>

      {/* Hanya tampil di bawah ukuran lg */}
      <div className="lg:hidden absolute bottom-0 w-full height_theme h-fit overflow-hidden">
        <Image className="dark:hidden" src="/theme-left-light.png" alt="waveTheme" layout="responsive" width={100} height={100} />
        <Image className="dark:block hidden" src="/theme-left-dark.png" alt="waveTheme" layout="responsive" width={100} height={100} />
      </div>
    </>
  );
};

export default LeftBgLight;
