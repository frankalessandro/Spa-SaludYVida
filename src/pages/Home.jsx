import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import { ChevronDown } from "lucide-react";
import img_spa_ambiente from "../assets/img/home/spaAmbiente.webp";

const sections = [
  {
    id: 0,
    component: (
      <div className="w-full h-full">
        <div className="flex justify-center w-full">
          <SliderMain />
        </div>
      </div>
    ),
  },
  {
    id: 1,
    component: (
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Servicios Holísticos</h2>
          <p className="text-xl text-gray-600">Descubre nuestro enfoque integral para tu bienestar</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Masajes Terapéuticos",
              description: "Técnicas ancestrales para equilibrar cuerpo y mente",
              image: "/home/happySpa.webp"
            },
            {
              title: "Terapias Energéticas",
              description: "Restaura tu campo energético y vitalidad",
              image: "/home/terapiaEnergetica.webp"
            },
            {
              title: "Medicina Natural",
              description: "Tratamientos naturales personalizados",
              image: "/home/mujerSpa.webp"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-b from-purple-50 to-rose-50",
  },
  {
    id: 2,
    component: (
      <div className="w-full">
        <SpaAppointmentStepper />
      </div>
    ),
    bgColor: "bg-gradient-to-b from-rose-50 to-blue-50",
  },
  {
    id: 3,
    component: (
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-800">Proceso de Reserva</h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Busca el servicio que deseas",
                  description: "Explora nuestra amplia gama de servicios holísticos"
                },
                {
                  step: 2,
                  title: "Envíanos un mensaje por WhatsApp",
                  description: "Contacta con nosotros de manera rápida y sencilla"
                },
                {
                  step: 3,
                  title: "Una asesora te guiará paso a paso",
                  description: "Recibe atención personalizada para tu reserva"
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img 
              src={img_spa_ambiente}
              alt="Spa ambiente" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    ),
    bgColor: "bg-gradient-to-b from-blue-50 to-purple-50",
  },
];

export const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  const handleScroll = (event) => {
    const now = Date.now();
    const scrollDelta = Math.abs(event.deltaY);
    
    // Prevenir scroll si está en proceso o si el delta es muy pequeño
    if (isScrolling || scrollDelta < 10) return;
    
    // Verificar el tiempo transcurrido desde el último scroll
    if (now - lastScrollTime < 500) return;
    
    setLastScrollTime(now);
    setIsScrolling(true);

    // Limpiar el timeout anterior si existe
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Determinar la dirección del scroll con un umbral mínimo
    if (event.deltaY > 50 && activeSection < sections.length - 1) {
      setActiveSection(prev => prev + 1);
    } else if (event.deltaY < -50 && activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }

    // Establecer un nuevo timeout
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 800);

    setScrollTimeout(timeout);
  };

  // Limpiar el timeout cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, isScrolling, lastScrollTime]);

  // Manejar eventos de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isScrolling) return;
      
      if (event.key === 'ArrowDown' && activeSection < sections.length - 1) {
        setActiveSection(prev => prev + 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (event.key === 'ArrowUp' && activeSection > 0) {
        setActiveSection(prev => prev - 1);
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, isScrolling]);

  return (
    <div className="h-screen overflow-hidden">
      <NavbarWithMegaMenu />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`h-screen ${sections[activeSection].bgColor || ''} transition-colors duration-500`}
        >
          <div className="h-full flex items-center justify-center py-20 overflow-y-auto">
            {sections[activeSection].component}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de sección */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isScrolling) {
                setActiveSection(index);
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? "bg-purple-600 w-4 h-4" 
                : "bg-gray-400 hover:bg-purple-400"
            }`}
            aria-label={`Ir a la sección ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicador de scroll */}
      {activeSection < sections.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 z-50"
        >
          <ChevronDown size={32} />
        </motion.div>
      )}
    </div>
  );
};

export default Home;