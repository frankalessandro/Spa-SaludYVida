import React, { useEffect, useRef } from "react";
import 'animate.css';
import ScrollReveal from "scrollreveal";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import '../css/leaves.css';

const commonRevealConfig = {
  duration: 1500,
  distance: "20px",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)", // Suavizar curva de animación
  origin: "bottom",
  reset: false, // Desactivar reset para animación más natural
};

export const Home = () => {
  const scrollRevealRef = useRef(null);

  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    // Configuración base para todas las secciones
    scrollRevealRef.current.reveal(".reveal-section", {
      ...commonRevealConfig,
      interval: 100,
      afterReveal: (domEl) => {
        const diagonalStyles = [
          'diagonal-lines',
          'diagonal-crossed-lines',
          'diagonal-pulsing',
          'diagonal-mask'
        ];

        const randomStyle = diagonalStyles[Math.floor(Math.random() * diagonalStyles.length)];

        domEl.classList.add(randomStyle);
      }
    });

    // Configuración para revelar hojas con efecto realista
    scrollRevealRef.current.reveal(".container-leaves", {
      duration: 2000, // Aumentar duración para efecto más suave
      distance: "150px",
      origin: "bottom",
      opacity: 1,
      scale: 1,
      delay: 800, // Retraso más largo
      beforeReveal: (domEl) => {
        domEl.style.opacity = 0;
        domEl.style.transform = 'translateY(100px) rotate(-5deg) scale(0.8)';
      },
      afterReveal: (domEl) => {
        domEl.style.opacity = 1;
        domEl.style.transform = 'translateY(0) rotate(0) scale(1)';
        domEl.classList.add('animate__animated', 'animate__fadeIn');
      }
    });

    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-gradient-to-b from-[#f7f8fa] to-[#dfe4ea] relative">
      {/* Navbar */}
      <NavbarWithMegaMenu />

      {/* Slider */}
      <section className="w-full h-[90vh] flex items-center justify-center reveal-section scroll-snap-align-start relative overflow-hidden">
        <SliderMain />
      </section>

      {/* Servicios */}
      <section className="w-full py-16 reveal-section scroll-snap-align-start">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 reveal-title">Servicios Holísticos</h2>
          <p className="text-xl text-gray-600 mb-12">Descubre nuestro enfoque integral para tu bienestar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Masajes Terapéuticos", description: "Técnicas ancestrales para equilibrar cuerpo y mente", image: "/home/happySpa.webp" },
              { title: "Terapias Energéticas", description: "Restaura tu campo energético y vitalidad", image: "/home/terapiaEnergetica.webp" },
              { title: "Medicina Natural", description: "Tratamientos naturales personalizados", image: "/home/mujerSpa.webp" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 reveal-service">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition-all duration-500 transform hover:scale-110" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resto de secciones... */}
      <section className="w-full py-16 reveal-section scroll-snap-align-start">
        <SpaAppointmentStepper />
      </section>

      {/* Contenedores de hojas con imágenes realistas */}
      {/* <div
        id="left-leave"
        className="container-leaves fixed bottom-0 left-0 min-w-[100vw] md:min-w-[20vw] lg:w-[100vw] opacity-70 z-0"
      >
      </div> */}

    </div>
  );
};