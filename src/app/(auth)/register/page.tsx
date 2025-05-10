import React from 'react';
import LogoBanner from '@/components/LogoBanner';
import LeftBgLight from '@/components/LeftBgLight';
import RegisterForm from '@/components/registerComponents/RegisterForm';

const RegisterPage = () => {
  return (
    <div
      className="flex justify-center flex-col md:flex-row min-h-screen w-full 
                bg-[#3674B5] 
                dark:bg-[#0D1117] lg:bg-none"
    >
      <div className="absolute top-0 w-full z-20">
        <LogoBanner />
      </div>
      <LeftBgLight />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
