import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const FloatButtons = () => {
  return (
    <div
      className="fixed left-0 flex md:bg-purple-200/70 flex-col p-3 shadow-lg rounded-r-lg 
      bottom-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-[51] gap-2 transform translate-x-0 transition-transform duration-200"
    >
      {/* Fondo transparente optimizado */}
      <div
        className="absolute inset-0 bg-opacity-50 backdrop-blur-sm md:bg-opacity-100 rounded-r-lg pointer-events-none"
      ></div>
      
      {/* Botones sociales solo para desktop */}
      <div className="hidden md:flex md:flex-col gap-2">
        <a
          href="https://www.facebook.com/saludyvidapalmira"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 text-white rounded-full bg-blue-700 hover:bg-blue-700 hover:text-white transform hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/saludyvida_centrodeestetica/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 text-white rounded-full bg-pink-600 hover:bg-pink-600 hover:text-white transform hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 text-white rounded-full bg-gray-800 hover:bg-gray-800 hover:text-white transform hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <FaTiktok size={20} />
        </a>
      </div>

      {/* WhatsApp button optimizado para móvil */}
      <a
        href="https://wa.me/573226030044"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 text-white rounded-full bg-green-500 hover:bg-green-600 transform hover:scale-110 transition-transform duration-200 ease-in-out will-change-transform"
        style={{ 
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};