import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, Sparkles, Wand2, Target, Zap, Shell, Smile, Cpu, ScanEye, History, PersonStanding, HandCoins, SmilePlus } from 'lucide-react';
import { AnimatedBackground } from "../AnimatedBackground";
import { FooterWithLogo } from "../Footer";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RealResultsTimeline } from "../RealResultsTimeline";

// Image imports
import img1 from "../../assets/img/hifu/hifu4.webp";
import img2 from "../../assets/img/hifu/hifu2.webp";
import img3 from "../../assets/img/hifu/hifu3.webp";
import img4 from "../../assets/img/hifu/hifu1.webp";

const images = [img1, img2, img3, img4];
const textImages = [
  '✨ Técnica aprobada con registro INVIMA médico',
  '🔬 Micropunciones que estimulan la producción de colágeno',
  '💧 Hidratación y nutrición profunda para tu piel',
  '🌟 Beneficios visibles: reducción de manchas, estrías, cicatrices y más'
];


const whatsappLink = "https://wa.me/573226030044";

const ParallaxImage = ({ scrollYProgress, children }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};


// resultados
const timelineItems = [
  {
    time: "Antes",
    title: "Estado Inicial",
    description: "Piel con signos de envejecimiento, manchas y falta de elasticidad",
    image: img4 // Imagen representativa de la condición inicial de la piel
  },
  {
    time: "Después",
    title: "Mejora Visible",
    description: "Piel más hidratada, rejuvenecida y con una textura más uniforme",
    image: img1 // Imagen de los resultados tras la primera sesión de DERMAPEN
  },
  {
    time: "Detalle",
    title: "Renovación Facial",
    description: "Reducción de cicatrices, manchas y líneas de expresión con estimulación natural de colágeno",
    image: img2 // Imagen enfocada en detalles de la piel, como una zona específica tratada
  },
  {
    time: "Resultado Final",
    title: "Transformación Completa",
    description: "Piel revitalizada, más firme y luminosa gracias a la regeneración celular",
    image: img3 // Imagen que muestra el resultado final después de varias sesiones de DERMAPEN
  }
];


