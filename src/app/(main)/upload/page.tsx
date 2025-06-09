'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

const modelOptions = [
  { id: 1, name: 'Mask R-CNN' },
  { id: 2, name: 'Cascade Mask R-CNN' },
  { id: 3, name: 'HTC' },
  { id: 4, name: 'Mask2Formers' },
  { id: 5, name: 'SOLOv2' },
  { id: 6, name: 'Ensemble Method (Recommended)' },
];

const UploadPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = () => fileInputRef.current?.click();

  const handleFiles = (files: File[]) => {
    const imageFile = files.find((file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type));
    if (imageFile) {
      setSelectedImage(imageFile);
      setImagePreviewUrl(URL.createObjectURL(imageFile));
    }
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
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
    handleFiles(files);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleModelSelect = (id: number) => {
    setSelectedModel(id);
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    setSelectedImage(null);
    setImagePreviewUrl(null);
    setResultImageUrl(null);
  };

  const handleUpload = async () => {
    if (!selectedImage || !selectedModel) {
      alert('Select the image and model first.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Unauthorized: No token found');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('model', selectedModel.toString());
    formData.append('mytoken', token);

    try {
      setIsUploading(true);
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.status === 'success') {
        setResultImageUrl(`${result.result_url}`);
      } else {
        alert(result.message || 'An error occurred while uploading.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to connect to server. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 text-black dark:text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Image src="/upload-blue.png" alt="Upload Icon Light" width={32} height={32} className="block dark:hidden" />
          <Image src="/upload-white.png" alt="Upload Icon Dark" width={32} height={32} className="hidden dark:block" />
          Upload
        </h1>
      </div>

      {/* Model Dropdown */}
      <div className="relative mb-6">
        <button onClick={toggleDropdown} className="text-white border border-[#2AB7C6] rounded-md px-5 py-2 w-full sm:w-[300px] flex justify-between items-center bg-[#3674B5] dark:bg-[#161B22] transition cursor-pointer">
          {selectedModel ? modelOptions.find((m) => m.id === selectedModel)?.name : 'Select Model'}
          <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 p-2 w-full sm:w-[300px] bg-[#3674B5] dark:bg-[#161B22] rounded-md border border-[#2AB7C6] shadow-lg">
            {modelOptions.map((model) => (
              <div key={model.id} onClick={() => handleModelSelect(model.id)} className="cursor-pointer bg-white dark:bg-[#0D1117] border border-[#2AB7C6] px-4 py-2 mt-1 rounded-md hover:bg-gray-100 dark:hover:bg-[#1f2937] transition">
                {model.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Drag & Drop Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`rounded-lg flex flex-col items-center justify-center p-10 transition-colors border-2 border-dashed border-sky-400 dark:border-[#2AB7C6] ${dragActive ? 'bg-blue-100 dark:bg-gray-800' : 'bg-[#F4F9FF] dark:bg-[#161B22]'}`}
      >
        <div className="mb-2">
          <Image src="/upload-cloud-blue.png" alt="Cloud Icon Light" width={48} height={48} className="block dark:hidden" />
          <Image src="/upload-cloud-white.png" alt="Cloud Icon Dark" width={48} height={48} className="hidden dark:block" />
        </div>
        <p className="text-xl font-semibold mb-4 text-center">Drag and drop file(s) to upload, or :</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button onClick={handleFileSelect} className="flex items-center gap-2 bg-[#3674B5] dark:bg-[#161B22] text-white py-2 px-4 rounded hover:bg-[#2a5f9e] border border-sky-600 dark:border-[#2AB7C6] cursor-pointer">
            <Image src="/file.png" alt="File Icon" width={20} height={20} />
            Select file
          </button>
        </div>
        <input type="file" accept=".png,.jpg,.jpeg" multiple ref={fileInputRef} onChange={handleFilesChange} className="hidden" />
      </div>

      {/* Preview & Upload */}
      {imagePreviewUrl && (
        <div className="mt-5 flex flex-col items-center">
          <img src={imagePreviewUrl} alt="Preview" className="max-w-full max-h-96 rounded shadow-md mb-4" />
          <div className="flex gap-4">
            <button onClick={handleUpload} disabled={isUploading} className="bg-[#3674B5] dark:bg-[#161B22] hover:bg-[#2a5f9e] text-white px-4 rounded transition border border-sky-600 dark:border-[#2AB7C6] cursor-pointer">
              {isUploading ? 'Uploading...' : 'Upload & Predict'}
            </button>
            <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 rounded transition cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Result Preview */}
      {resultImageUrl && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Segmentation Results:</h2>
          <img src={resultImageUrl} alt="Segmented Result" className="rounded shadow-md max-w-full" />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
