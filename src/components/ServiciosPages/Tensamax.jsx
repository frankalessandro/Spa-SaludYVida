import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, BookCheck, Clock, Star, ShieldCheck, Award, Crown } from 'lucide-react';
import { FooterWithLogo } from "../Footer";
import { useInView } from 'react-intersection-observer';
import { ResultsTimeline } from "../ResultsTimelineCriolipolisis";


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

export const Tensamax = () => {
  const { scrollYProgress } = useScroll();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [scrolling, setScrolling] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [typedText, setTypedText] = useState("");
  const [text, setText] = useState("Estimulación profunda de colágeno con tecnología avanzada.");
  const [index, setIndex] = useState(0);

  const texts = [
    "Estimulación profunda de colágeno con tecnología avanzada.",
    "Tratamiento no invasivo para mejorar la firmeza y la tonificación.",
    "Resultados visibles y progresivos desde la primera sesión."
  ];

  const whyChooseUs = [
    "Especialistas en tratamientos de regeneración celular y tecnología de vanguardia.",
    "Uso de radiofrecuencia monopolar para un efecto tensor uniforme.",
    "Mejora la flacidez, fibrosis y celulitis en rostro y cuerpo.",
    "Atención personalizada para determinar la mejor zona y técnica de aplicación.",
    "Protocolos efectivos y seguros para resultados óptimos.",
    "Valoraciones gratuitas realizadas por profesionales capacitados."
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
      title: "Procedimiento Avanzado",
      description: "Tecnología de radiofrecuencia monopolar para resultados uniformes y efectivos."
    },
    {
      title: "Transformación Integral",
      description: "Mejora la firmeza, tonificación y reducción de flacidez en rostro y cuerpo."
    },
    {
      title: "Resultados Visibles",
      description: "Cambios progresivos desde la primera sesión con resultados notables."
    },
    {
      title: "Seguridad y Comodidad",
      description: "Tratamiento no invasivo, con seguimiento personalizado y sin tiempo de inactividad."
    }
  ];

  const timelineItems = [
    {
      time: "Antes del Tratamiento",
      title: "Valoración Inicial",
      description: "Evaluación profesional para determinar el plan de tratamiento adecuado con TENSAMAX.",
      features: [
        "Consulta de valoración gratuita",
        "Evaluación personalizada de tipo y estado de piel",
        "Plan de tratamiento a medida"
      ],
      icon: Clock,
      benefits: [
        "Análisis completo de necesidades",
        "Plan adaptado a cada persona",
        "Sin compromiso inicial"
      ]
    },
    {
      time: "Durante el Proceso",
      title: "Aplicación de TENSAMAX",
      description: "Tratamiento no invasivo de radiofrecuencia monopolar para estimular la producción de colágeno y tensar la piel.",
      features: [
        "Duración: 20 minutos por sesión",
        "Aplicación de calor controlado para estimulación profunda",
        "Ambiente cómodo y profesional"
      ],
      icon: Star,
      benefits: [
        "Procedimiento no invasivo",
        "Sin tiempo de inactividad",
        "Mejora la firmeza de la piel"
      ]
    },
    {
      time: "Primeras Semanas",
      title: "Evolución Inicial",
      description: "Resultados visibles y progresivos desde la primera sesión, con mejora continua en la piel y la tonicidad.",
      features: [
        "Adaptación progresiva en el cuerpo",
        "Seguimiento y control de resultados",
        "Mejoría en firmeza y textura"
      ],
      icon: ShieldCheck,
      benefits: [
        "Resultados naturales",
        "Seguimiento personalizado",
        "Mejoría gradual en la piel"
      ]
    },
    {
      time: "Resultado Final",
      title: "Transformación Completa",
      description: "Resultados óptimos y duraderos con un tratamiento completo de 6 sesiones.",
      features: [
        "Reducción de flacidez y fibrosis",
        "Tensado y reafirmación de la piel",
        "Mejoría visible en la textura"
      ],
      icon: Award,
      benefits: [
        "Resultados duraderos",
        "Piel más firme y tonificada",
        "Satisfacción garantizada"
      ]
    }
  ];

  // precios
  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <>
      <NavbarWithMegaMenu />
      <div className="min-h-screen bg-black max-w-[100vw] overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
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
          <div className="relative z-10 w-full min-h-screen">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                {/* Left side - Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                >
                  <h2 className="text-lg lg:text-xl font-serif tracking-[0.3em] uppercase dark-gold-text">
                    Experiencia Exclusiva
                  </h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-white tracking-wider">
                    TENSAMAX
                  </h1>
                  <div className="w-24 h-0.5 bg-yellow-600" />
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
                    {typedText}
                  </p>
                  <motion.button
                    className="mt-6 px-8 lg:px-12 py-3 lg:py-4 bg-transparent border-2 border-yellow-600 dark-gold-text text-base lg:text-lg tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    RESERVE SU CONSULTA
                  </motion.button>
                </motion.div>

                {/* Right Side - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="relative w-[70%] sm:w-[60%] lg:w-full max-w-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10"></div>
                    <img
                      src="/hifu/hifu_tool.webp"
                      alt="Spa Holístico 3D"
                      className="w-full h-auto object-contain relative z-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Elegant Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-[43vw] md:left-[49vw] transform -translate-x-1/2"
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
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 dark-gold-text">
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
                  <h3 className="text-yellow-600 font-serif text-xl mb-4 gold-text">
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
              <div className="w-24 h-0.5 gold-background mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Valoración Inicial",
                  description: "Evaluación con la especialista para determinar el plan adecuado y adaptado a tu tipo y estado de piel."
                },
                {
                  step: "02",
                  title: "Aplicación de TENSAMAX",
                  description: "Uso de radiofrecuencia monopolar para estimular la producción de colágeno y lograr un efecto tensor en la piel."
                },
                {
                  step: "03",
                  title: "Resultados Graduales y Progresivos",
                  description: "Mejoría en la firmeza y tonificación de la piel, con seguimiento personalizado para asegurar resultados óptimos."
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
                  <h3 className="dark-gold-text font-serif text-xl mb-4">
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
          <ResultsTimeline
            timelineItems={timelineItems}
            title="Proceso de Tratamiento con TENSAMAX"
            description="Transformación paso a paso con tecnología avanzada en regeneración celular y estimulación de colágeno"
          />
        </section>

        <motion.section
          className="relative py-20 my-auto px-4 min-h-[80vh] bg-[#0a0a0a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                className="text-5xl md:text-6xl font-light mb-4"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text gold-text">
                  Invierte en tu Bienestar
                </span>
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg"
                variants={fadeInUp}
              >
                Descubre nuestro tratamiento avanzado de TENSAMAX para una piel más firme y tonificada.
              </motion.p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: "Sesión Individual",
                  price: "$120,000",
                  icon: Star,
                  features: [
                    "1 sesión de tratamiento con TENSAMAX",
                    "Valoración inicial para definir el plan adecuado",
                    "Seguimiento post-tratamiento para optimizar resultados"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$600,000",
                  icon: Crown,
                  features: [
                    "6 sesiones de tratamiento con TENSAMAX",
                    "Plan de valoración y tratamiento personalizado",
                    "Aplicación de radiofrecuencia monopolar para estimulación de colágeno",
                    "Seguimiento y ajustes para garantizar resultados óptimos"
                  ]
                }


              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                >
                  {/* Card background with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 rounded-2xl blur-[2px]"></div>
                  <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-1">
                    <div className="h-full bg-gradient-to-br from-black to-[#1a1a1a] rounded-xl p-8 transition-transform duration-500 group-hover:scale-[1.02]">
                      {/* Icon */}
                      <div className="mb-6">
                        {React.createElement(plan.icon, {
                          className: "w-10 h-10 text-purple-400"
                        })}
                      </div>

                      {/* Title & Price */}
                      <h3 className="text-2xl font-light text-white mb-2">{plan.title}</h3>
                      <div className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 mb-8">
                        {plan.price}
                      </div>

                      {/* Features */}
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-yellow-400" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button className="w-full mt-8 px-6 py-3 gold-background text-black rounded-lg font-medium transform transition-transform duration-200 hover:scale-105">
                        Reservar Ahora
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Final CTA Section */}
        <section className="py-24 bg-black">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-3xl md:text-4xl font-serif dark-gold-text mb-8">
              EXPERIENCIA EXCLUSIVA
            </h2>
            <div className="w-24 h-0.5 bg-yellow-600 mx-auto mb-8" />
            <p className="text-gray-400 text-lg mb-12">
              Descubra los beneficios de TENSAMAX para una piel más firme y tonificada, y una mejor textura corporal.
              Resultados visibles respaldados por un tratamiento avanzado y personalizado.
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
        <section className="relative md:h-[85vh] py-20 px-4 bg-black" style={{
          clipPath: "inset(-300px 0 0 0)", // Recorta solo la parte inferior
        }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <motion.div
              className="text-white relative top-[10vh] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-text">¿Por qué Elegirnos?</h2>
              <ul className="space-y-4">
                {whyChooseUs.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <span className="text-yellow-300 mt-1">•</span>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="relative min-h-[80vh] md:w-[50vw] md:min-h-[80vh]">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark-slider)] via-transparent to-transparent z-10"></div>
              <motion.div
                className="absolute right-[0vw] -top-[30vh] w-full h-[120%] z-0 overflow-x-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--bg-dark-slider)] to-transparent z-10"></div>
                  <img
                    src="/criolipolisis/image.webp"
                    alt="Spa Holístico"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        <FooterWithLogo />
      </div>
    </>
  );
};

export default Tensamax;