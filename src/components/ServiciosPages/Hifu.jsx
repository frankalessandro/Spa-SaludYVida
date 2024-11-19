import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavbarWithMegaMenu } from '../NavbarWithMegaMenu';
import { ChevronDown, Clock, Star, Shield, Calendar, Check, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// importacion de imagenes aqui
import img1 from "../../assets/img/hifu/hifu1.jpg";
import img2 from "../../assets/img/hifu/hifu2.png";
import img3 from "../../assets/img/hifu/hifu3.png";
import img4 from "../../assets/img/hifu/hifu4.png";

const images = [img1, img2, img3, img4];
const textImages = [
  '💡 Innovación que inspira',
  '🎯 Precisión en cada detalle',
  '🛡️ Tu seguridad, nuestra prioridad',
  '⚡ Resultados efectivos garantizados'
];

const ParallaxImage = ({ scrollYProgress, children }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <motion.div style={{ y }} className="relative">
      {children}
    </motion.div>
  );
};

const whatsappLink = "https://wa.me/1234567890"; // Reemplaza con tu número de WhatsApp

export const Hifu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsVisible(true);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
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
      <div className="min-h-screen absolute bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 top-[-70px] z-0">

        {/* Hero Section with Parallax */}
        <motion.section
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
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              HIFU 7D
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl text-textDark max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Rejuvenecimiento facial sin cirugía con tecnología de última generación
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-textDark font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agenda tu consulta gratuita
            </motion.button>
          </div>
        </motion.section>

        {/* Antes/Después Gallery con AOS Animation */}
        <section className="py-20 px-4">
          <h2 className="text-4xl font-bold text-center text-textDark mb-16">Resultados Reales</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                data-aos-delay={index * 100}
              >
                <div className="relative h-96 overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`Resultado ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-textDark text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {textImages[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso de Tratamiento con Scroll Reveal */}
        <motion.section
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
                  description: "Valoración personalizada de tu piel y objetivos"
                },
                {
                  step: 2,
                  title: "Tratamiento HIFU",
                  description: "Aplicación precisa de ultrasonido focalizado"
                },
                {
                  step: 3,
                  title: "Seguimiento",
                  description: "Monitoreo de resultados y cuidados posteriores"
                }
              ].map((item) => (
                <motion.div
                  key={item.step}
                  className="relative p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm"
                  variants={fadeInUp}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-textDark mt-4 mb-4">{item.title}</h3>
                  <div className="text-textLight">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Beneficios con Animación de Aparición */}
        <motion.section
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
                  className="flex items-center space-x-4 bg-slate-800/30 p-6 rounded-lg"
                  variants={fadeInUp}
                >
                  <Check className="text-blue-400 flex-shrink-0" />
                  <div className="text-textLight text-lg">{benefit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Precios con Hover Effects */}
        <motion.section
          className="py-20 px-4 bg-slate-800/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-textDark mb-16">Inversión en tu Belleza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="relative p-8 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl backdrop-blur-sm overflow-hidden group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <h3 className="text-2xl font-semibold text-textDark mb-4">Sesión Individual</h3>
                <div className="text-5xl font-bold text-textDark mb-6">$1,000,000</div>
                <ul className="text-textLight space-y-4">
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>1 sesión completa de HIFU 7D</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Valoración personalizada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Seguimiento post-tratamiento</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative p-8 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl backdrop-blur-sm overflow-hidden group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <h3 className="text-2xl font-semibold text-textDark mb-4">Tratamiento Completo</h3>
                <div className="text-5xl font-bold text-textDark mb-6">$2,500,000</div>
                <ul className="text-textLight space-y-4">
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Múltiples sesiones de HIFU 7D</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Plasma rico en plaquetas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Limpieza facial profunda</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>Plan de cuidado personalizado</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Final con Animación */}
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
              Comienza tu Transformación Hoy
            </h2>
            <div className="text-xl text-textLight mb-12 max-w-2xl mx-auto">
              Agenda tu valoración gratuita y descubre cómo HIFU 7D puede ayudarte a lograr una piel más joven y radiante
            </div>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-textDark font-semibold text-lg flex items-center space-x-2 mx-auto hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Agendar Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.section>
      </div>
    </>

  );
};