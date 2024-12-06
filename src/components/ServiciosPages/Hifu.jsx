import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, Sparkles, Wand2, Target, Zap, Shell, Smile, Cpu, ScanEye, History, PersonStanding, HandCoins, SmilePlus, Star, Crown, Clock, ShieldCheck, Award } from 'lucide-react';
import { AnimatedBackground } from "../AnimatedBackground";
import { FooterWithLogo } from "../Footer";
import { useInView } from 'react-intersection-observer';
import { ResultsTimeline } from "../ResultsTimelineCriolipolisis";

import AOS from 'aos';
import 'aos/dist/aos.css';
// Image imports
import img1 from "../../assets/img/hifu/hifu4.webp";
import img2 from "../../assets/img/hifu/hifu2.webp";
import img3 from "../../assets/img/hifu/hifu3.webp";
import img4 from "../../assets/img/hifu/hifu1.webp";

const timelineItems = [
  {
    time: "Antes del Tratamiento",
    title: "Estado Inicial",
    description: "Signos visibles de envejecimiento y pérdida de elasticidad",
    features: [
      "Evaluación facial completa",
      "Análisis de elasticidad cutánea",
      "Plan personalizado de tratamiento"
    ],
    icon: Clock,
    benefits: [
      "Diagnóstico profesional",
      "Valoración sin compromiso",
      "Plan adaptado a tus necesidades"
    ]
  },
  {
    time: "Durante el Proceso",
    title: "Aplicación HIFU",
    description: "Tratamiento no invasivo con ultrasonido focalizado de alta intensidad",
    features: [
      "Duración: 45-60 minutos",
      "Tecnología de última generación",
      "Proceso indoloro y seguro"
    ],
    icon: Star,
    benefits: [
      "Sin tiempo de recuperación",
      "Máxima precisión",
      "Confort durante el tratamiento"
    ]
  },
  {
    time: "Primeras Semanas",
    title: "Evolución Visible",
    description: "Piel rejuvenecida, más firme y luminosa",
    features: [
      "Resultados progresivos",
      "Mejora en la textura",
      "Mayor firmeza facial"
    ],
    icon: ShieldCheck,
    benefits: [
      "Efecto natural",
      "Mejora continua",
      "Seguimiento profesional"
    ]
  },
  {
    time: "Resultado Final",
    title: "Transformación Completa",
    description: "Rejuvenecimiento integral con resultados duraderos",
    features: [
      "Lifting natural sin cirugía",
      "Definición mejorada del contorno",
      "Piel revitalizada"
    ],
    icon: Award,
    benefits: [
      "Resultados duraderos",
      "Aspecto natural",
      "Satisfacción garantizada"
    ]
  }
];


const images = [img1, img2, img3, img4];
const textImages = [
  '💡 Innovación que inspira',
  '🎯 Precisión en cada detalle',
  '🛡️ Tu seguridad, nuestra prioridad',
  '⚡ Resultados efectivos garantizados'
];

const whatsappLink = "https://wa.me/573226030044";

