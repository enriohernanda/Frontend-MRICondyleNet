'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="relative w-20 h-8 bg-[#D9D9D9] rounded-full cursor-pointer flex items-center transition-all">
      <FaSun className={`absolute left-2 text-yellow-500 text-lg transition-all ${isDark ? 'translate-x-12 opacity-0' : 'opacity-100'}`} />
      <FaMoon className={`absolute right-2 text-gray-900 text-lg transition-all ${isDark ? 'opacity-100' : 'translate-x-[-3rem] opacity-0'}`} />
    </button>
  );
};

export default ThemeToggle;
