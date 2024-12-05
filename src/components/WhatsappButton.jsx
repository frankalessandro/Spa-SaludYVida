import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/573226030044', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group relative overflow-hidden rounded-full bg-green-500 px-8 py-4 
                 transition-all duration-300 ease-out hover:bg-green-600 hover:shadow-lg 
                 hover:shadow-green-500/30 transform hover:-translate-y-1
                 flex items-center gap-3"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-white/20 transition-transform duration-300 
                    group-hover:translate-x-full skew-x-12" />
      
      {/* WhatsApp icon */}
      <MessageCircle className="w-6 h-6 text-white animate-bounce" />
      
      {/* Text content */}
      <span className="relative font-semibold text-white text-sm sm:text-lg">
        Escríbenos por WhatsApp
      </span>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30 
                    animate-ping" />
    </button>
  );
};