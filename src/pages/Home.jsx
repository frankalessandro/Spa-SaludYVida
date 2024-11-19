import React, { useEffect, useRef } from "react";
import 'animate.css';
import ScrollReveal from "scrollreveal";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import img_spa_ambiente from "../assets/img/home/spaAmbiente.webp";

const commonRevealConfig = {
  duration: 1000,
  distance: "50px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "bottom",
  reset: true,
};

export const Home = () => {
  const scrollRevealRef = useRef(null);

  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    scrollRevealRef.current.reveal(".reveal-section", { ...commonRevealConfig });
    scrollRevealRef.current.reveal(".reveal-title", { ...commonRevealConfig, delay: 200, origin: "left" });
    scrollRevealRef.current.reveal(".reveal-service", { ...commonRevealConfig, interval: 200, scale: 0.85 });
    
    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-gradient-to-b from-[#f7f8fa] to-[#dfe4ea]">
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

      {/* Proceso de Reserva */}
      <section className="w-full py-16 flex items-center justify-center reveal-section scroll-snap-align-start">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 reveal-title">Proceso de Reserva</h2>
            {[
              { step: 1, title: "Busca el servicio que deseas", description: "Explora nuestra amplia gama de servicios holísticos" },
              { step: 2, title: "Envíanos un mensaje por WhatsApp", description: "Contacta con nosotros de manera rápida y sencilla" },
              { step: 3, title: "Una asesora te guiará paso a paso", description: "Recibe atención personalizada para tu reserva" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 reveal-service">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img src={img_spa_ambiente} alt="Spa ambiente" className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="w-full py-16 reveal-section scroll-snap-align-start">
        <SpaAppointmentStepper />
      </section>
    </div>
  );
};
