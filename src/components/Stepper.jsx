import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const colors = {
  primaryBackground: '#e0f3ff',
  secondaryBackground: '#c0e4ff',
  accentColor: '#b0d4ff',
  textPrimary: '#2d3748',
  textSecondary: '#718096',
  linkColor: '#38b2ac',
  iconColor: '#38b2ac',
};

const backgroundSVGs = [
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='${colors.primaryBackground}' d='M0 0l800 400L1600 0v800H0z'/%3E%3C/svg%3E`,
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800' preserveAspectRatio='none'%3E%3Cpath fill='${colors.secondaryBackground}' d='M0 0c0 0 800 400 1600 0v800H0z'/%3E%3C/svg%3E`,
];

const sections = [
  {
    title: "Ubicación de Spa Holístico Palmira",
    content:
      "Sumérgete en una experiencia de bienestar integral en nuestro spa holístico ubicado en el corazón de Palmira. Ofrecemos tratamientos personalizados que armonizan cuerpo, mente y espíritu.",
    contactDetails: {
      phone: "+57 318 456 7890",
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 text-center md:text-left md:bg-white/70 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
            <h2
              className="text-2xl md:text-4xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3"
              style={{ color: colors.textPrimary }}
            >
              <MapPin className="text-purple-500 w-6 md:w-9 h-6 md:h-9" />
              {section.title}
            </h2>
            <p
              className="text-base md:text-lg mb-6"
              style={{ color: colors.textSecondary }}
            >
              {section.content}
            </p>
            <div className="mt-6 text-gray-700 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-purple-500 w-5 md:w-6 h-5 md:h-6" />
                <span className="text-sm md:text-base">
                  {section.contactDetails.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-purple-500 w-5 md:w-6 h-5 md:h-6" />
                <a
                  href={`mailto:${section.contactDetails.email}`}
                  className="text-purple-600 hover:underline text-sm md:text-base"
                >
                  {section.contactDetails.email}
                </a>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: colors.textSecondary }}
              >
                <MapPin className="text-purple-500 w-5 md:w-6 h-5 md:h-6" />
                <span className="text-sm md:text-base">
                  {section.contactDetails.address}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );

  return <div className="w-full">{sections.map(renderSection)}</div>;
};
