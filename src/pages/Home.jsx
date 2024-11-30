import React, { useState, useEffect, useRef } from "react";
import 'animate.css';

import { Check, ArrowRight, BookCheck } from 'lucide-react';

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
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingSpeed = 50; // Velocidad de escritura en milisegundos por carácter
  const [backgroundImage, setBackgroundImage] = useState(img1);

  const texts = [
    "Moldea tu figura con tecnología de última generación.",
    "Resultados visibles y duraderos sin cirugía.",
    "La excelencia en tratamientos corporales no invasivos."
  ];
  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeNextCharacter = () => {
      if (currentIndex <= texts[currentTextIndex].length) {
        setTypedText(texts[currentTextIndex].substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        // Esperar antes de comenzar a borrar
        timeout = setTimeout(startErasing, 2000);
      }
    };

    const startErasing = () => {
      const eraseText = () => {
        if (currentIndex > 0) {
          currentIndex--;
          setTypedText(texts[currentTextIndex].substring(0, currentIndex));
          timeout = setTimeout(eraseText, typingSpeed / 2);
        } else {
          // Cambiar al siguiente texto
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(typeNextCharacter, typingSpeed);
        }
      };
      eraseText();
    };

    timeout = setTimeout(typeNextCharacter, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

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
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-yellow-600 font-serif text-xl mb-4 tracking-[0.3em] uppercase">
                Experiencia Exclusiva
              </h2>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wider">
                Bienvenido
              </h1>
              <div className="w-24 h-0.5 bg-yellow-600 mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {typedText}
              </p>

              <motion.button
                className="mt-12 px-12 py-4 bg-transparent border-2 border-yellow-600 text-yellow-600 text-lg tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RESERVE SU CITA
              </motion.button>
            </motion.div>
          </div>

          {/* Elegant Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-[48.5vw] transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-12 h-12 border border-yellow-600/50 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-6 h-6 text-yellow-600 transform rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
        {/* Slider */}
        <section
          className="w-full h-[150vh] lg:h-[100vh] flex items-center justify-center scroll-snap-align-start relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-900"
        >
          <SliderMain />
        </section>

        {/* Servicios */}
        <section className="relative w-full py-16  bg-gradient-to-b from-gray-900 via-gray-900 to-white">
          <div className="max-w-7xl mx-auto px-4 text-center ">
            <h2 className="text-4xl font-extrabold text-[var(--color-text-dark)] mb-6 text-yellow-600">Servicios Holísticos</h2>
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
