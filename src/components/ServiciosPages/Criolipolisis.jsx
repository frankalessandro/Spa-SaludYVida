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

  // lista de por que elegirnos
  const whyChooseUs = [
    "Especialistas en criolipólisis con experiencia comprobada",
    "Tecnología médica avanzada para resultados garantizados",
    "Tratamientos no invasivos con mínima incomodidad",
    "Atención personalizada adaptada a las necesidades de cada cliente",
    "Resultados visibles desde la primera sesión",
    "Valoraciones gratuitas realizadas por profesionales altamente capacitados"
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

  const timelineItems = [
    {
      time: "Antes del Tratamiento",
      title: "Estado Inicial",
      description: "Evaluación profesional de las áreas a tratar con criolipólisis",
      features: [
        "Consulta de valoración gratuita",
        "Evaluación personalizada",
        "Plan de tratamiento a medida"
      ],
      icon: Clock,
      benefits: [
        "Análisis completo de necesidades",
        "Plan personalizado",
        "Sin compromiso inicial"
      ]
    },
    {
      time: "Durante el Proceso",
      title: "Aplicación de Criolipólisis",
      description: "Tratamiento no quirúrgico con tecnología de enfriamiento controlado",
      features: [
        "Duración: 1 hora por sesión",
        "Membrana anticongelante incluida",
        "Masajes complementarios"
      ],
      icon: Star,
      benefits: [
        "Procedimiento indoloro",
        "Sin tiempo de inactividad",
        "Máxima seguridad"
      ]
    },
    {
      time: "Primeras Semanas",
      title: "Evolución Inicial",
      description: "Cambios progresivos visibles desde la primera sesión",
      features: [
        "Resultados en 24 días",
        "Adaptación corporal gradual",
        "Seguimiento profesional"
      ],
      icon: ShieldCheck,
      benefits: [
        "Cambios naturales",
        "Resultados visibles",
        "Seguimiento continuo"
      ]
    },
    {
      time: "Resultado Final",
      title: "Transformación Completa",
      description: "Resultados óptimos entre 1 a 12 semanas",
      features: [
        "Eliminación de grasa localizada",
        "Mejora de flacidez",
        "Reducción de celulitis"
      ],
      icon: Award,
      benefits: [
        "Resultados duraderos",
        "Transformación natural",
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
      <div className="min-h-screen bg-black max-w-[100vw] md:min-w-[100vw] overflow-x-hidden">
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
                  <h2 className="text-lg lg:text-xl font-serif tracking-[0.3em] uppercase gold-text">
                    Experiencia Exclusiva
                  </h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-white tracking-wider">
                    CRIOLIPOLISIS
                  </h1>
                  <div className="w-24 h-0.5 bg-yellow-600" />
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
                    {typedText}
                  </p>
                  <motion.button
                    className="mt-6 px-8 lg:px-12 py-3 lg:py-4 bg-transparent border-2 border-yellow-600 dark-gold-text text-base lg:text-lg tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300 "
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
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                EXCELENCIA EN CADA DETALLE
              </h2>
              <div className="w-24 h-0.5 gold-background mx-auto" />
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
                  <h3 className="gold-text font-serif text-xl mb-4">
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
                  <div className="dark-gold-text font-serif text-4xl mb-4">
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
          <ResultsTimeline timelineItems={timelineItems} title="Proceso de Criolipólisis" description=" Transformación paso a paso con tecnología avanzada" />
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
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600  gold-text">
                  Inversión en tu Belleza
                </span>
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg"
                variants={fadeInUp}
              >
                Descubre nuestros exclusivos tratamientos premium
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: "Sesión Individual",
                  price: "$450,000",
                  icon: Star,
                  features: [
                    "1 sesión completa de Criolipólisis",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento",
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$2,500,000",
                  icon: Crown,
                  features: [
                    "Múltiples sesiones de Criolipólisis",
                    "Plasma rico en plaquetas",
                    "Limpieza facial profunda",
                    "Plan de cuidado personalizado",
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
              EXPERIENCIA EXCLUSIVA
            </h2>
            <div className="w-24 h-0.5 bg-yellow-600 mx-auto mb-8" />
            <p className="text-gray-400 text-lg mb-12">
              Descubra la excelencia en tratamientos corporales no invasivos.
              Resultados excepcionales respaldados por la más avanzada tecnología.
            </p>
            <motion.button
              className="px-12 py-4 bg-transparent border-2 border-yellow-600 dark-gold-text text-lg tracking-wider hover:bg-yellow-600 hover:text-black transition-all duration-300"
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
                    <span className="gold-text mt-1">•</span>
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

export default Criolipolisis;