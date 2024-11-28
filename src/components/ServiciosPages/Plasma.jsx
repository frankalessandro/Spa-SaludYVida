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
  '💉 Plasma: Regeneración desde el interior',
  '✨ Estimula colágeno, mejora tu piel',
  '🛡️ Tratamiento seguro y efectivo',
  '🌟 Resultados visibles y naturales'
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
        {/* Hero Section - Preserved Original Design with Enhanced Interactions */}
        <motion.section
          ref={heroRef}
          className="relative min-w-[100vw] top-0 h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${img1})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4">
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
              Plasma
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl text-white max-w-3xl mx-auto "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Rejuvenece tu piel con plasma: luminosidad y firmeza sin cirugía.
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-initBackgroundButtonViewsGradient to-endBackgroundButtonViewsGradient rounded-full text-textDark font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta gratuita
            </motion.button>
          </div>
        </motion.section>

        {/* Tratamiento avanzado HIFU */}
        <section
          ref={ref}
          className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-blue-100 to-blue-300 overflow-hidden"
        >
          {/* Fondo de Olas - Figura Grande y Blanca */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-[-20%] right-[-20%] w-[200%] md:w-[150%]" // Más grande
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="var(--bg-gradient)"
                d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,266.7C560,267,640,245,720,234.7C800,224,880,224,960,197.3C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
              </path>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
            {/* Imagen encapsulada en SVG */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80%] md:w-full"
              >
                <path
                  fill="#167364"
                  d="M43.5,-55.2C58.1,-45.5,70.5,-32.4,75.3,-17.9C80,-3.3,77,13.6,68.6,27C60.3,40.5,46.5,50.6,32.3,59.5C18.2,68.3,3.6,76,-11.5,78.1C-26.5,80.3,-52.9,76.9,-63.8,63.7C-74.7,50.6,-70.1,27.7,-71.6,6.6C-73.1,-14.5,-80.6,-33.8,-74.6,-46.7C-68.6,-59.7,-49.1,-66.3,-31.6,-73.5C-14.1,-80.6,-7,-88.2,5.2,-95.1C17.4,-102.1,34.8,-108.3,43.5,-55.2Z"
                  transform="translate(100 100)"
                />
                <image
                  className="rounded"
                  href={img1} /* Ruta de la imagen */
                  x="35"
                  y="30"
                  width="130"
                  height="130"
                  clipPath="path('M43.5,-55.2...')" /* Clipping opcional */
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </motion.div>

            {/* Información del Tratamiento */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Tratamiento con Plasma Rico en Plaquetas
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El tratamiento con plasma estimula la regeneración celular y la producción
                de colágeno, mejorando la calidad, luminosidad y firmeza de tu piel de forma
                natural y no invasiva.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Rejuvenecimiento facial con resultados visibles en pocos días.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Procedimiento seguro y personalizado.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Piel más luminosa, tersa y de mejor calidad.
                  </span>
                </li>
              </ul>
            </motion.div>

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
                  description: "Valoración personalizada para determinar tu tipo de piel y necesidades.",
                  icon: Target
                },
                {
                  step: 2,
                  title: "Extracción de Plasma",
                  description: "Se realiza una extracción de sangre para obtener el plasma rico en plaquetas.",
                  icon: Wand2
                },
                {
                  step: 3,
                  title: "Aplicación de Plasma",
                  description: "El plasma se inyecta en las zonas deseadas para estimular la regeneración celular.",
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
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Beneficios del Tratamiento con Plasma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Rejuvenecimiento facial y corporal sin cirugía",
                "Estimulación natural de la producción de colágeno y elastina",
                "Procedimiento no invasivo",
                "Mejora de la textura y luminosidad de la piel",
                "Resultados visibles desde los primeros días",
                "Sin tiempo de recuperación, solo cuidados mínimos"
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
                  price: "$200,000",
                  gradient: "from-blue-900/40 to-purple-900/40",
                  features: [
                    "1 sesión de plasma",
                    "Valoración personalizada",
                    "Seguimiento post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo",
                  price: "$600,000",
                  gradient: "from-purple-900/40 to-pink-900/40",
                  features: [
                    "2 a 4 sesiones de plasma",
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
              ¡Recupera tu Juventud de Manera Natural!
            </h2>
            <p className="text-lg md:text-2xl text-textLight mb-12">
              Descubre cómo el tratamiento con plasma puede regenerar tu piel y combatir los signos del envejecimiento.
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
