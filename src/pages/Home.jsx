import React, { useEffect, useRef } from "react";
import 'animate.css';

import { useInView } from 'react-intersection-observer';
import ScrollReveal from "scrollreveal";
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import img_spa_ambiente from "../assets/img/home/spaAmbiente.webp";
import { FloatButtons } from "../components/FloatButtons";
import { FooterWithLogo } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { WhatsAppButton } from "../components/WhatsappButton";
import img1 from "../assets/img/hifu/hifu4.webp";

const commonRevealConfig = {
  duration: 1000,
  distance: "50px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "bottom",
  reset: true,
};

export const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
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

    <div className=" flex flex-col min-h-screen overflow-y-auto scroll-smooth w-[100vw] scroll-snap-y-mandatory scrollbar-hide  bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10] ">
      {/* Navbar */}
      <NavbarWithMegaMenu />
      <main className="flex-grow relative">
        {/* welcome */}
        <motion.section
          ref={heroRef}
          className="relative min-w-[100vw] top-0 h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${img1})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Bienvenido a tu
                <span className="text-purple-400"> Oasis</span> de Bienestar
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Descubre la armonía perfecta entre cuerpo, mente y espíritu
              </p>
            </div>


            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-initBackgroundButtonViewsGradient to-endBackgroundButtonViewsGradient rounded-full text-textDark font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta gratuita
            </motion.button>
          </div>
          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-purple-500 to-transparent pointer-events-none" />
        </motion.section>

        {/* Slider */}
        <section
          className="w-full h-[150vh] lg:h-[100vh] flex items-center justify-center scroll-snap-align-start relative overflow-hidden bg-gradient-to-b from-purple-500 to-black"
        >
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
            {/* Columna de texto */}
            <div className="space-y-8 p-6 md:p-10">
              <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)] mb-6 reveal-title text-center md:text-left">
                Proceso de Reserva
              </h2>
              {[
                { step: 1, title: "Busca el servicio que deseas", description: "" },
                { step: 2, title: "Envíanos un mensaje por WhatsApp", description: "" },
                { step: 3, title: "Una asesora te guiará paso a paso", description: "" }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 reveal-service p-4 rounded-lg border bg-[var(--color-light-gray)] shadow-md"
                >
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white bg-[var(--color-button-alternative)] font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="py-2 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                </div>
              ))}
              <div className="flex justify-center md:justify-start">
                <WhatsAppButton />
              </div>
            </div>

            {/* Columna de imagen */}
            <div className="relative p-6 md:p-0">
              <img
                src={img_spa_ambiente}
                alt="Spa ambiente"
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
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
      <footer className="relative top-[22vh] md:top-0 footer-top-22vh footer-top-75vh">
        <FooterWithLogo />
      </footer>



      <FloatButtons />
    </div>
  );
};
