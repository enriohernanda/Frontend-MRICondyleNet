import React from 'react';
import Image from 'next/image';

const LogoBanner = () => {
  return (
    <div className="flex p-4 bg-white w-fit lg:h-18 m-auto rounded-2xl mt-5 lg:z-10 shadow-[0_4px_10px_rgba(0,0,0,0.0.2),4px_0px_10px_rgba(0,0,0,0.0.2),-4px_0px_10px_rgba(0,0,0,0.0.2),0px_-4px_10px_rgba(0,0,0,0.0.2)] gap-9 overflow-hidden">
      <Image src="/logo-yarsi.png" alt="Yarsi Logo" width={100} height={100} className="w-fit" />
      <Image src="/logo-iium.png" alt="Yarsi Logo" width={100} height={100} className="w-fit" />
      <Image src="/logo-yarsi-ai.png" alt="Yarsi Logo" width={100} height={100} className="w-fit" />
    </div>
  );
};

export default LogoBanner;
