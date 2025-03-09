import React from 'react';
import Image from 'next/image';

const LogoBanner = () => {
  return (
    <div className="flex p-4 bg-white w-fit m-auto rounded-2xl mt-5 lg:z-10 shadow-xl gap-9 overflow-hidden">
      <Image src="/logo-yarsi.png" alt="Yarsi Logo" width={100} height={10} />
      <Image src="/logo-iium.png" alt="Yarsi Logo" width={100} height={10} />
      <Image src="/logo-yarsi-ai.png" alt="Yarsi Logo" width={100} height={10} />
    </div>
  );
};

export default LogoBanner;
