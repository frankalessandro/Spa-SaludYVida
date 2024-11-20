import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FlyingBirdsBackground } from './FlyingBirdsBackground';
const backgroundSVGs = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23e0f3ff' d='M0 0l800 400L1600 0v800H0z'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23c0e4ff' d='M0 0c0 0 800 400 1600 0v800H0z'/%3E%3C/svg%3E"
];

const sections = [
  {
    title: "Ubicación de Spa Holístico Palmira",
    content: "Sumérgete en una experiencia de bienestar integral en nuestro spa holístico ubicado en el corazón de Palmira. Ofrecemos tratamientos personalizados que armonizan cuerpo, mente y espíritu.",
    contactDetails: {
      phone: "+57 318 456 7890",
      email: "contacto@spaholisticopalmira.com",
      address: "Calle 23 #15-45, Palmira, Valle del Cauca"
    },
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d-76.3035!3d3.5336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0fdc19a25ef3%3A0x4cb4f8139b60e3b5!2sPalmira%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
  }
];



const BackgroundShapes = () => {
  const shapes = [
    { type: 'circle', size: { desktop: 600, mobile: 250 }, color: '#b0d4ff', delay: 0, top: '10%', left: '-10%' },
    { type: 'circle', size: { desktop: 400, mobile: 150 }, color: '#d0e6ff', delay: 0.5, top: '70%', right: '-5%' },
    { type: 'circle', size: { desktop: 800, mobile: 350 }, color: '#90c4ff', delay: 1, bottom: '-20%', left: '5%' },
    { type: 'triangle', size: { desktop: 300, mobile: 100 }, color: '#a0c4ff', delay: 0.2, top: '30%', right: '10%' },
    { type: 'diamond', size: { desktop: 250, mobile: 125 }, color: '#c0d4ff', delay: 0.7, bottom: '10%', right: '20%' }
  ];

  return shapes.map((shape, index) => {
    const AnimatedShape = () => {
      // Determine shape size based on screen width
      const shapeSize = window.innerWidth <= 768 ? shape.size.mobile : shape.size.desktop;

      switch (shape.type) {
        case 'circle':
          return (
            <motion.div
              className="absolute rounded-full opacity-30"
              style={{
                width: shapeSize,
                height: shapeSize,
                backgroundColor: shape.color,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
                zIndex: 0
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{
                duration: window.innerWidth <= 768 ? 3 : 2,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          );
        case 'triangle':
          return (
            <motion.div
              className="absolute opacity-20"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shapeSize / 2}px solid transparent`,
                borderRight: `${shapeSize / 2}px solid transparent`,
                borderBottom: `${shapeSize}px solid ${shape.color}`,
                top: shape.top,
                right: shape.right,
                zIndex: 0
              }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 0.2 }}
              transition={{
                duration: window.innerWidth <= 768 ? 4 : 3,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          );
        case 'diamond':
          return (
            <motion.div
              className="absolute opacity-20 transform rotate-45"
              style={{
                width: shapeSize,
                height: shapeSize,
                backgroundColor: shape.color,
                bottom: shape.bottom,
                right: shape.right,
                zIndex: 0
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: window.innerWidth <= 768 ? 3.5 : 2.5,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          );
        default:
          return null;
      }
    };

    return <AnimatedShape key={index} />;
  });
};


export const SpaAppointmentStepper = () => {
  const scrollRevealRef = useRef(null);

  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    scrollRevealRef.current.reveal('.reveal-content', {
      duration: 1500,
      delay: 300,
      origin: 'bottom',
      distance: '50px',
      opacity: 0,
      reset: true
    });

    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);

  const renderSection = (section, index) => {
    return (
      <section
        key={index}
        className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundSVGs[index % backgroundSVGs.length]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <FlyingBirdsBackground /> */}
        <BackgroundShapes />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 text-center md:text-left reveal-content md:bg-white/70 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-teal-700 flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-teal-500 w-6 md:w-9 h-6 md:h-9" />
                {section.title}
              </h2>
              <p className="text-base md:text-lg mb-6 text-gray-800">{section.content}</p>

              <div className="mt-6 text-gray-700 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-teal-500 w-5 md:w-6 h-5 md:h-6" />
                  <span className="text-sm md:text-base">{section.contactDetails.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-teal-500 w-5 md:w-6 h-5 md:h-6" />
                  <a
                    href={`mailto:${section.contactDetails.email}`}
                    className="text-teal-600 hover:underline text-sm md:text-base"
                  >
                    {section.contactDetails.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-teal-500 w-5 md:w-6 h-5 md:h-6" />
                  <span className="text-sm md:text-base">{section.contactDetails.address}</span>
                </div>
              </div>
            </div>

            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                src={section.iframeMap}
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-2xl border-4 border-white"
                title="Mapa de Spa Holístico Palmira"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="w-full">
      {sections.map(renderSection)}
    </div>
  );
};