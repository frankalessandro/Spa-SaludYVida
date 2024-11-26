import React, { useEffect, useState, useRef } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  SunIcon,
} from "@radix-ui/react-icons";
import Logo from '../assets/SpaLogo.svg';
import { Link } from "react-router-dom";

// [Previous menu items remain the same...]
const facialServicesMenuItems = [
  {
    title: "HIFU 7D",
    description: "Tratamiento no quirúrgico de ultrasonido para un lifting facial y estimulación de colágeno.",
    icon: SunIcon,
    to: "/hifu-7d",
  },
  {
    title: "Plasma",
    description: "Inyección de plasma para regenerar tejidos y combatir el envejecimiento.",
    icon: SunIcon,
    to: "/plasma",
  },
  {
    title: "Dermapen",
    description: "Micropunciones para estimular la producción de colágeno y mejorar la textura de la piel.",
    icon: SunIcon,
    to: "/dermapen",
  },
];

const bodyServicesMenuItems = [
  {
    title: "Criolipolisis",
    description: "Tratamiento no quirúrgico para eliminar grasa localizada mediante enfriamiento controlado.",
    icon: SunIcon,
    to: "/criolipolisis",
  },
  {
    title: "Max Muscle",
    description: "Simula abdominales y convierte grasa en músculo. Ideal para complementar el ejercicio.",
    icon: SunIcon,
    to: "/max-muscle",
  },
  {
    title: "Biosueros",
    description: "Bioestimulante inyectado para aumentar masa muscular y reafirmar la piel.",
    icon: SunIcon,
    to: "/biosueros",
  },
  {
    title: "Tensamax",
    description: "Radiofrecuencia monopolar para regenerar colágeno y reafirmar la piel.",
    icon: SunIcon,
    to: "/tensamax",
  },
];

const healthMenuItems = [
  {
    title: "Colonterapia",
    description: "Limpieza profunda del intestino grueso para mejorar la salud digestiva.",
    icon: SunIcon,
    to: "/colonterapia",
  },
  {
    title: "Drenajes",
    description: "Tratamiento postquirúrgico para eliminar líquidos acumulados y reducir inflamación.",
    icon: SunIcon,
    to: "/drenajes",
  },
];

function NavListMenu({ title, items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = items.map(({ icon, title, description, to }, key) => (
    <Link to={to} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            className: "h-6 text-textGray w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-black"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="z-1"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-textDark"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>

        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {renderItems}

        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to="/" className="font-medium text-textDark">
        <Typography
          variant="small"
          color="blue-gray"
          className="text-gray-900"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-textDark">
            Inicio
          </ListItem>
        </Typography>
      </Link>
      <NavListMenu title="Servicios Faciales" items={facialServicesMenuItems} />
      <NavListMenu title="Servicios Corporales" items={bodyServicesMenuItems} />
      <NavListMenu title="Cuida tu Salud" items={healthMenuItems} />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Sobre Nosotros
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (lastScrollY.current > 10) {
            setScrolled(true);
            setShowBanner(false);
          } else {
            setScrolled(false);
            setShowBanner(true);
          }
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => 
      window.innerWidth >= 960 && setOpenNav(false)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setOpenNav(false));
    };
  }, []);

  const bannerClasses = `
    transform transition-all duration-300 ease-in-out
    relative min-w-[100vw] md:min-w-[70.1vw] 
    left-[-9vw] md:left-[-1vw] lg:left-[-.7vw]
    ${showBanner ? 'top-[-2.4vh] md:top-[-1vh]' : 'top-[-100%]'}
    bg-purple-200 h-10 text-center py-2 md:rounded-t-lg 
    text-[.7em] md:text-sm
  `;

  const navbarClasses = `
  overflow-hidden
    mx-auto fixed left-0 
    w-[100vw] md:w-[70vw] lg:min-w-[70vw] md:left-[15vw] 
    md:px-4 md:py-2 z-50
    transform transition-all duration-300 ease-in-out
    ${scrolled ? 'shadow-md' : ''}
    supports-[backdrop-filter]:bg-white/60 backdrop-blur-lg
  `;

  return (
    <Navbar className={navbarClasses}>
      <div className={bannerClasses}>
        <a 
          href="https://wa.me/+yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full hover:bg-purple-300 transition-colors duration-200"
        >
          Valoración gratis en el centro estético. Agenda tu cita ahora
        </a>
      </div>
      
      <div className="flex items-center justify-between text-textDark">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 cursor-pointer hover:bg-blue-gray-50 hover:rounded-md transition-all duration-200"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button className="
          align-middle select-none font-sans font-bold text-center uppercase 
          disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
          text-xs py-3 px-6 rounded-lg bg-Botones text-white 
          shadow-md shadow-purple-500/20 
          hover:shadow-xl hover:bg-BotonesHover 
          focus:opacity-[0.85] focus:shadow-none 
          active:opacity-[0.85] active:shadow-none 
          transform transition-all duration-200 ease-out 
          translate-y-0 opacity-100
        ">
          Contactanos
        </button>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <Cross1Icon className="h-6 w-6" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}