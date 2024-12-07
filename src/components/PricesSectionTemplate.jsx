import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animación más rápida
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const AnimatedPrice = ({ finalPrice }) => {
  const [currentPrice, setCurrentPrice] = useState(2500000);  // Precio inicial más alto
  const [color, setColor] = useState('text-red-500');  // Color inicial

  useEffect(() => {
    let count = 800000;  // Precio inicial
    const interval = setInterval(() => {
      if (count > finalPrice) {
        count -= 500; // Decrementar más rápido (500 en lugar de 1000)
        setCurrentPrice(count);
      } else {
        clearInterval(interval);  // Detener la animación una vez alcanzado el precio
        setColor('text-white'); // Cambiar color a blanco al finalizar
      }
    }, 5); // Animación más rápida (cada 5ms)
    
    return () => clearInterval(interval);
  }, [finalPrice]);

  return (
    <motion.div
      className={`text-5xl font-bold ${color} mb-6`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}  // Solo se anima cuando se ve en el viewport
      variants={fadeInUp}
    >
      ${currentPrice.toLocaleString()}  {/* Formato de número con coma */}
    </motion.div>
  );
};

export const PricingSection = () => {
  return (
    <motion.section
      className="py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-textDark mb-16">Inversión en tu Belleza</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Sesión Individual",
              finalPrice: 450000,  // Precio de la sesión individual
              gradient: "from-blue-900/40 to-purple-900/40",
              features: [
                "1 sesión completa de Criolipólisis",
                "Valoración personalizada",
                "Seguimiento post-tratamiento",
              ],
            },
            {
              title: "Tratamiento Completo",
              finalPrice: 2500000,  // Precio máximo para el tratamiento completo
              gradient: "from-purple-900/40 to-pink-900/40",
              features: [
                "Múltiples sesiones de Criolipólisis",
                "Plasma rico en plaquetas",
                "Limpieza facial profunda",
                "Plan de cuidado personalizado",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 bg-gradient-to-br ${plan.gradient} rounded-xl backdrop-blur-sm overflow-hidden group shadow-lg transform transition-all`}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <h3 className="text-2xl font-semibold text-white mb-4">{plan.title}</h3>
              {/* Animated Price */}
              
              <AnimatedPrice finalPrice={plan.finalPrice} />
              <ul className="text-white space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export const AdditionalSections = () => {
  return (
    <motion.section
      className="py-20 px-4 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-textDark mb-16">Beneficios del Tratamiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-lg"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Beneficios</h3>
            <ul className="text-white space-y-4">
              <li>Eliminación de grasa localizada</li>
              <li>Mejora de la flacidez</li>
              <li>Aporta colágeno</li>
              <li>Reducción de celulitis y estrías</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-br from-red-400 to-yellow-500 rounded-xl shadow-lg"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Cuidados Post-Tratamiento</h3>
            <ul className="text-white space-y-4">
              <li>Protégerse del sol</li>
              <li>Mantener una buena alimentación</li>
              <li>Realizar masajes post-tratamiento</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
