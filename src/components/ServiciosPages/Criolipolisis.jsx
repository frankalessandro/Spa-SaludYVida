import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, BookCheck } from 'lucide-react';
import { FooterWithLogo } from "../Footer";
import { useInView } from 'react-intersection-observer';
import { ResultsTimeline } from "../ResultsTimelineCriolipolisis";
import { PricingSection } from '../PricesSectionTemplate';

// Image imports
import img1 from "../../assets/img/criolipolisis/criolipolisis_bg.webp";
import img2 from "../../assets/img/criolipolisis/criolipolisis_bg2.webp";

const whatsappLink = "https://wa.me/573226030044";

const ParallaxImage = ({ scrollYProgress, children }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};

export const Criolipolisis = () => {
  const { scrollYProgress } = useScroll();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [scrolling, setScrolling] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [typedText, setTypedText] = useState("");
  const [text, setText] = useState("Moldea tu figura con tecnología de última generación.");
  const [index, setIndex] = useState(0);

  const texts = [
    "Moldea tu figura con tecnología de última generación.",
    "Resultados visibles y duraderos sin cirugía.",
    "La excelencia en tratamientos corporales no invasivos."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setBackgroundImage(prev => prev === img1 ? img2 : img1);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setTypedText(prev => prev + text[index]);
        setIndex(index + 1);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [index, text]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const nextText = texts[(texts.indexOf(text) + 1) % texts.length];
      setText(nextText);
      setTypedText("");
      setIndex(0);
    }, 10000);
    return () => clearInterval(textInterval);
  }, [text]);

  const benefits = [
    {
      title: "Procedimiento Premium",
      description: "Tecnología de vanguardia para resultados excepcionales"
    },
    {
      title: "Exclusividad",
      description: "Atención personalizada en un ambiente de máximo confort"
    },
    {
      title: "Resultados Garantizados",
      description: "Protocolos avalados internacionalmente"
    },
    {
      title: "Experiencia Elite",
      description: "Personal altamente capacitado y certificado"
    }
  ];

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
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
                CRIOLIPOLISIS
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
                RESERVE SU CONSULTA
              </motion.button>
            </motion.div>
          </div>

          {/* Elegant Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-[49vw] transform -translate-x-1/2"
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

        {/* Benefits Section */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                EXCELENCIA EN CADA DETALLE
              </h2>
              <div className="w-24 h-0.5 bg-yellow-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-8 border border-yellow-600/20 hover:border-yellow-600/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-yellow-600 font-serif text-xl mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                EL PROCESO
              </h2>
              <div className="w-24 h-0.5 bg-yellow-600 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Consulta Personalizada",
                  description: "Evaluación detallada y plan de tratamiento único"
                },
                {
                  step: "02",
                  title: "Tratamiento Premium",
                  description: "Tecnología avanzada en un ambiente de máximo confort"
                },
                {
                  step: "03",
                  title: "Resultados Excepcionales",
                  description: "Seguimiento personalizado y garantía de satisfacción"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-yellow-600 font-serif text-4xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-serif text-xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Timeline with Luxury Styling */}
        <section className="bg-black py-24">
          <ResultsTimeline />
        </section>

        {/* Pricing Section with Luxury Styling */}
        <section className="bg-neutral-900 py-24">
          <PricingSection />
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
              EXPERIENCIA EXCLUSIVA
            </h2>
            <div className="w-24 h-0.5 bg-yellow-600 mx-auto mb-8" />
            <p className="text-gray-400 text-lg mb-12">
              Descubra la excelencia en tratamientos corporales no invasivos. 
              Resultados excepcionales respaldados por la más avanzada tecnología.
            </p>
            <motion.button
              className="px-12 py-4 bg-transparent border-2 border-yellow-600 text-yellow-600 text-lg tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              RESERVE SU CITA
            </motion.button>
          </div>
        </section>

        <FooterWithLogo />
      </div>
    </>
  );
};

export default Criolipolisis;