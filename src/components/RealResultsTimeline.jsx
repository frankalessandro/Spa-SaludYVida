import React from 'react';
import { Check } from 'lucide-react';

// Image imports
import img1 from "../assets/img/hifu/hifu4.webp";
import img2 from "../assets/img/hifu/hifu2.webp";
import img3 from "../assets/img/hifu/hifu3.webp";
import img4 from "../assets/img/hifu/hifu1.webp";

export const RealResultsTimeline = ({ timelineItems }) => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-yellow-800 mb-16 gold-text">
        Resultados Reales
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`
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
                <span className="text-yellow-800 font-mono italic gold-background px-4 rounded-full">
                  {item.time}
                </span>
                <div className="flex-grow h-0.5 gold-background"></div>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-white leading-relaxed">
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