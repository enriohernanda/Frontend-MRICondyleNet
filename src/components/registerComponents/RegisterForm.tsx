'use client';

import React from 'react';
import PasswordInput from '../PasswordInput';

const RegisterForm = () => {
  return (
    <div className="absolute md:mt-50 lg:relative flex flex-col w-[90%] ml-[5%] md:ml-0 md:w-1/2 px-5 py-5 lg:px-10 lg:py-20 lg:mt-12 bg-white rounded-3xl lg:rounded-none shadow-[0_4px_10px_rgba(0,0,0,0.0.1),4px_0px_10px_rgba(0,0,0,0.0.1),-4px_0px_10px_rgba(0,0,0,0.0.1),0px_-4px_10px_rgba(0,0,0,0.0.1)] lg:shadow-none marginForm">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#3674B5]">Register</h2>
      <p className="text-black text-sm">If you don’t have an account register here</p>
      <form className="mt-6 flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded-2xl bg-[#D9D9D9]" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded-2xl bg-[#D9D9D9]" />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Confirm Password" />
        <a href="#" className="text-[#578FCA] hover:text-sky-500 transition duration-200 text-sm self-end">
          Forget password?
        </a>
        <button className="w-full bg-[#3674B5] text-white p-3 rounded-md hover:bg-sky-700 transition duration-200 cursor-pointer">Register</button>
      </form>
      <a href="/login" className="text-[#578FCA] hover:text-sky-500 transition duration-200 text-sm mt-4">
        Already an account?
      </a>
    </div>
  );
};

export default RegisterForm;
