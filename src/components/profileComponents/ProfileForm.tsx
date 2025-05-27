'use client';

import React, { useRef, useState } from 'react';

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState<string>('/photos.png');
  const [username, setUsername] = useState('Username');
  const [email] = useState('username@gmail.com'); // dari login
  const [password, setPassword] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage('/photos.png');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirim ke backend nanti
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto bg-white dark:bg-[#21262D] rounded-xl shadow-md px-6 py-10 text-center space-y-6">
      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full border-2 border-gray-300 dark:border-gray-600" />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-[#D9D9D9] dark:bg-[#1B1F24] bg-opacity-30 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-opacity-50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
        </div>
      </div>

      <div className="space-y-4 text-left">
        <div>
          <label className="font-semibold text-lg">
            <span className="text-black dark:text-white">Name</span>
          </label>
          <div className="flex justify-between items-center">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mt-1 p-2 rounded-md bg-gray-200 dark:bg-[#1B1F24] dark:text-white" />
          </div>
        </div>

        <div>
          <label className="font-semibold text-lg">
            <span className="text-black dark:text-white">Email</span>
          </label>
          <input type="email" value={email} readOnly className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-[#2A2F36] text-gray-600 dark:text-gray-400 cursor-not-allowed" />
        </div>

        <div>
          <label className="font-semibold text-lg">
            <span className="text-black dark:text-white">Password</span>
          </label>
          <div className="flex justify-between items-center">
            <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-1 p-2 rounded-md bg-gray-200 dark:bg-[#1B1F24] dark:text-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button type="button" onClick={handleDeleteImage} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer">
          Delete Photo
        </button>
        <button type="submit" className="cursor-pointer px-6 py-2 bg-[#3674B5] dark:bg-[#161B22] hover:bg-[#2a5f9e] transition border border-sky-600 dark:border-[#2AB7C6] text-white rounded-md">
          Save Changed
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
