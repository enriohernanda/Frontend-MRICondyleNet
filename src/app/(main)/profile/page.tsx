'use client';

import ProfileForm from '@/components/profileComponents/ProfileForm';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="w-full h-full px-4 py-6 text-black dark:text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <img src="/profile-blue.png" alt="Profile Icon Light" className="block dark:hidden w-8 h-8" />
          <img src="/profile-white.png" alt="Profile Icon Dark" className="hidden dark:block w-8 h-8" />
          Profile
        </h1>
      </div>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
