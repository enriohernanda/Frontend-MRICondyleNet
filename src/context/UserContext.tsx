'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  profileUrl: string;
  setProfileUrl: (url: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profileUrl, setProfileUrl] = useState('/photos.png');

  return (
    <UserContext.Provider value={{ profileUrl, setProfileUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
};
