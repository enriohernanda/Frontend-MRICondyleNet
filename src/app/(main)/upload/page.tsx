'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const UploadPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (folderInputRef.current) {
      folderInputRef.current.setAttribute('webkitdirectory', '');
      folderInputRef.current.setAttribute('directory', '');
    }
  }, []);

  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = () => fileInputRef.current?.click();
  const handleFolderSelect = () => folderInputRef.current?.click();

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter((file) => ['image/png', 'image/jpeg'].includes(file.type));
    console.log('Selected files:', imageFiles);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => ['image/png', 'image/jpeg'].includes(file.type));
    console.log('Dropped files:', imageFiles);
  };

  return (
    <div className="w-full h-full px-4 py-2 text-black dark:text-white">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Image src="/upload-blue.png" alt="Upload Icon Light" width={32} height={32} className="block dark:hidden" />
          <Image src="/upload-white.png" alt="Upload Icon Dark" width={32} height={32} className="hidden dark:block" />
          Upload
        </h1>
      </div>

      {/* Drag & Drop Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`rounded-lg flex flex-col items-center justify-center p-10 transition-colors ${dragActive ? 'bg-blue-100 dark:bg-gray-800' : 'bg-[#F4F9FF] dark:bg-[#161B22]'}`}
      >
        <div className="mb-2">
          <Image src="/upload-cloud-blue.png" alt="Cloud Icon Light" width={48} height={48} className="block dark:hidden" />
          <Image src="/upload-cloud-white.png" alt="Cloud Icon Dark" width={48} height={48} className="hidden dark:block" />
        </div>
        <p className="text-xl font-semibold mb-4 text-center">Drag and drop file(s) to upload, or :</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={handleFileSelect} className="flex items-center gap-2 bg-[#3674B5] dark:bg-[#161B22] text-white py-2 px-4 rounded hover:bg-[#2a5f9e] border border-sky-600 cursor-pointer">
            <Image src="/file.png" alt="File Icon" width={20} height={20} />
            Select file
          </button>
          <button onClick={handleFolderSelect} className="flex items-center gap-2 bg-[#3674B5] dark:bg-[#161B22] text-white py-2 px-4 rounded hover:bg-[#2a5f9e] border border-sky-600 cursor-pointer">
            <Image src="/folder.png" alt="Folder Icon" width={20} height={20} />
            Select folder
          </button>
        </div>

        {/* Hidden Inputs */}
        <input type="file" accept=".png,.jpg,.jpeg" multiple ref={fileInputRef} onChange={handleFilesChange} className="hidden" />
        <input type="file" multiple ref={folderInputRef} onChange={handleFilesChange} className="hidden" />
      </div>
    </div>
  );
};

export default UploadPage;
