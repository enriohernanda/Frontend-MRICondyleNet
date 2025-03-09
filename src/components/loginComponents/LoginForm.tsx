'use client';

import React from 'react';
import PasswordInput from '../PasswordInput';

const LoginForm = () => {
  return (
    <div className="absolute md:mt-50 lg:relative flex flex-col w-full md:w-1/2 px-5 py-5 lg:px-10 lg:py-20 lg:mt-12 bg-white rounded-3xl lg:rounded-none">
      <h2 className="text-2xl lg:text-3xl font-bold text-[#3674B5]">Login</h2>
      <p className="text-black text-sm">Login your account here</p>
      <form className="mt-6 flex flex-col space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 rounded-2xl bg-[#D9D9D9]" />
        <a href="#" className="text-[#578FCA] text-sm self-end">
          Forget password?
        </a>
        <PasswordInput placeholder="Password" />
        <a href="/register" className="text-[#578FCA] hover:text-sky-500 transition duration-200 text-sm mt-4">
          Create an account?
        </a>
        <button className="w-full bg-[#3674B5] text-white p-3 rounded-md hover:bg-sky-700 transition duration-200 cursor-pointer">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
