export const FlyingBirdsBackground = () => {
  return (
    <div className="absolute inset-0 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full h-full">
        <defs>
          <clipPath id="clipBirds">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <g className="birds">
          {/* Pájaro 1 */}
          <g className="bird translate-x-[90vw] translate-y-[-60vh] sm:translate-y-[-20vh]">
            {/* Cuerpo */}
            <ellipse cx="50" cy="50" rx="20" ry="10" fill="#FFF" />
            
            {/* Alas */}
            <g className="wings">
              <path
                d="M30,50 Q10,30 30,20 Q40,40 30,50 Z"
                fill="#FFF"
                className="wing-left animate-flap"
              />
              <path
                d="M70,50 Q90,30 70,20 Q60,40 70,50 Z"
                fill="#FFF"
                className="wing-right animate-flap"
              />
            </g>

            {/* Cabeza */}
            <circle cx="50" cy="30" r="5" fill="#FFF" />
          </g>

          {/* Pájaro 2 */}
          <g className="bird translate-x-[85vw] translate-y-[-50vh] sm:translate-y-[-25vh]">
            {/* Cuerpo */}
            <ellipse cx="150" cy="80" rx="20" ry="10" fill="#FFF" />
            
            {/* Alas */}
            <g className="wings">
              <path
                d="M130,80 Q110,60 130,50 Q140,70 130,80 Z"
                fill="#FFF"
                className="wing-left animate-flap-2"
              />
              <path
                d="M170,80 Q190,60 170,50 Q160,70 170,80 Z"
                fill="#FFF"
                className="wing-right animate-flap-2"
              />
            </g>

            {/* Cabeza */}
            <circle cx="150" cy="60" r="5" fill="#FFF" />
          </g>

          {/* Pájaro 3 */}
          <g className="bird translate-x-[80vw] translate-y-[-55vh] sm:translate-y-[-30vh]">
            {/* Cuerpo */}
            <ellipse cx="250" cy="100" rx="20" ry="10" fill="#FFF" />
            
            {/* Alas */}
            <g className="wings">
              <path
                d="M230,100 Q210,80 230,70 Q240,90 230,100 Z"
                fill="#FFF"
                className="wing-left animate-flap-3"
              />
              <path
                d="M270,100 Q290,80 270,70 Q260,90 270,100 Z"
                fill="#FFF"
                className="wing-right animate-flap-3"
              />
            </g>

            {/* Cabeza */}
            <circle cx="250" cy="80" r="5" fill="#FFF" />
          </g>
        </g>

        {/* Madriguera (canasta) */}
        <g className="nest translate-x-[85vw] translate-y-[30vh]">
          {/* Base de la canasta */}
          <ellipse cx="150" cy="20" rx="40" ry="20" fill="#8B4513" />
          {/* Textura de la canasta */}
          <path
            d="M110,20 Q120,30 130,20 Q140,30 150,20 Q160,30 170,20"
            stroke="#6F4F1F"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M130,20 Q140,10 150,20 Q160,10 170,20"
            stroke="#6F4F1F"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </svg>

      {/* Estilos globales para las animaciones */}
      <style jsx>{`
        /* Animación de batir las alas */
        @keyframes flap {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Animaciones diferentes para las alas de cada pájaro */
        .wing-left, .wing-right {
          animation: flap 1s infinite ease-in-out;
        }

        .wing-left {
          animation-delay: 0s;
        }

        .wing-right {
          animation-delay: 0.5s; /* Retraso para que las alas se muevan en un ciclo alterno */
        }

        /* Pájaro 2 (Alas con animación diferente) */
        @keyframes flap-2 {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(7deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .wing-left.animate-flap-2, .wing-right.animate-flap-2 {
          animation: flap-2 1s infinite ease-in-out;
        }

        /* Pájaro 3 (Alas con animación diferente) */
        @keyframes flap-3 {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .wing-left.animate-flap-3, .wing-right.animate-flap-3 {
          animation: flap-3 1s infinite ease-in-out;
        }

        /* Animación de vuelo para los pájaros */
        @keyframes fly {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100vw);
          }
        }

        .animate-fly {
          animation: fly 10s linear infinite;
        }
      `}</style>
    </div>
  );
};
