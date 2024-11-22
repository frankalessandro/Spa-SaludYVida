import { Typography } from "@material-tailwind/react";
import Logo from '../assets/SpaLogo.svg';

export const FooterWithLogo = () => {
  return (
    <footer className="relative top-[70vh] md:top-0 w-full bg-white p-8 z-[50]">
      <div className="flex  relative flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={Logo} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre nosotros
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contactanos
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Spa Holistico
      </Typography>
    </footer>
  );
}