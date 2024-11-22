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
import { WhatsAppButton } from "../components/WhatsappButton";

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

    <div className=" flex flex-col min-h-screen overflow-y-auto scroll-smooth w-[100vw] scroll-snap-y-mandatory scrollbar-hide  bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
      {/* Navbar */}
      {/* <div className="overflow-hidden max-w-[100vw]">
        <AnimatedBackground /> 
      </div>
        */}
      <NavbarWithMegaMenu />
      <main className="flex-grow relative">

        <section className="w-full h-screen bg-gradient-to-br from-black via-black to-purple-800 relative overflow-hidden">
          {/* Contenedor principal con mejor organización espacial */}
          <div className="h-[140vh] md:h-full container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 pt-16 lg:pt-0">
            {/* Lado izquierdo - Textos */}
            <div className="w-full mt-20 md:mt-0 lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8 z-10 mb-8 lg:mb-0">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Bienvenido a tu
                  <span className="text-purple-400"> Oasis</span> de Bienestar
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Descubre la armonía perfecta entre cuerpo, mente y espíritu
                </p>
              </div>

              <div className="relative hidden lg:block">
                <p className="absolute left-[-20vw] top-[-15vh] transform -rotate-90 text-purple-400 text-lg text-[1em] whitespace-nowrap">
                  Transforma tu vida • Renueva tu energía • Encuentra tu equilibrio
                </p>
              </div>

              <div className="block lg:hidden">
                <p className="text-purple-400 text-lg font-medium text-center">
                  Transforma tu vida • Renueva tu energía • Encuentra tu equilibrio
                </p>
              </div>
            </div>

            {/* Lado derecho - Imagen ajustada */}
            <div className="w-full lg:w-1/2 absolute md:relative bottom-[30vh] md:bottom-[-5vh] flex justify-center items-end lg:h-full">
              <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-auto max-w-2xl relative">
                <img
                  src="/home/welcome.webp"
                  alt="Spa Holístico 3D"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-xl"></div>
          </div>

          {/* Separador de ola */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className={`relative block w-full h-[4vh] md:h-[10vh] rotate-180 animate-waves`}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"
              />
            </svg>
          </div>
        </section>
        {/* Slider */}
        <section className="w-full h-[150vh] lg:h-[80vh] flex items-center justify-center reveal-section scroll-snap-align-start relative overflow-hidden top-[10vh]">
          <SliderMain />
        </section>

        {/* Servicios */}
        <section className="relative w-full py-16 reveal-section scroll-snap-align-start">
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
            <div className="space-y-8 p-10">
              <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)] mb-6 reveal-title text-center md:text-left">Proceso de Reserva</h2>
              {[
                { step: 1, title: "Busca el servicio que deseas", description: "" },
                { step: 2, title: "Envíanos un mensaje por WhatsApp", description: "" },
                { step: 3, title: "Una asesora te guiará paso a paso", description: "" }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center sm:flex-row sm:items-start gap-4 reveal-service p-4 rounded-lg border bg-[var(--color-light-gray)]"
                >
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white bg-[var(--color-button-alternative)] font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    {/* <p className="text-[var(--color-text-gray)]">{step.description}</p> */}
                  </div>
                </div>
              ))}
              <WhatsAppButton />
            </div>
            <div className="relative">
              <img
                src={img_spa_ambiente}
                alt="Spa ambiente"
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </section>


        {/* Stepper */}
        <section className="realtive w-full h-[100vh] py-16 reveal-section scroll-snap-align-start">
          <SpaAppointmentStepper />
        </section>
      </main>

      {/* Footer siempre al final */}
      <footer className="realtive mt-auto top-[40vh]">
        <FooterWithLogo />
      </footer>


      <FloatButtons />
    </div>
  );
};
