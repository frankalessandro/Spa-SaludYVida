import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

// SVGs para fondos (puedes reemplazarlos con tus propios SVGs o URLs)
const backgroundSVGs = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23b3d9ff' d='M0 0l800 400L1600 0v800H0z'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23e6f2ff' d='M0 0c0 0 800 400 1600 0v800H0z'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23ccebff' d='M0 400l800-400 800 400v400H0z'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='%23b3d9ff' d='M0 0h1600v800L800 400z'/%3E%3C/svg%3E"
];

const sections = [
  {
    title: "Ubicación y Contacto",
    content: "Visítanos en Calle 59b #34e-24 o contáctanos para reservar.",
    image: "home/happySpa.webp", 
    contactInfo: [
      { platform: "WhatsApp", link: "https://wa.me/123456789", color: "bg-green-500" },
      { platform: "Instagram", link: "https://instagram.com", color: "bg-pink-600" },
      { platform: "Facebook", link: "https://facebook.com", color: "bg-blue-600" }
    ]
  }
];

export const SpaAppointmentStepper = () => {
  const scrollRevealRef = useRef(null);

  useEffect(() => {
    scrollRevealRef.current = ScrollReveal();

    // Configuración para la animación de la imagen de la ubicación y contacto
    scrollRevealRef.current.reveal('.reveal-image', {
      duration: 1500,
      delay: 300,
      origin: 'right', // Viene desde la derecha
      distance: '100px',
      rotate: { x: 0, y: 0, z: 15 }, // Rotación inicial de 15 grados
      opacity: 0,
      reset: true,
      afterReveal: (domEl) => {
        domEl.style.transform = 'rotate(0deg)'; // Al final, la imagen debe quedar recta
        domEl.style.opacity = 1; // Aseguramos que la imagen sea completamente visible
      }
    });

    return () => {
      if (scrollRevealRef.current) scrollRevealRef.current.destroy();
    };
  }, []);

  const renderSection = (section, index) => {
    const isEvenSection = index % 2 === 0;
    
    const renderContent = () => {
      return (
        <div className={`
          w-full flex flex-col md:flex-row items-center justify-center 
          p-6 space-y-6 md:space-y-0 md:space-x-12
          ${isEvenSection ? 'md:flex-row' : 'md:flex-row-reverse'}
        `}>
          <div className={`
            w-full md:w-1/2 text-center 
            ${isEvenSection ? 'md:text-left' : 'md:text-right'}
            reveal-content
          `}>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-800">{section.title}</h2>
            <p className="text-lg mb-4 text-gray-700">{section.content}</p>

            {section.contactInfo && (
              <div className={`
                flex flex-wrap gap-4 mt-6
                ${isEvenSection ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}
              `}>
                {section.contactInfo.map((contact, i) => (
                  <a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${contact.color} text-white px-6 py-3 rounded-lg transition hover:opacity-90`}
                  >
                    {contact.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {section.image && (
            <div className="w-full md:w-1/2 flex justify-center reveal-image">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-2xl max-w-full h-auto md:max-w-md object-cover"
              />
            </div>
          )}
        </div>
      );
    };

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
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {renderContent()}
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
