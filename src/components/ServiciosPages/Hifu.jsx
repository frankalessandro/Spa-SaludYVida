import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { Check, ArrowRight, Sparkles, Wand2, Target, Zap } from 'lucide-react';
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

export const Hifu = () => {
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
      <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
        <section className="w-full h-[90vh] bg-gradient-to-br from-black via-black to-purple-800 relative overflow-hidden">
          {/* Contenedor principal con mejor organización espacial */}
          <div className="h-[120vh] md:h-full container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 pt-16 lg:pt-0">
            {/* Lado izquierdo - Textos */}
            <div className="w-full lg:w-[35vw] absolute md:relative bottom-[30vh] md:bottom-[-5vh] lg:left-[-10vw] lg:bottom-[20vh] flex justify-center items-end lg:h-full">
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
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 leading-tight p-2">
                  <span className="vertical-gradient-text block">ULTHERAPY</span>
                  <span className="block">
                    <span className="vertical-gradient-text">Tecnología</span>
                    <span className="text-purple-400"> Hifu</span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Mínima invasividad para combatir el envejecimiento
                </p>
              </div>

              <div className="block lg:hidden">
                <p className="text-purple-400 text-lg font-medium text-center">
                  Transforma tu vida • Renueva tu energía • Encuentra tu equilibrio
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
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
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
                  title: "Evaluación Inicial",
                  description: "Valoración personalizada de tu piel y objetivos",
                  icon: Target
                },
                {
                  step: 2,
                  title: "Tratamiento HIFU",
                  description: "Aplicación precisa de ultrasonido focalizado",
                  icon: Wand2
                },
                {
                  step: 3,
                  title: "Seguimiento",
                  description: "Monitoreo de resultados y cuidados posteriores",
                  icon: Zap
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
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Beneficios del Tratamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Rejuvenecimiento facial sin cirugía",
                "Estimulación natural del colágeno",
                "Sin tiempo de recuperación",
                "Resultados duraderos",
                "Procedimiento no invasivo",
                "Mejora visible de la flacidez"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="text-blue-400 flex-shrink-0" />
                  <div className="text-textLight text-lg">{benefit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Antes/Después Gallery - Enhanced Timeline */}
        <RealResultsTimeline />

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
                  price: "$1,000,000",
                  gradient: "from-blue-900/40 to-purple-900/40",
                  features: [
                    "1 sesión completa de HIFU 7D",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$2,500,000",
                  gradient: "from-purple-900/40 to-pink-900/40",
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

        {/* CTA Final Section - Preserved Original Design */}
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
              La Belleza Está en Tus Manos
            </h2>
            <p className="text-lg md:text-2xl text-textLight mb-12">
              Descubre cómo el tratamiento HIFU 7D puede transformar tu apariencia y confianza.
              Agenda tu consulta gratuita hoy mismo.
            </p>
            <motion.button
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-initBackgroundButtonViewsGradient to-endBackgroundButtonViewsGradient text-textLight font-semibold text-lg hover:shadow-lg hover:shadow-BotonesHover transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              ¡Agenda Ahora!
            </motion.button>
          </div>
        </motion.section>
        {/* Footer */}
        <FooterWithLogo />
      </div>
    </>
  );
};
