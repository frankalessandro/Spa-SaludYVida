import React from 'react';
import { Check, Clock, Star, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const TypewriterText = ({ text, index }) => {
  return (
    <span 
      className="block overflow-hidden whitespace-nowrap border-r-2 border-blue-500 animate-typing"
      style={{
        animationDelay: `${index * 1000}ms`,
        width: 'fit-content'
      }}
    >
      {text}
    </span>
  );
};

const BenefitsPanel = ({ benefits }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <ThumbsUp className="w-5 h-5 mr-2 text-blue-500" />
        Beneficios
      </h4>
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center text-gray-700 group">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <TypewriterText text={benefit} index={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ResultsTimeline = () => {
  const timelineItems = [
    {
      time: "Antes del Tratamiento",
      title: "Estado Inicial",
      description: "Evaluación profesional de las áreas a tratar con criolipólisis",
      features: [
        "Consulta de valoración gratuita",
        "Evaluación personalizada",
        "Plan de tratamiento a medida"
      ],
      icon: Clock,
      benefits: [
        "Análisis completo de necesidades",
        "Plan personalizado",
        "Sin compromiso inicial"
      ]
    },
    {
      time: "Durante el Proceso",
      title: "Aplicación de Criolipólisis",
      description: "Tratamiento no quirúrgico con tecnología de enfriamiento controlado",
      features: [
        "Duración: 1 hora por sesión",
        "Membrana anticongelante incluida",
        "Masajes complementarios"
      ],
      icon: Star,
      benefits: [
        "Procedimiento indoloro",
        "Sin tiempo de inactividad",
        "Máxima seguridad"
      ]
    },
    {
      time: "Primeras Semanas",
      title: "Evolución Inicial",
      description: "Cambios progresivos visibles desde la primera sesión",
      features: [
        "Resultados en 24 días",
        "Adaptación corporal gradual",
        "Seguimiento profesional"
      ],
      icon: ShieldCheck,
      benefits: [
        "Cambios naturales",
        "Resultados visibles",
        "Seguimiento continuo"
      ]
    },
    {
      time: "Resultado Final",
      title: "Transformación Completa",
      description: "Resultados óptimos entre 1 a 12 semanas",
      features: [
        "Eliminación de grasa localizada",
        "Mejora de flacidez",
        "Reducción de celulitis"
      ],
      icon: Award,
      benefits: [
        "Resultados duraderos",
        "Transformación natural",
        "Satisfacción garantizada"
      ]
    }
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 300,
    });

    sr.reveal('.timeline-item', {
      delay: 200,
      distance: '50px',
      origin: 'bottom'
    });

    sr.reveal('.feature-item', {
      delay: 400,
      distance: '30px',
      origin: 'left',
      interval: 100
    });

    sr.reveal('.timeline-icon', {
      delay: 300,
      scale: 0.5,
      distance: '0px',
      origin: 'center'
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <style jsx global>{`
        @keyframes typing {
          from {
            width: 0;
            border-right-color: transparent;
          }
          to {
            width: 100%;
            border-right-color: rgb(59, 130, 246);
          }
        }
        
        .animate-typing {
          animation: typing 2s steps(30) forwards;
          width: 0;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">
          Proceso de Criolipólisis
        </h2>
        <p className="text-center text-blue-600 mb-16 text-xl">
          Transformación paso a paso con tecnología avanzada
        </p>

        <div className="space-y-16">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="timeline-item relative"
              >
                <div className={`
                  flex flex-col lg:flex-row items-center gap-8 
                  bg-gray-50
                  p-8 rounded-2xl shadow-xl 
                  hover:transform hover:scale-[1.02] 
                  transition-all duration-500
                  border border-gray-200
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}>
                  {/* Icono flotante */}
                  <div className="timeline-icon absolute -top-8 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0">
                    <div className="p-4 bg-blue-500 rounded-full shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Panel principal */}
                  <div className="w-full lg:w-2/3 space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-blue-600 font-mono text-lg font-semibold">
                        {item.time}
                      </span>
                      <div className="flex-grow h-0.5 bg-blue-200"></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>

                    {/* Características */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="feature-item flex items-center space-x-3"
                        >
                          <Check className="w-5 h-5 flex-shrink-0 text-green-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Panel de beneficios */}
                  <div className="w-full lg:w-1/3">
                    <BenefitsPanel benefits={item.benefits} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
