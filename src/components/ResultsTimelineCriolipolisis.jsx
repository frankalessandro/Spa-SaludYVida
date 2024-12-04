import React from 'react';
import { Check, Clock, Star, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

const BenefitsPanel = ({ benefits }) => {
  return (
    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <ThumbsUp className="w-5 h-5 mr-2 text-purple-500" />
        Beneficios
      </h4>
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center text-gray-700 group">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ResultsTimeline = ({ timelineItems, title, description }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-black mb-4">
          {title}
        </h2>
        <p className="text-center text-purple-600 mb-16 text-xl">
          {description}
        </p>

        <div className="space-y-16">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                <div className={`
                  flex flex-col lg:flex-row items-center gap-8 
                  bg-gray-50
                  p-8 rounded-2xl shadow-xl 
                  border border-gray-200
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}>
                  {/* Icono flotante */}
                  <div className="absolute -top-8 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0">
                    <div className="p-4 bg-purple-500 rounded-full shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Panel principal */}
                  <div className="w-full lg:w-2/3 space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-white gold-background my-2 px-2 rounded-full font-mono text-lg font-semibold">
                        {item.time}
                      </span>
                      <div className="flex-grow h-0.5 gold-background"></div>
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
                          className="flex items-center space-x-3"
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