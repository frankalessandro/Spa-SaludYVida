import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, Sparkles, Wand2, Target, Zap, BookCheck } from 'lucide-react';
import { AnimatedBackground } from "../AnimatedBackground";
import { FooterWithLogo } from "../Footer";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ResultsTimeline } from "../ResultsTimelineCriolipolisis";

// Image imports
import img1 from "../../assets/img/hifu/hifu4.webp";
import img2 from "../../assets/img/hifu/hifu2.webp";
import img3 from "../../assets/img/hifu/hifu3.webp";
import img4 from "../../assets/img/hifu/hifu1.webp";
import { PricingSection } from '../PricesSectionTemplate';

const images = [img1, img2, img3, img4];
const textImages = [
  '💡 Innovación que inspira',
  '🎯 Precisión en cada detalle',
  '🛡️ Tu seguridad, nuestra prioridad',
  '⚡ Resultados efectivos garantizados'
];

const whatsappLink = "https://wa.me/1234567890";

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
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Refs for intersection observation
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [processRef, processInView] = useInView({ threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    {
      title: "Rejuvenecimiento facial sin cirugía",
      description: "Resultados naturales sin procedimientos invasivos"
    },
    {
      title: "Estimulación natural del colágeno",
      description: "Mejora la elasticidad y firmeza de la piel"
    },
    {
      title: "Sin tiempo de recuperación",
      description: "Regresa a tus actividades inmediatamente"
    },
    {
      title: "Resultados duraderos",
      description: "Efectos visibles y de larga duración"
    },
    {
      title: "Procedimiento no invasivo",
      description: "Seguro y sin riesgos mayores"
    },
    {
      title: "Mejora visible de la flacidez",
      description: "Piel más firme y tonificada"
    }
  ];

  // Enhanced icon hover variants
  const iconHoverVariants = {
    rest: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      rotate: [0, -10, 10, 0],
      scale: 1.05,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [text, setText] = useState("Rejuvenece tu piel con plasma: luminosidad y firmeza sin cirugía.");
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Arreglo con las imágenes de fondo
  const images = [img1, img2, img3]; // Puedes agregar más imágenes aquí
  const texts = [
    "Rejuvenece tu piel con plasma: luminosidad y firmeza sin cirugía.",
    "Terapia avanzada para una piel más joven y saludable.",
    "Recupera la elasticidad de tu piel de forma no invasiva."
  ];

  // Detectar el scroll y ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Cambiar imagen de fondo cada 5 segundos
    const imageInterval = setInterval(() => {
      const nextImage = images[(images.indexOf(backgroundImage) + 1) % images.length];
      setBackgroundImage(nextImage);
    }, 5000); // Cambiar imagen cada 5 segundos

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(imageInterval);
  }, [backgroundImage]);

  useEffect(() => {
    // Animación de texto, simula el efecto de escritura
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setTypedText(typedText + text[index]);
        setIndex(index + 1);
      }
    }, 100); // Retraso de 100ms por cada letra

    return () => clearTimeout(timeout);
  }, [index, text, typedText]);

  useEffect(() => {
    // Cambiar el texto cada 10 segundos
    const textInterval = setInterval(() => {
      const nextText = texts[(texts.indexOf(text) + 1) % texts.length];
      setText(nextText);
      setTypedText(""); // Resetear el texto escrito
      setIndex(0); // Resetear el índice de la animación
    }, 10000); // Cambiar el texto cada 10 segundos

    return () => clearInterval(textInterval);
  }, [text]);

  return (
    <>
      <NavbarWithMegaMenu />
      {/* <AnimatedBackground /> */}
      <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
        {/* Hero Section - Preserved Original Design with Enhanced Interactions */}
        <motion.section
          ref={heroRef}
          className="relative min-w-[100vw] top-0 h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Contenido principal */}
          <div className="relative z-10 text-center px-4">
            {/* Título con animación */}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 120
              }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Criolipolosis
            </motion.h1>

            {/* Animación de texto escrito */}
            <motion.p
              className="text-xl md:text-3xl text-white max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {typedText}
            </motion.p>

            {/* Botón con animación */}
            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-initBackgroundButtonViewsGradient to-endBackgroundButtonViewsGradient rounded-full text-textDark font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta gratuita
            </motion.button>
          </div>

          {/* Botón de bajar animado en la parte inferior */}
          {/* Botón de bajar animado en la parte inferior */}
          <motion.div
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${scrolling ? "animate-ocultar" : ""
              }`} // Aplica la animación cuando se hace scroll
            animate={{ y: [0, 10, 0] }} // Animación de subir y bajar
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => window.scrollTo(0, window.innerHeight)} // Desplazar hacia abajo al hacer click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7 7 7-7"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.section>


        <section
          ref={ref}
          className="relative py-20 px-6 md:px-16 bg-white overflow-hidden"
        >
          {/* Fondo de Olas - Figura Grande */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-[-10%] right-[-10%] w-[180%] md:w-[120%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="var(--bg-gradient)"
                d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,266.7C560,267,640,245,720,234.7C800,224,880,224,960,197.3C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
            {/* Información del Tratamiento */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: scrolling ? 1 : 0, x: scrolling ? 0 : 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                CRIOLIPÓLISIS
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El tratamiento de Criolipólisis es un procedimiento NO quirúrgico que utiliza enfriamiento controlado para eliminar la grasa localizada de manera efectiva, con mínimas molestias y sin necesidad de cirugía.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Elimina grasa localizada sin cirugía.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Mejora la flacidez y ayuda a reducir la celulitis.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Resultados visibles de 1 a 12 semanas.
                  </span>
                </li>
              </ul>
            </motion.div>
            {/* Imagen encapsulada en SVG */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: scrolling ? 1 : 0, x: scrolling ? 0 : -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80%] md:w-full"
              >
                <path
                  fill="#d8a2e9"
                  d="M43.5,-55.2C58.1,-45.5,70.5,-32.4,75.3,-17.9C80,-3.3,77,13.6,68.6,27C60.3,40.5,46.5,50.6,32.3,59.5C18.2,68.3,3.6,76,-11.5,78.1C-26.5,80.3,-52.9,76.9,-63.8,63.7C-74.7,50.6,-70.1,27.7,-71.6,6.6C-73.1,-14.5,-80.6,-33.8,-74.6,-46.7C-68.6,-59.7,-49.1,-66.3,-31.6,-73.5C-14.1,-80.6,-7,-88.2,5.2,-95.1C17.4,-102.1,34.8,-108.3,43.5,-55.2Z"
                  transform="translate(100 100)"
                />
                <image
                  className="rounded-full"
                  href={img1} /* Ruta de la imagen */
                  x="35"
                  y="30"
                  width="130"
                  height="130"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </motion.div>
          </div>

          {/* Tratamiento Criolipólisis */}
          <div className="max-w-6xl mx-auto mt-20">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolling ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Criolipólisis: La Revolución en Tratamientos No Invasivos
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: scrolling ? 1 : 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Es un tratamiento no quirúrgico, que utiliza tecnología avanzada para eliminar
              grasa localizada mediante un enfriamiento controlado. El tratamiento es rápido
              y sin tiempo de recuperación.
            </motion.p>

            {/* Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: scrolling ? 1 : 0, x: scrolling ? 0 : -50 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h3 className="text-2xl font-bold text-gray-800">Beneficios</h3>
                <ul className="space-y-3">
                  <li>Eliminación de grasa localizada</li>
                  <li>Mejora de la flacidez</li>
                  <li>Disminución de celulitis y estrías</li>
                  <li>Resultados visibles en 1 a 12 semanas</li>
                </ul>
              </motion.div>

              {/* Contraindicaciones */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: scrolling ? 1 : 0, x: scrolling ? 0 : 50 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h3 className="text-2xl font-bold text-gray-800">Contraindicaciones</h3>
                <ul className="space-y-3">
                  <li>Sin contraindicaciones mayores</li>
                  <li>Efectos secundarios leves como inflamación temporal</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proceso del tratamiento */}
        <motion.section
          ref={processRef}
          className="py-20 px-4 bg-slate-800/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Proceso del Tratamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Valoración Inicial",
                  description: "Evaluación gratuita y personalizada de tu cuerpo para determinar las áreas a tratar",
                  icon: BookCheck
                },
                {
                  step: 2,
                  title: "Tratamiento Criolipólisis",
                  description: "Aplicación de enfriamiento controlado en las zonas seleccionadas para eliminar la grasa localizada",
                  icon: BookCheck // Aquí puedes usar un icono que represente frío o congelación
                },
                {
                  step: 3,
                  title: "Masajes Post-Tratamiento",
                  description: "Masajes corporales para mejorar la circulación y acelerar la eliminación de la grasa tratada",
                  icon: BookCheck // Un ícono de una mano que simboliza el masaje corporal
                },
                {
                  step: 4,
                  title: "Resultados Progresivos",
                  description: "Resultados visibles de 1 a 12 semanas, con mejoras continuas en la apariencia de la piel y reducción de grasa",
                  icon: BookCheck // Un icono que representa el progreso o los resultados
                },
                {
                  step: 5,
                  title: "Cuidados Posteriores",
                  description: "Recomendaciones para mantener los resultados, como evitar la exposición al sol y mantener una buena alimentación",
                  icon: BookCheck // Un icono relacionado con la salud o cuidado post-tratamiento
                }

              ].map((item) => (
                <motion.div
                  key={item.step}
                  className="relative p-6 bg-gradient-to-br rounded-xl backdrop-blur-sm"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
                  >
                    <item.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-textDark mt-8 mb-4">{item.title}</h3>
                  <div className="text-textLight">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Beneficios Section - Preserved Original Design with Subtle Enhancements */}
        <motion.section
          ref={benefitsRef}
          className="relative py-24 px-4 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

          <div className="max-w-6xl mx-auto relative">
            <motion.div
              className="flex items-center justify-center mb-16 space-x-4"
              variants={fadeInUp}
            >
              <Sparkles className="text-blue-500 w-8 h-8" />
              <h2 className="text-4xl font-bold text-center text-textDark">Beneficios del Tratamiento</h2>
              <Sparkles className="text-blue-500 w-8 h-8" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-50 group-hover:opacity-70 blur transition-opacity duration-300" />
                  <div className="relative p-8 bg-white border border-gray-100 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Check className="text-blue-500 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 ml-12">{benefit.description}</p>

                    <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Líneas conectoras decorativas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.section>
        {/* Antes/Después Gallery - Enhanced Timeline */}
        <ResultsTimeline />


        <PricingSection />

        {/* CTA Final Section - Criolipólisis Information */}
        <motion.section
          className="py-20 px-4 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <ParallaxImage scrollYProgress={scrollYProgress}>
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
          </ParallaxImage>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-textDark mb-8">
              Transforma Tu Cuerpo con Criolipólisis
            </h2>
            <p className="text-lg md:text-2xl text-textLight mb-12">
              La criolipólisis es un tratamiento no quirúrgico que elimina grasa localizada, mejora la flacidez,
              y contribuye a la producción de colágeno. Experimenta los beneficios sin dolor ni cirugía, y con
              resultados progresivos de hasta 12 semanas. ¡No dejes pasar la oportunidad!
            </p>
            <motion.button
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-initBackgroundButtonViewsGradient to-endBackgroundButtonViewsGradient text-textLight font-semibold text-lg hover:shadow-lg hover:shadow-BotonesHover transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              ¡Agenda Tu Consulta Gratis!
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <FooterWithLogo />
      </div>
    </>
  );
};
