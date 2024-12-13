import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const colors = {
  primaryBackground: '#e0f3ff',
  secondaryBackground: '#c0e4ff',
  textPrimary: '#2d3748',
  textSecondary: '#718096',
};

const backgroundSVGs = [
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='${colors.primaryBackground}' d='M0 0l800 400L1600 0v800H0z'/%3E%3C/svg%3E`,
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='${colors.secondaryBackground}' d='M0 0c0 0 800 400 1600 0v800H0z'/%3E%3C/svg%3E`,
];

const sections = [
  {
    title: "Ubicación de Spa Salud y Vida",
    content:
      "Sumérgete en una experiencia de bienestar integral en nuestro spa holístico ubicado en el corazón de Palmira. Ofrecemos tratamientos personalizados que armonizan cuerpo, mente y espíritu.",
    contactDetails: {
      phone: "+57 322 603 0044",
      email: "contacto@spaholisticopalmira.com",
      address: "Calle 23 #15-45, Palmira, Valle del Cauca",
    },
    iframeMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d-76.3035!3d3.5336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a0fdc19a25ef3%3A0x4cb4f8139b60e3b5!2sPalmira%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus",
  },
];

export const SpaAppointmentStepper = () => {
  const renderSection = (section, index) => (
    <section
      key={index}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundSVGs[index % backgroundSVGs.length]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12">
          {/* Texto */}
          <div className="w-full md:w-1/2 bg-[#160520] p-6 md:p-8 rounded-lg backdrop-blur-md">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3 text-white"
            >
              <MapPin className="text-purple-500 w-6 md:w-8 h-6 md:h-8" />
              {section.title}
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed text-gray-300"
            >
              {section.content}
            </p>
            <div className="mt-6 space-y-4 text-sm md:text-base text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="text-purple-500 w-5 h-5" />
                <span>{section.contactDetails.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-500 w-5 h-5" />
                <a
                  href={`mailto:${section.contactDetails.email}`}
                  className="text-purple-400 hover:underline"
                >
                  {section.contactDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-500 w-5 h-5" />
                <span>{section.contactDetails.address}</span>
              </div>
            </div>
          </div>
          {/* Mapa */}
          <div className="w-full md:w-1/2 flex justify-center">
            <iframe
              src={section.iframeMap}
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md border-2 border-white"
              title="Mapa de Spa Holístico Palmira"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );

  return <div className="w-full">{sections.map(renderSection)}</div>;
};