export const Dermapen = () => {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Refs for intersection observation
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [processRef, processInView] = useInView({ threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // funciones del slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };


  // lista de slider beneficios para DERMAPEN
  const benefits = [
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Reducción de manchas, estrías y cicatrices", icon: Smile },
        { text: "Técnica aprobada con registro INVIMA médico", icon: Cpu },
        { text: "Estimulación de colágeno natural", icon: ScanEye }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Resultados visibles y efectivos", icon: History },
        { text: "Tratamiento no invasivo", icon: PersonStanding },
        { text: "Hidratación y nutrición profunda", icon: HandCoins }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Sin tiempo de recuperación", icon: SmilePlus },
        { text: "Mejora de líneas de expresión y arrugas", icon: PersonStanding },
        { text: "Sesión con limpieza facial profunda", icon: HandCoins }
      ]
    }
  ];

  // lista de razones para elegir nuestro servicio de DERMAPEN
  const whyChooseUs = [
    "Más de 10 años de experiencia en tratamientos de estética holística",
    "Especialistas certificados en técnicas de micropunciones",
    "Ambiente relajante y profesional para tu bienestar",
    "Tratamientos personalizados de acuerdo al tipo de piel",
    "Uso de productos naturales y principios activos de alta calidad",
    "Técnica DERMAPEN combinada con tecnología avanzada y resultados visibles"
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

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

  return (
    <>
      <NavbarWithMegaMenu />
      {/* <AnimatedBackground /> */}
      {/* <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]"> */}
      <div className="min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
        <section className="w-full h-[90vh] bg-gradient-to-br from-black via-black to-purple-800 relative overflow-hidden">
          {/* Contenedor principal con mejor organización espacial */}
          <div className="h-[120vh] md:h-full container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 pt-16 lg:pt-0">
            {/* Lado izquierdo - Textos */}
            <div className="w-full lg:w-[35vw] absolute md:relative bottom-[30vh] md:bottom-[-5vh] lg:left-[-6vw] lg:bottom-[20vh] flex justify-center items-end lg:h-full">
              <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-auto max-w-2xl relative">
                <img
                  src="/hifu/hifu_tool.webp"
                  alt="Spa Holístico 3D"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            {/* Lado derecho - Imagen ajustada */}
            <div className="w-full mt-20 md:mt-0 lg:w-[40vw] flex flex-col justify-center space-y-6 lg:space-y-8 z-10 mb-8 lg:mb-0">
              <div className="text-black">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 leading-tight p-2">
                  <span className="vertical-gradient-text block">DERMAPEN</span>
                  <span className="block">
                    <span className="vertical-gradient-text">Técnica</span>
                    <span className="text-purple-400"> Avanzada</span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                  Tratamiento no invasivo para rejuvenecer la piel y estimular el colágeno
                </p>
              </div>

              <div className="hidden lg:block">
                <p className="text-purple-400 text-lg font-medium text-center">
                  Redefine tu belleza • Renueva tu piel • Logra resultados visibles
                </p>
              </div>
            </div>

          </div>

          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-500 rounded-full blur-xl animate-float-rotate-left"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-xl animate-float-rotate-right"></div>
          </div>

          {/* Separador de ola */}
          {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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
          </div> */}
        </section>
        {/* Tratamiento avanzado HIFU */}
        <section
          className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-300 overflow-hidden"
        >
          {/* Fondo de Olas */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-[-20%] right-[-20%] w-[200%] md:w-[150%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="var(--bg-gradient)"
                d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,266.7C560,267,640,245,720,234.7C800,224,880,224,960,197.3C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Texto centrado */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              DERMAPEN y rejuvenece la piel sin cirugías.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              DERMAPEN es una tecnología avanzada de micropunciones que utiliza un dispositivo especializado para crear microcanales en la piel, estimulando la producción de colágeno y elastina sin incisiones ni agujas invasivas. Este procedimiento no quirúrgico mejora la textura de la piel y promueve su regeneración de forma segura y efectiva
            </p>
          </div>

          {/* Contenido principal */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
            {/* Texto adicional */}
            <div className='min-h-[100%] p-4'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Tratamiento DERMAPEN Avanzado
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                DERMAPEN es una técnica de microneedling de última generación que utiliza micropunciones
                controladas para estimular la producción de colágeno y elastina en la piel. Sin necesidad
                de incisiones ni agujas invasivas, este tratamiento promueve la regeneración natural de la
                piel, mejorando su textura, reduciendo cicatrices, manchas y arrugas, y ofreciendo un aspecto
                rejuvenecido de forma segura y efectiva.
              </p>
            </div>
            {/* Galería derecha */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img1}
                alt="Tratamiento facial"
                className="rounded-lg shadow-lg"
              />
              <img
                src={img1}
                alt="Equipo de HIFU"
                className="rounded-lg shadow-lg"
              />
              <img
                src={img1}
                alt="Aplicación HIFU"
                className="col-span-2 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>


        {/* beneficios */}
        <motion.section
          className="h-screen bg-[var(--bg-dark-slider)] relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full flex flex-col">
            <h2 className="text-center text-4xl md:text-5xl lg:text-8xl font-bold pt-20 vertical-gradient-text">
              Beneficios del Tratamiento
            </h2>

            <div className="flex-grow relative">
              {/* Navigation Buttons - Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute left-[2vw] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-[2vw] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="absolute left-1/2 bottom-0 -translate-x-[18vw] w-[500px] transform translate-y-[15%]">
                <motion.img
                  src={benefits[currentSlide].image}
                  alt="HIFU Device"
                  className="min-w-[35vw] h-[80vh] object-contain"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="flex justify-center mt-4 space-x-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/30'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                {benefits[currentSlide].items.map((benefit, index) => {
                  const positions = [
                    "top-[30%] left-[25vw]",
                    "top-[60%] left-[28vw]",
                    "top-[30%] right-[24vw]"
                  ];

                  return (
                    <motion.div
                      key={index}
                      className={`absolute ${positions[index]} max-w-[250px]`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="flex flex-col items-center text-center">
                        {React.createElement(benefit.icon, {
                          className: "text-white w-8 h-8 mb-3"
                        })}
                        <span className="text-white text-4xl">{benefit.text}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="md:hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 space-y-4">
                  {benefits[currentSlide].items.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {React.createElement(benefit.icon, {
                        className: "text-white w-6 h-6"
                      })}
                      <span className="text-white text-lg">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Buttons - Mobile */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute w-full h-full top-0 left-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-200/10" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-pink-200/10" />
          </motion.div>
        </motion.section>

        {/* Antes/Después Gallery - Enhanced Timeline */}
        <RealResultsTimeline timelineItems={timelineItems} />

        {/* Precios Section - Preserved Original Design */}
        <motion.section
          ref={pricingRef}
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Inversión en tu Belleza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sesión Individual",
                  price: "$300,000",
                  gradient: "from-blue-900/40 to-purple-900/40",
                  features: [
                    "1 sesión completa de DERMAPEN",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$600,000",
                  gradient: "from-purple-900/40 to-pink-900/40",
                  features: [
                    "Múltiples sesiones de DERMAPEN",
                    "Plasma rico en plaquetas",
                    "Limpieza facial profunda",
                    "Plan de cuidado personalizado"
                  ]
                }

              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 bg-gradient-to-br ${plan.gradient} rounded-xl backdrop-blur-sm overflow-hidden group`}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    rotate: index % 2 === 0 ? -1 : 1
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  <h3 className="text-2xl font-semibold text-textDark mb-4">{plan.title}</h3>
                  <div className="text-5xl font-bold text-textDark mb-6">{plan.price}</div>
                  <ul className="text-textLight space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="relative md:h-[85vh] py-20 px-4 bg-[var(--bg-dark-slider)]" style={{
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Por qué Elegirnos?</h2>
              <ul className="space-y-4">
                {whyChooseUs.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <span className="text-purple-300 mt-1">•</span>
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
                    src="/hifu/image.webp"
                    alt="Spa Holístico"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>

        </section>
        <footer className="relative top-[30vh] md:top-[0vh]">
          <FooterWithLogo />
        </footer>
      </div>
    </>
  );
};
