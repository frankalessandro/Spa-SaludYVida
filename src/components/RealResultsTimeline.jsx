import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Check } from 'lucide-react';

// Image imports
import img1 from "../assets/img/hifu/hifu4.webp";
import img2 from "../assets/img/hifu/hifu2.webp";
import img3 from "../assets/img/hifu/hifu3.webp";
import img4 from "../assets/img/hifu/hifu1.webp";

export const RealResultsTimeline = () => {
  const timelineItems = [
    {
      time: "Antes",
      title: "Estado Inicial",
      description: "Signos visibles de envejecimiento y pérdida de elasticidad",
      image: img4
    },
    {
      time: "Después",
      title: "Transformación HIFU",
      description: "Piel rejuvenecida, más firme y luminosa",
      image: img1
    },
    {
      time: "Detalle",
      title: "Contorno Facial",
      description: "Definición mejorada y lifting natural sin cirugía",
      image: img2
    },
    {
      time: "Resultado Final",
      title: "Resultado Integral",
      description: "Rejuvenecimiento completo con técnica no invasiva",
      image: img3
    }
  ];

  useEffect(() => {
    ScrollReveal().reveal('.timeline-item', {
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      interval: 200,
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-slate-900">
      <h2 className="text-4xl font-bold text-center text-textDark mb-16">
        Resultados Reales
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {timelineItems.map((item, index) => (
          <div 
            key={index}
            className={`
              timeline-item 
              flex flex-col 
              ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
              items-center 
              gap-8 
              bg-slate-800/50 
              p-6 
              rounded-xl 
              shadow-lg 
              hover:bg-slate-800/70 
              transition-all 
              duration-300
            `}
          >
            {/* Imagen */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
              <img 
                src={item.image} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300"
              />
            </div>

            {/* Contenido de texto */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 font-mono italic text-lg">
                  {item.time}
                </span>
                <div className="flex-grow h-0.5 bg-blue-500/30"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-textDark">
                {item.title}
              </h3>
              
              <p className="text-textLight leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center space-x-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>Resultado Confirmado</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
