import React from "react";
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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Logo from '../assets/SpaLogo.svg'
import { Link } from "react-router-dom";

// Items for "Servicios Faciales"
const facialServicesMenuItems = [
  {
    title: "HIFU 7D",
    description: "Tratamiento no quirúrgico de ultrasonido para un lifting facial y estimulación de colágeno.",
    icon: SunIcon,
    to: "/hifu-7d", // Ruta correcta para el servicio HIFU
  },
  {
    title: "Plasma",
    description: "Inyección de plasma para regenerar tejidos y combatir el envejecimiento.",
    icon: GlobeAmericasIcon,
    to: "/plasma", // Ruta para Plasma
  },
  {
    title: "Dermapen",
    description: "Micropunciones para estimular la producción de colágeno y mejorar la textura de la piel.",
    icon: TagIcon,
    to: "/dermapen", // Ruta correcta para el servicio Dermapen
  },
];

// Items for "Servicios Corporales"
const bodyServicesMenuItems = [
  {
    title: "Criolipolisis",
    description: "Tratamiento no quirúrgico para eliminar grasa localizada mediante enfriamiento controlado.",
    icon: Bars4Icon,
    to: "/criolipolisis", // Ruta para Criolipolisis
  },
  {
    title: "Max Muscle",
    description: "Simula abdominales y convierte grasa en músculo. Ideal para complementar el ejercicio.",
    icon: RectangleGroupIcon,
    to: "/max-muscle", // Ruta para Max Muscle
  },
  {
    title: "Biosueros",
    description: "Bioestimulante inyectado para aumentar masa muscular y reafirmar la piel.",
    icon: TagIcon,
    to: "/biosueros", // Ruta para Biosueros
  },
  {
    title: "Tensamax",
    description: "Radiofrecuencia monopolar para regenerar colágeno y reafirmar la piel.",
    icon: TagIcon,
    to: "/tensamax", // Ruta para Tensamax
  },
];

// Cuida tu Salud submenu
const healthMenuItems = [
  {
    title: "Colonterapia",
    description: "Limpieza profunda del intestino grueso para mejorar la salud digestiva.",
    icon: RectangleGroupIcon,
    to: "/colonterapia", // Ruta para Colonterapia
  },
  {
    title: "Drenajes",
    description: "Tratamiento postquirúrgico para eliminar líquidos acumulados y reducir inflamación.",
    icon: UserGroupIcon,
    to: "/drenajes", // Ruta para Drenajes
  },
];

function NavListMenu({ title, items }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = items.map(({ icon, title, description, to }, key) => ( // Usamos 'to' en lugar de 'href'
    <Link to={to} key={key}>  {/* Usamos Link en lugar de <a> */}
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
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
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
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
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
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
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-textDark">Inicio</ListItem>
        </Typography>
      </Link>
      {/* Menu for Servicios Faciales */}
      <NavListMenu title="Servicios Faciales" items={facialServicesMenuItems} />
      {/* Menu for Servicios Corporales */}
      <NavListMenu title="Servicios Corporales" items={bodyServicesMenuItems} />
      {/* Cuida tu Salud */}
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

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full px-4 py-2  top-0 left-0 z-50">
      <div className="flex items-center justify-between text-textDark">
        <Link to={'/'}>
          <img src={Logo} alt="Logo" className="w-12 h-12 cursor-pointer hover:bg-blue-gray-50 hover:rounded-md" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button className="align-middle select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-Botones text-white shadow-md shadow-purple-500/20 hover:shadow-xl hover:bg-BotonesHover focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none transform transition-all duration-300 ease-out translate-y-0 opacity-100">
          Contactanos
        </button>


        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
