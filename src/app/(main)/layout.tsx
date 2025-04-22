'use client';

import NavbarMain from '@/components/main/NavbarMain';
import Sidebar from '@/components/main/Sidebar';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#EBEBEB] dark:bg-[#0D1117]">
      {/* Navbar */}
      <NavbarMain />

      {/* Wrapper untuk sidebar & konten */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 text-black dark:text-white">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
