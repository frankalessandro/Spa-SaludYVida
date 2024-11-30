import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, Sparkles, Wand2, Target, Zap, Shell, Smile, Cpu, ScanEye, History, PersonStanding, HandCoins, SmilePlus, Star, Crown } from 'lucide-react';
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

// resultados
const timelineItems = [
  {
    time: "Antes",
    title: "Estado Inicial",
    description: "Piel con signos de envejecimiento, falta de luminosidad y textura irregular",
    image: img4 // Imagen representativa de la condición inicial de la piel
  },
  {
    time: "Después",
    title: "Mejora Inicial",
    description: "Piel más luminosa y con una textura más uniforme tras la primera sesión",
    image: img1 // Imagen de los resultados después de la primera sesión de PLASMA
  },
  {
    time: "Detalle",
    title: "Renovación Celular",
    description: "Estimulación de colágeno y elastina para una piel más tersa y rejuvenecida",
    image: img2 // Imagen enfocada en detalles de la piel tratada con PLASMA
  },
  {
    time: "Resultado Final",
    title: "Transformación Completa",
    description: "Piel revitalizada y de mejor calidad, con una luminosidad natural",
    image: img3 // Imagen que muestra el resultado final después de varias sesiones de PLASMA
  }
];


const images = [img1, img2, img3, img4];
const textImages = [
  '✨ Técnica aprobada y segura con registro médico INVIMA',
  '🔬 Extracción de plasma propio para regeneración celular',
  '💎 Estimulación natural de colágeno y elastina',
  '🌟 Piel más luminosa, tersa y de mejor calidad'
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

export const Plasma = () => {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Refs for intersection observation
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [processRef, processInView] = useInView({ threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef(null);

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

  /// lista de slider beneficios para PLASMA
  const benefits = [
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Estimulación de colágeno y elastina", icon: Smile },
        { text: "Técnica aprobada con registro médico INVIMA", icon: Cpu },
        { text: "Regeneración celular y rejuvenecimiento", icon: ScanEye }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Piel más tersa y luminosa", icon: History },
        { text: "Tratamiento no invasivo y seguro", icon: PersonStanding },
        { text: "Mejora visible desde los primeros días", icon: HandCoins }
      ]
    },
    {
      image: "/hifu/hifu_tool.webp",
      items: [
        { text: "Sin tiempo de recuperación", icon: SmilePlus },
        { text: "Reducción de signos de envejecimiento", icon: PersonStanding },
        { text: "Resultados óptimos con 2-4 sesiones recomendadas", icon: HandCoins }
      ]
    }
  ];
  // lista de por que elegirnos
  const whyChooseUs = [
    "Más de 10 años de experiencia en tratamientos de estética holística",
    "Especialistas certificados en técnicas de regeneración celular",
    "Ambiente relajante y profesional para tu bienestar",
    "Tratamientos personalizados según tu tipo de piel y necesidades",
    "Uso de plasma propio para resultados naturales y efectivos",
    "Técnica de PLASMA combinada con enfoque no invasivo y resultados visibles"
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
      {/* <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]"> */}
      <div className="min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-black z-[10]">
        <section className="w-full min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
          {/* Canvas para las partículas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.6 }}
          />

          {/* Overlay Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="min-h-[90vh] container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 lg:py-0">
            {/* Left Side - Image */}
            <div className="w-full lg:w-[35vw] relative flex justify-center items-center mt-8 lg:mt-0">
              <div className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-auto max-w-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10"></div>
                <img
                  src="/hifu/hifu_tool.webp"
                  alt="Spa Holístico 3D"
                  className="object-contain w-full h-full relative z-0"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-[50vw] flex flex-col justify-center space-y-8 z-10 mb-8 lg:mb-0">
              <div className="text-white">
                {/* Decorative Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"></div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-6 leading-tight">
                  <span className="block font-serif">PLASMA</span>
                  <span className="block">
                    <span className="font-light">Regeneración</span>
                    <span className="text-yellow-400 font-serif"> Celular</span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light tracking-wide">
                  Técnica no invasiva que utiliza plasma propio para estimular la producción de colágeno y rejuvenecer la piel.
                </p>
              </div>

              <div className="block">
                <div className="flex items-center space-x-4">
                  <div className="hidden lg:block h-[1px] w-12 bg-yellow-400"></div>
                  <p className="text-yellow-400 text-base lg:text-lg font-light tracking-wider">
                    Rejuvenece naturalmente • Estimula tu piel • Resultados visibles y duraderos
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-700 mb-4">
              PLASMA y rejuvenece la piel de forma natural.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              El tratamiento de PLASMA consiste en la extracción de plasma del propio paciente, que se inyecta en las zonas específicas de la piel para estimular la regeneración celular y la producción de colágeno y elastina. Sin incisiones ni procedimientos invasivos, este método mejora la textura, luminosidad y firmeza de la piel, reduciendo signos de envejecimiento como manchas y arrugas de manera segura y natural.
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-4">
                Tratamiento de Plasma Rico en Plaquetas (PRP) Avanzado
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                El tratamiento de Plasma Rico en Plaquetas (PRP) es una técnica revolucionaria en medicina estética que utiliza los factores de crecimiento presentes en tu propia sangre para regenerar y rejuvenecer la piel. Este procedimiento natural y no invasivo estimula la producción de colágeno y elastina, promoviendo la regeneración celular. Ideal para mejorar la textura de la piel, reducir cicatrices, manchas, arrugas y otorgar un aspecto más luminoso y revitalizado, el PRP es una solución segura y efectiva para una piel radiante.
              </p>
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
            <h2 className="text-center text-4xl md:text-5xl lg:text-8xl font-bold pt-20 vertical-gradient-text-gray">
              Beneficios del Tratamiento
            </h2>

            <div className="flex-grow relative">
              {/* Navigation Buttons - Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute left-[2vw] top-1/2 -translate-y-1/2 bg-black hover:bg-white/20 p-2 rounded-full"
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
                          className: "text-yellow-800 w-8 h-8 mb-3"
                        })}
                        <span className="vertical-gradient-text text-4xl">{benefit.text}</span>
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
                      className="flex items-center space-x-4 bg-white/2 backdrop-blur-sm rounded-lg p-4"
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
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-yellow-800/10" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-yellow-800/10" />
          </motion.div>
        </motion.section>

        {/* Antes/Después Gallery - Enhanced Timeline */}
        <RealResultsTimeline timelineItems={timelineItems} />

        <motion.section
          className="relative py-20 my-auto px-4 min-h-[80vh] bg-[#0a0a0a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                className="text-5xl md:text-6xl font-light mb-4"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
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
                  price: "$200,000",
                  icon: Star,
                  features: [
                    "1 sesión completa de PLASMA",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$500,000",
                  icon: Crown,
                  features: [
                    "Múltiples sesiones de PLASMA",
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
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 rounded-2xl blur-[2px]"></div>
                  <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-1">
                    <div className="h-full bg-gradient-to-br from-black to-[#1a1a1a] rounded-xl p-8 transition-transform duration-500 group-hover:scale-[1.02]">
                      {/* Icon */}
                      <div className="mb-6">
                        {React.createElement(plan.icon, {
                          className: "w-10 h-10 text-yellow-400"
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
                      <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-black rounded-lg font-medium transform transition-transform duration-200 hover:scale-105">
                        Reservar Ahora
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
