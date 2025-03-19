'use client';

import NavbarMain from '@/components/main/NavbarMain';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#EBEBEB] dark:bg-gradient-to-br dark:from-[#161D6F] dark:via-[#0B2F9F] dark:to-[#000000]">
      <NavbarMain />
      <main className="p-4 text-black dark:text-white">{children}</main>
    </div>
  );
};

export default MainLayout;
