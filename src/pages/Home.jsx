import React, { useState, useEffect } from "react";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";
import { SliderMain } from "../components/SliderMain";
import { SpaAppointmentStepper } from "../components/Stepper";
import img_spa_ambiente from "../assets/img/home/spaAmbiente.webp";
import { FloatButtons } from "../components/FloatButtons";
import { FooterWithLogo } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsappButton";
import img1 from "../assets/img/hifu/hifu4.webp";

export const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingSpeed = 50;

  const texts = [
    "Moldea tu figura con tecnología de última generación.",
    "Resultados visibles y duraderos sin cirugía.",
    "La excelencia en tratamientos corporales no invasivos.",
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
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(typeNextCharacter, typingSpeed);
        }
      };
      eraseText();
    };

    timeout = setTimeout(typeNextCharacter, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  return (
    <div className="h-screen max-h-screen bg-white max-w-[100vw] md:min-w-[100vw] overflow-x-hidden">
      {/* Navbar */}
      <NavbarWithMegaMenu />
      <main className="flex-grow relative">
        {/* Welcome Section */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#160520]/80 via-[#160520]/50 to-[#160520]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
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
            <button className="mt-12 px-12 py-4 bg-transparent border-2 border-yellow-600 text-yellow-600 text-lg tracking-wider hover:bg-yellow-600 hover:text-[#160520] transition-all duration-300">
              RESERVE SU CITA
            </button>
          </div>
        </section>

        {/* Slider */}
        <section className="w-full h-[100vh] lg:h-[100vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#160520] to-[#160520]">
          <SliderMain />
        </section>

        {/* Servicios */}
        <section className="relative w-full py-16 bg-gradient-to-b from-[#160520] via-[#160520] to-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold gold-text mb-6 text-yellow-600">
              Servicios Holísticos
            </h2>
            <p className="text-xl text-white mb-12">
              Descubre nuestro enfoque integral para tu bienestar
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Masajes Terapéuticos",
                  description: "Técnicas ancestrales para equilibrar cuerpo y mente",
                  image: "/home/happySpa.webp",
                },
                {
                  title: "Terapias Energéticas",
                  description: "Restaura tu campo energético y vitalidad",
                  image: "/home/terapiaEnergetica.webp",
                },
                {
                  title: "Medicina Natural",
                  description: "Tratamientos naturales personalizados",
                  image: "/home/mujerSpa.webp",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Reserva */}
        <section className="w-full py-16 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de texto */}
            <div className="space-y-8 p-6 md:p-10">
              <h2 className="text-4xl font-extrabold gold-text text-center md:text-left">
                Proceso de Reserva
              </h2>
              {[
                {
                  step: 1,
                  title: "Busca el servicio que deseas",
                },
                {
                  step: 2,
                  title: "Envíanos un mensaje por WhatsApp",
                },
                {
                  step: 3,
                  title: "Una asesora te guiará paso a paso",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-lg border bg-gray-100 shadow-md"
                >
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center gold-background text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="py-2 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
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
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Stepper */}
        <section className="relative w-full h-[100vh] py-16">
          <SpaAppointmentStepper />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative top-[30vh] md:top-[0vh]">
        <FooterWithLogo />
      </footer>
      <FloatButtons />
    </div>
  );
};
