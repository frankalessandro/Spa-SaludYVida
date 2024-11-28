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

// Using the same image imports but they'll represent Dermapen treatment
import img1 from "../../assets/img/hifu/hifu4.webp";
import img2 from "../../assets/img/hifu/hifu2.webp";
import img3 from "../../assets/img/hifu/hifu3.webp";
import img4 from "../../assets/img/hifu/hifu1.webp";

const images = [img1, img2, img3, img4];
const textImages = [
  '💆 Rejuvenecimiento natural',
  '🎯 Precisión microscópica',
  '🌿 Tratamiento holístico',
  '✨ Resultados visibles'
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

export const Dermapen = () => {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({ threshold: 0.2 });

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
      <div className="min-h-screen overflow-y-auto scroll-smooth scroll-snap-y-mandatory scrollbar-hide min-w-[100vw] bg-[--color-background-white] from-[var(--color-background-white)] to-[var(--color-bg-2)] z-[10]">
        {/* Hero Section */}
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
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
            >
              DERMAPEN
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl text-white max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Rejuvenecimiento natural con micropunciones y principios activos
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-green-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agenda tu sesión holística
            </motion.button>
          </div>
        </motion.section>

        {/* Tratamiento Dermapen */}
        <section
          ref={ref}
          className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-green-100 to-teal-200 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-[-20%] right-[-20%] w-[200%] md:w-[150%]"
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
                  fill="#14B8A6"
                  d="M43.5,-55.2C58.1,-45.5,70.5,-32.4,75.3,-17.9C80,-3.3,77,13.6,68.6,27C60.3,40.5,46.5,50.6,32.3,59.5C18.2,68.3,3.6,76,-11.5,78.1C-26.5,80.3,-52.9,76.9,-63.8,63.7C-74.7,50.6,-70.1,27.7,-71.6,6.6C-73.1,-14.5,-80.6,-33.8,-74.6,-46.7C-68.6,-59.7,-49.1,-66.3,-31.6,-73.5C-14.1,-80.6,-7,-88.2,5.2,-95.1C17.4,-102.1,34.8,-108.3,43.5,-55.2Z"
                  transform="translate(100 100)"
                />
                <image
                  className="rounded"
                  href={img1}
                  x="35"
                  y="30"
                  width="130"
                  height="130"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Dermapen: Renovación Natural
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Técnica aprobada por INVIMA que utiliza micropunciones precisas para estimular la producción natural de colágeno. Combinamos principios activos específicos como vitaminas, silicio y ácido hialurónico para resultados óptimos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-teal-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Tratamiento personalizado según tipo de piel
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-teal-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Regeneración natural del colágeno
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="block w-4 h-4 bg-teal-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Aprobado médicamente por INVIMA
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
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Proceso Holístico</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Diagnóstico Personalizado",
                  description: "Evaluación integral de tu piel y necesidades específicas",
                  icon: Target
                },
                {
                  step: 2,
                  title: "Micropunciones + Activos",
                  description: "Aplicación precisa con principios activos seleccionados",
                  icon: Wand2
                },
                {
                  step: 3,
                  title: "Cuidado Post-tratamiento",
                  description: "Plan personalizado de cuidado y nutrición de la piel",
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
                    className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center"
                  >
                    <item.icon className="w-8 h-8 text-teal-400" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-textDark mt-8 mb-4">{item.title}</h3>
                  <div className="text-textLight">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Beneficios Section */}
        <motion.section
          ref={benefitsRef}
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Beneficios del Dermapen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Reducción de manchas y cicatrices",
                "Mejora de estrías",
                "Disminución de líneas de expresión",
                "Reducción de arrugas",
                "Estimulación natural del colágeno",
                "Mejor absorción de principios activos"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(20, 184, 166, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="text-teal-400 flex-shrink-0" />
                  <div className="text-textLight text-lg">{benefit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Antes/Después Gallery */}
        <RealResultsTimeline />

        {/* Precios Section */}
        <motion.section
          ref={pricingRef}
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Inversión en tu Bienestar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sesión Básica Dermapen",
                  price: "$200,000",
                  gradient: "from-teal-900/40 to-green-900/40",
                  features: [
                    "Sesión de Dermapen",
                    "Diagnóstico personalizado",
                    "Principios activos básicos",
                    "Recomendaciones post-tratamiento"
                  ]
                },
                {
                  title: "Tratamiento Completo Premium",
                  price: "$300,000",
                  gradient: "from-emerald-900/40 to-teal-900/40",
                  features: [
                    "Sesión completa de Dermapen",
                    "Limpieza facial profunda",
                    "Plasma rico en plaquetas",
                    "Principios activos premium",
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
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  <h3 className="text-2xl font-semibold text-textDark mb-4">{plan.title}</h3>
                  <div className="text-5xl font-bold text-textDark mb-6">{plan.price}</div>
                  <ul className="text-textLight space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="text-teal-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Final Section */}
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
              Renueva tu Piel Naturalmente
            </h2>
            <p className="text-lg md:text-2xl text-textLight mb-12">
              Descubre cómo el tratamiento Dermapen puede transformar tu piel de manera natural y efectiva.
              Agenda tu consulta holística hoy mismo.
            </p>
            <motion.button
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              ¡Agenda tu Sesión!
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <FooterWithLogo />
      </div>
    </>
  );
};