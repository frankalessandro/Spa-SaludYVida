import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const FloatButtons = () => {
  return (
    <div
      className="fixed left-0 flex md:bg-purple-200/70 flex-col p-3 shadow-lg rounded-r-lg 
      bottom-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-[51]"
    >
      {/* Fondo transparente en móvil */}
      <div
        className="absolute inset-0  bg-opacity-50 md:bg-opacity-100 rounded-r-lg pointer-events-none"
      ></div>
      {/* Botones */}
      {/* <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 text-white rounded-full hover:bg-blue-700 hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 text-white rounded-full hover:bg-pink-600 hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 text-white rounded-full hover:bg-gray-800 hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaTiktok size={20} />
      </a> */}
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 text-white rounded-full bg-green-300 md:bg-none hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};
