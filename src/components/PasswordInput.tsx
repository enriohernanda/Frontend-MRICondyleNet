// PasswordInput.tsx
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<Props> = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input type={showPassword ? 'text' : 'password'} placeholder={placeholder} className="w-full p-2 rounded-2xl bg-[#D9D9D9] pr-10" value={value} onChange={onChange} />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
