import React, { useEffect, useRef } from "react";
import 'animate.css';

import { useInView } from 'react-intersection-observer';
import ScrollReveal from "scrollreveal";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import img_spa_ambiente from "../assets/img/home/spaAmbiente.webp";
import { FloatButtons } from "../components/FloatButtons";
import { FooterWithLogo } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";

const commonRevealConfig = {
  duration: 1000,
  distance: "50px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "bottom",
  reset: true,
};

export const Home = () => {
  const scrollRevealRef = useRef(null);
  const [svgRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    scrollRevealRef.current.reveal(".reveal-section", { ...commonRevealConfig });
    scrollRevealRef.current.reveal(".reveal-title", { ...commonRevealConfig, delay: 200, origin: "left" });
    scrollRevealRef.current.reveal(".reveal-service", { ...commonRevealConfig, interval: 200, scale: 0.85 });

    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);


  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    // Revelar animación SVG
    scrollRevealRef.current.reveal(".animate-slide-in-bottom-left", {
      duration: 2000,
      origin: "bottom",
      distance: "100px",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      reset: false
    });

    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);

  return (

    <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
      {/* Navbar */}
      <AnimatedBackground />
      <NavbarWithMegaMenu />
      {/* Slider */}
      <section className="w-full h-[90vh] flex items-center justify-center reveal-section scroll-snap-align-start relative overflow-hidden">
        <SliderMain />
      </section>

      {/* Servicios */}
      <section className="w-full py-16 reveal-section scroll-snap-align-start">
        <div className="max-w-7xl mx-auto px-4 text-center ">
          <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)]  mb-6 reveal-title ">Servicios Holísticos</h2>
          <p className="text-xl text-[var(--color-text-gray)] mb-12">Descubre nuestro enfoque integral para tu bienestar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Masajes Terapéuticos", description: "Técnicas ancestrales para equilibrar cuerpo y mente", image: "/home/happySpa.webp" },
              { title: "Terapias Energéticas", description: "Restaura tu campo energético y vitalidad", image: "/home/terapiaEnergetica.webp" },
              { title: "Medicina Natural", description: "Tratamientos naturales personalizados", image: "/home/mujerSpa.webp" }
            ].map((service, index) => (
              <div key={index} className="bg-[var(--color-background-white)] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 reveal-service">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition-all duration-500 transform hover:scale-110" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-text-dark)]  mb-2">{service.title}</h3>
                  <p className="text-[var(--color-text-gray)] ">{service.description}</p>
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
            <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)]  mb-6 reveal-title">Proceso de Reserva</h2>
            {[
              { step: 1, title: "Busca el servicio que deseas", description: "Explora nuestra amplia gama de servicios holísticos" },
              { step: 2, title: "Envíanos un mensaje por WhatsApp", description: "Contacta con nosotros de manera rápida y sencilla" },
              { step: 3, title: "Una asesora te guiará paso a paso", description: "Recibe atención personalizada para tu reserva" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 reveal-service">
                <div className="w-12 h-12  rounded-full flex-shrink-0 flex items-center justify-center text-white bg-[var(--color-button-alternative)] font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-[var(--color-text-gray)] ">{step.description}</p>
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
      <section className="w-full h-[100vh] py-16 reveal-section scroll-snap-align-start">
        <SpaAppointmentStepper />
      </section>
      <FloatButtons />


      <div
        ref={svgRef}
        className="absolute right-[-50px] opacity-40 md:right-0 bottom-[-15vh] md:bottom-[-25vh] z-[0] w-[40vw] md:w-[20vw] md:h-[30vh]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          fill="#167364"
          className={`w-full h-full ${inView
            ? 'animate-slide-in-bottom-left'
            : 'opacity-0 transform translate-x-[-100%] translate-y-[100%] rotate-[75deg]'
            }`}
        >
          <path d="M426.8 227.6c41.1 27.1 37.7 25 42.5 27.7a1021 1021 0 0 1-73-6.1a49.1 49.1 0 0 1-10.3-4c-47.7-30.5-97.9-70.7-134.6-114.5-24-32.9-31.9-44.1-41.7-51.2-10.3-7.7-21.5-5.6-15.8 8.6 4.1 9.7 7.2 12.1 42.8 55.3a543.4 543.4 0 0 0 120.6 100.4c-76.1-12.2-151.9-33.4-218.6-72-7.7-4.5-15.2-8.6-22-13.3a7.2 7.2 0 0 0-10 1.5a7.2 7.2 0 0 0 1.5 10c59.4 49.3 152.9 77.9 228.1 92.5-82.8 5.5-252.2-2.3-275.7-7.9-10-2.4-14.3 8.1-6 14.4 49 22.1 262.9 17.4 319.5 0 25.7 3.9 52 6.8 78.6 8.7-8.8 3.3-20.5 10-60.3 26.8-54.4 22.8-96.7 34.5-152.6 26.3-9.3-1.4-19-2.9-28.7-5.6a8.3 8.3 0 1 0-5.1 15.9c30.5 11.8 60.9 16.5 104.8 9.2 53.9-9.3 99.3-33.6 143.7-57.9 10-5.6 22.3-8.3 33.5-12.8 22.5.8 42.4.9 62.6.5-34.6 26.7-78.6 70-121.5 96.5-18.4 11.4-46.9 24.4-67.8 24.6a8.8 8.8 0 0 0-9.3 8.4a8.8 8.8 0 0 0 8.4 9.3c29.2 3 54.5-8.5 79.5-24.8 45.3-29.1 90.4-77.1 130.2-114.5 35.8-1.5 73.9-4.8 113.9-11.2-64.5 67.8-161.5 150.2-175.6 153.3a8.5 8.5 0 0 0 2.5 16.7c39.9-3.9 167-137.2 194.4-173.6a716.6 716.6 0 0 0 80.6-19.5C645.4 416.2 641.1 418.9 639.4 431.7c-.6 11.3 12.2 14.4 18.4 8 63.4-65.6 112.7-146.7 149.5-201.4C938 193 985.7 121.6 922.8 161.6a503.4 503.4 0 0 1-107.3 50.5c-10.8-4.6-28-12.5-31.5-13.9-36.4-14.4-151.6-71.3-182.5-108.2-3.4-3.5-5.4-8.1-9.3-11.2-8-6.4-16.7 2.4-15.1 11.7 8.5 46.6 155 109.9 200.9 123.7l14.4 5.4c-20.5 6.3-42.3 12-69.6 17.6-38.1-18.3-110.4-45.7-171.8-89-20.2-14.2-48.2-49-58.4-53-19-7.4-25.1 3.3-10.9 18.3 22.6 20.9 40 39.4 58 51.5 49.1 33.1 99.6 54.9 158.6 77a975 975 0 0 1-108.5 12.7C530 222.3 428.7 132.4 400.7 72a6 6 0 1 0-11.3 4.1c3.4 11 8.9 23.4 17.2 36.1C439.9 163.6 513.4 225.3 566 256c-18.1.7-32.9.9-47.8.9-38.3-8.8-39.1-12.9-80.9-42.9-22.8-17.2-113.5-104.6-140-146.4-2.3-3.9-4.6-9-9.4-10.1-2.9-.5-5.6 1.8-6.4 5.4-.8 3.8 0 7.8.7 11.6 9.9 34.7 115.4 132.3 144.9 153.5Z"></path>
        </svg>
      </div>
      <FooterWithLogo />
    </div>
  );
};
