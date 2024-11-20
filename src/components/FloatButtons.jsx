import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export const FloatButtons = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-3 p-3 bg-purple-200 shadow-lg rounded-r-lg">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-white rounded-full hover:bg-pink-600 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3  text-white rounded-full hover:bg-gray-800 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaTiktok size={20} />
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3  text-white rounded-full hover:bg-green-600 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};