export const Hifu = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Refs for intersection observation
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [processRef, processInView] = useInView({ threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [text, setText] = useState("Mínima invasividad para combatir el envejecimiento");
  const [index, setIndex] = useState(0);
  const canvasRef = useRef(null);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setTypedText(prev => prev + text[index]);
        setIndex(index + 1);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [index, text]);
  // galeria de resultados
  const data = [
    {
      imageLink:
        "/home/mujerSpa.webp",
    },
    {
      imageLink:
        "/home/mujerSpa.webp",
    }, {
      imageLink:
        "/home/mujerSpa.webp",
    }, {
      imageLink:
        "/home/mujerSpa.webp",
    }, {
      imageLink:
        "/home/mujerSpa.webp",
    }, {
      imageLink:
        "/home/mujerSpa.webp",
    },

  ]

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

  // lista de slider beneficios
  const benefits = [
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Rejuvenecimiento facial sin cirugía", icon: Smile },
        { text: "Tecnología HIFU avanzada", icon: Cpu },
        { text: "Resultados visibles", icon: ScanEye }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Sin tiempo de recuperación", icon: History },
        { text: "Tratamiento no invasivo", icon: PersonStanding },
        { text: "Estimulación de colágeno", icon: HandCoins }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Sin tiempo de recuperación", icon: SmilePlus },
        { text: "Tratamiento no invasivo", icon: PersonStanding },
        { text: "Estimulación de colágeno", icon: HandCoins }
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Efectos de Lifting No Quirúrgico",
      description: "Logra una apariencia más juvenil al tensar y levantar la piel sin necesidad de cirugía.",
    },
    {
      title: "Tecnología Avanzada",
      description: "Utilizamos el sistema HIFU 7D de última generación, reconocido por su eficacia y seguridad.",
    },
    {
      title: "Resultados Personalizados",
      description: "Adaptamos cada tratamiento a las necesidades únicas de tu piel para garantizar el mejor resultado.",
    },
    {
      title: "Experiencia Confiable",
      description: "Nuestro equipo está altamente capacitado, asegurando un tratamiento profesional y confortable.",
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Ajustar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Crear partículas iniciales
    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          opacity: Math.random() * 0.5 + 0.2,
          growing: true
        });
      }
    };

    // Animar partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Actualizar opacidad con efecto de brillo
        if (particle.growing) {
          particle.opacity += 0.01;
          if (particle.opacity >= 0.7) particle.growing = false;
        } else {
          particle.opacity -= 0.01;
          if (particle.opacity <= 0.2) particle.growing = true;
        }

        // Mover partícula
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Envolver partículas en los bordes
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Dibujar partícula
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(255, 223, 0, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 223, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicializar
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();

    // Limpieza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
      <div className="h-screen max-h-screen bg-[#160520] max-w-[100vw] md:min-w-[100vw] overflow-x-hidden">
        <section className="w-full h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 z-[10]">
          {/* figura de fondo */}
          <div className='absolute hidden md:block left-0 top-0 -translate-x-1/2 w-[400px] h-[60vh] rounded-full bg-pink-100/10 blur-[40px]'></div>
          {/* Canvas para las partículas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.6 }}
          />

          <div className="h-screen container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8">
            {/* Main Content */}
            <div className="relative z-10 w-full min-h-screen">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                  {/* Left side - Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[80%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
                  >
                    <h2 className="text-lg hidden md:block lg:text-xl font-serif tracking-[0.3em] uppercase gold-text">
                      Experiencia Exclusiva
                    </h2>

                    {/* ULTHERAPY (Siempre centrado) */}
                    <h1 className="text-8xl sm:text-4xl md:text-5xl lg:text-[10em] font-title">
                      ULTHERAPY
                    </h1>

                    {/* Subtítulo inferior */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gold-text tracking-tighter p-2">
                      Tecnología HIFU 7D
                    </h1>
                    <div className="w-24 h-0.5 bg-gray-600" />
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
                      {typedText}
                    </p>
                    <motion.button
                      className="mt-6 px-8 lg:px-12 py-3 lg:py-4 bg-transparent border-2 border-gray-600 dark-gold-text text-base lg:text-lg tracking-wider hover:bg-gray-600 hover:text-black transition-all duration-300 "
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      RESERVE SU CONSULTA
                    </motion.button>
                  </motion.div>

                  {/* Right Side - Image */}
                  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-[70%] sm:w-[60%] lg:w-full max-w-xl overflow-hidden pb-12">
                      {/* Efecto de resplandor en la base */}
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[2vh]  md:-translate-y-[5vh] w-[80%] h-[70px] md:h-[150px] rounded-full bg-pink-200/10 blur-[17px] md:blur-[25px]"
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10"></div>
                      <img
                        src="/hifu/hifu_tool.webp"
                        alt="Spa Holístico 3D"
                        className="w-full h-auto object-contain relative z-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tratamiento avanzado HIFU */}
        <section
          className="relative py-20 px-6 md:px-16 bg-white"
        >
          {/* Texto centrado */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 rounded-full">
              HIFU y renueva la piel sin cirugías.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Lift-!N es la más reciente tecnología estética HIFU (High-Intensity Focused
              Ultrasound) que focaliza toda su energía en un haz de ultrasonido de alta
              frecuencia a una zona específica de la piel, sin hacer incisiones o
              utilizar agujas en el paciente, con el fin de remodelar su tejido
              mediante ablación térmica.
            </p>
          </div>

          {/* Contenido principal */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
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

            {/* Texto adicional */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Tratamiento HIFU Avanzado
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Lift-!N es la más reciente tecnología estética HIFU (High-Intensity
                Focused Ultrasound) que focaliza toda su energía en un haz de ultrasonido
                de alta frecuencia a una zona específica de la piel, sin hacer incisiones
                o utilizar agujas en el paciente, con el fin de remodelar su tejido
                mediante ablación térmica.
              </p>
            </div>
          </div>
        </section>

        {/* beneficios */}
        <motion.section
          className="h-screen bg-[var(--bg-dark-slider)] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full flex flex-col bg-[#160520]">
            <h2 className="text-center text-4xl md:text-5xl lg:text-8xl font-bold pt-20 gold-text">
              Beneficios del Tratamiento
            </h2>

            <div className="flex-grow relative">
              {/* Navigation Buttons - Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute left-[2vw] top-1/2 -translate-y-1/2 bg-purple-100/10 hover:bg-white/20 p-2 rounded-full"
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

              <div className="absolute left-[20%] md:left-1/2 bottom-0 -translate-x-[18vw] w-[500px] transform translate-y-[15%]">
                <motion.img
                  src={benefits[currentSlide].image}
                  alt="HIFU Device"
                  className="min-w-[35vw] h-[80vh] object-contain"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* <div className="flex justify-center mt-4 space-x-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/30'
                        }`}
                    />
                  ))}
                </div> */}
              </div>

              <div className="hidden md:block">
                {benefits[currentSlide].items.map((benefit, index) => {
                  const positions = [
                    "top-[16%] left-[17vw]",
                    "top-[60%] left-[18vw]",
                    "top-[39%] right-[18vw]"
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
                          className: "gold-text w-8 h-8 mb-3"
                        })}
                        <span className="vertical-gradient-text text-4xl">{benefit.text}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="md:hidden">
                <div className="absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 space-y-4">
                  {benefits[currentSlide].items.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 rounded-lg p-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {React.createElement(benefit.icon, {
                        className: "text-white w-6 h-6"
                      })}
                      <span className="text-white text-lg text-center">{benefit.text}</span>
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
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gray-800/10" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gray-800/10" />
          </motion.div>
        </motion.section>


        <section className='py-24 max-w-7xl mx-auto px-6'>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gold-text mb-12">
            Resultados de nuestros pacientes
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map(({ imageLink }, index) => (
              <div key={index} className="aspect-[16/9] w-full">
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={imageLink}
                  alt={`Resultado de paciente ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>


        {/* Results Timeline with Luxury Styling */}
        <section className="bg-[#160520] ">
          {/* gradiante */}
          <ResultsTimeline timelineItems={timelineItems} title="Proceso de Hifu 7d" description=" Transformación paso a paso con tecnología avanzada" className="z-20" />
        </section>

        <motion.section
          className="relative py-20 my-auto px-4 min-h-[80vh] bg-[#160520]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className='gradiante-inversion-belleza z-10'></div>
          {/* Decorative elements */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-[var(--bg--purple-dark)] to-black"> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#160520] via-black to-[#160520]">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                className="text-5xl md:text-6xl font-light mb-4"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 bg-clip-text gold-text">
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
                  price: "$1,000,000",
                  icon: Star,
                  features: [
                    "1 sesión completa de HIFU 7D",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$2,500,000",
                  icon: Crown,
                  features: [
                    "Múltiples sesiones de HIFU 7D",
                    "Plasma rico en plaquetas",
                    "Limpieza facial profunda",
                    "Plan de cuidado personalizado"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  variants={fadeInUp}
                >
                  {/* Card background with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-2xl blur-[2px]"></div>
                  <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-1">
                    <div className="h-full bg-gradient-to-br from-[#o] to-[#1a1a1a] rounded-xl p-8 transition-transform duration-500 group-hover:scale-[1.02]">
                      {/* Icon */}
                      <div className="mb-6">
                        {React.createElement(plan.icon, {
                          className: "w-10 h-10 text-purple-400"
                        })}
                      </div>

                      {/* Title & Price */}
                      <h3 className="text-2xl font-light text-white mb-2">{plan.title}</h3>
                      <div className="text-5xl font-semibold text-gray-500 bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 mb-8">
                        {plan.price}
                      </div>

                      {/* Features */}
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button className="w-full mt-8 px-6 py-3 gold-background to-purple-600 text-black rounded-lg font-medium transform transition-transform duration-200 hover:scale-105">
                        Reservar Ahora
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-8">
            {/* Título principal */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif gold-text mb-4">
                ¿POR QUE ESCOGERNOS?
              </h2>
              <div className="w-24 h-0.5 gold-background mx-auto" />
            </div>

            {/* Nuevo título adicional */}
            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg">
                Descubre por qué nuestro tratamiento HIFU 7D es la mejor elección para el cuidado de tu piel.
              </p>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-8 border border-purple-600/20 hover:border-purple-600/40 transition-colors duration-300"
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

        <footer className="relative top-[30vh] md:top-[0vh]">
          <FooterWithLogo />
        </footer>
      </div>
    </>
  );
};
