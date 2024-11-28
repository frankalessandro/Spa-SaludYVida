import { Typography } from "@material-tailwind/react";
import Logo from '../assets/SpaLogo.svg';
import Team from '../assets/img/Equipo_Trabajo.png';

export const FooterWithLogo = () => {
  return (
    <footer className="relative min-w-[100vw] bg-white min-h-full border-t border-t-purple-500">

      {/* Imagen superpuesta */}
      <div className="relative w-full overflow-visible">
        <img
          src={Team}
          alt="Equipo de trabajo"
          className="absolute right-0 -top-24 md:-top-32 lg:-top-40 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%] max-w-[600px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 text-textDark z-10 relative gap-8 lg:gap-0">
        {/* Logo e información */}
        <div className="flex items-start gap-4 lg:gap-6">
          <img src={Logo} alt="Spa logo" className="w-16 md:w-20 lg:w-28" />
          <div>
            <Typography className="text-lg font-medium mb-2">Horarios de atención</Typography>
            <ul className="text-sm leading-6">
              <li>Lunes a Viernes: 8:00 AM - 8:00 PM</li>
              <li>Sábado: 9:00 AM - 6:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        {/* Texto del medio */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <Typography className="text-xl md:text-2xl font-bold">
            Spa Salud y Vida
          </Typography>
        </div>

        {/* Espacio para imagen */}
        <div className="hidden lg:block w-72"></div>
      </div>
      {/* Barra inferior del footer */}
      <div className="bg-white text-textDark text-center py-2">
        <Typography className="text-sm">&copy; 2024 Spa Holístico</Typography>
      </div>
    </footer>
  );
};
