'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const userProfile = null; // Ganti dengan URL foto profil user jika ada

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#578FCA] dark:bg-[#161B22] shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo-MRICondyleNet.png" alt="Logo" className="h-8 md:h-10" />
        <span className="hidden md:block md:text-md lg:text-xl font-bold ml-2 text-white">MRICondyleNET</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Profile + Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center text-lg gap-2 text-white">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-[#D9D9D9]">
              {userProfile ? <img src={userProfile} alt="User Profile" className="w-full h-full object-cover" /> : <span className="text-gray-500"></span>}
            </div>
            <FaChevronDown className={`cursor-pointer transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-[#578FCA] dark:bg-[#161B22] rounded-lg shadow-lg overflow-hidden">
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#5774ca] dark:hover:bg-[#30363D] cursor-pointer">Profile</button>
              <hr className="border-gray-200 dark:border-gray-600" />
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-white hover:bg-[#5774ca] dark:hover:bg-[#30363D] cursor-pointer">
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
