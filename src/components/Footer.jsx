import React from 'react';
import { Typography } from "@material-tailwind/react";
import Logo from '../assets/SpaLogo.svg';
import Team from '../assets/img/Equipo_Trabajo.png';

export const FooterWithLogo = () => {
  return (
    <footer className="relative min-w-full bg-black" style={{
      clipPath: "inset(-300px 0 0 0)",
    }}>
      {/* Main container */}
      <div 
        className="relative"
        style={{
          clipPath: "polygon(0 -300%, 100% -300%, 100% 100%, 0 100%)"
        }}
      >
        {/* Overlapping image container */}
        <div className="absolute w-full">
          <img
            src={Team}
            alt="Equipo de trabajo"
            className="absolute right-0 -top-40 sm:-top-32 md:-top-28 lg:-top-40 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] max-w-[600px] object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 z-10 relative gap-8 lg:gap-0">
          {/* Logo and information */}
          <div className="flex items-start gap-4 lg:gap-6">
            <img src={Logo} alt="Spa logo" className="w-16 md:w-20 lg:w-28" />
            <div>
              <Typography className="text-lg font-medium mb-2 text-yellow-600">
                Horarios de atención
              </Typography>
              <ul className="text-sm leading-6 text-white">
                <li>Lunes a Viernes: 8:00 AM - 8:00 PM</li>
                <li>Sábado: 9:00 AM - 6:00 PM</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>

          {/* Middle text */}
          <div className="flex flex-col items-center text-center w-full md:w-auto">
            <Typography className="text-2xl md:text-2xl font-bold text-white">
              Spa Salud y Vida
            </Typography>
          </div>

          {/* Space for image alignment */}
          <div className="hidden lg:block w-72"></div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="bg-black text-white text-center py-2">
        <Typography className="text-sm">&copy; 2024 Spa Holístico</Typography>
      </div>
    </footer>
  );
};
