'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className="w-full p-2 rounded-2xl bg-[#D9D9D9] pr-10" />
      <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

export default PasswordInput;
