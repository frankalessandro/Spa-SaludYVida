import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const LeafPath = () => (
  <path d="M382.6 55.1s-14.5 20.8-29.8 53.8c22 10.2 37.8 19.6 37.8 19.6s-19-3.7-44.6-4.1c-27 65-49.7 165.1 10 252.3l-1 2.7c-12.4 34-33.7 61.5-33.9 61.8a5.5 5.5 0 0 0 4.2 8.8c1.1 0 3.2-.7 4.3-2.1.9-1.2 22.6-29.1 35.6-64.8l2.4-6.6a252.6 252.6 0 0 0 63.8-57.3l-25.3-18a168 168 0 0 0 39.3-3.6c64.8-118.9-62.7-242.5-62.7-242.5Z M717.2 202.3c.1-60.6-43.7-116-120.3-147.6a260.5 260.5 0 0 0-20.6 29.1c18.7 8.6 26 10.6 46.4 29.4-29.3-6-37.8-2.8-58.4-7.6-42.1 86.7-35.3 191.9 5.8 269l-2.3 3.6c-21.9 33-36.1 38.9-36.1 38.9a5.4 5.4 0 0 0-3.3 6.9c.8 2.2 2.9 3.6 5.1 3.6s1.2-.1 1.8-.3c1.7-.6 17.6-7.1 41.5-43.2l4.6-7.2a342.4 342.4 0 0 0 89.6-68.3 254 254 0 0 1-18.6-34.5c13.8 3.8 25.4 8.3 35.9 12.8a158.5 158.5 0 0 0 27.3-64.8c-15-3-31.2-8.1-48.7-15.8 19.5-2.5 35.6-3.3 50.3-4.1Z" />
);

export const AnimatedBackground = () => {
  const [containerRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <div className="fixed inset-0 md:left-[40%] rotate-[-12] md:rotate-45 w-[100vw] md:w-[30vw] h-full pointer-events-none z-0 opacity-20 md:opacity-50">
      {/* Layer 1: Gradient Background */}
      <div className="absolute inset-0  opacity-80" />
      {/* Layer 2: Animated Leaves */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Leaf 1 - Top Left */}
        <div
          className={`absolute w-48 h-48 transition-all duration-[3000ms] ease-in-out
            ${inView 
              ? 'opacity-30 top-1/6 left-1/6 rotate-45 translate-y-0 animate-float-slow' 
              : 'opacity-0 -top-full left-1/6 rotate-0 translate-y-1/2'
            }`}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-600/40">
            <LeafPath />
          </svg>
        </div>

        {/* Leaf 2 - Top Right */}
        <div
          className={`absolute w-32 h-32 transition-all duration-[3500ms] ease-in-out delay-500
            ${inView 
              ? 'opacity-20 top-1/4 right-1/4 -rotate-30 translate-y-0 animate-float-medium' 
              : 'opacity-0 -top-full right-1/4 rotate-0 translate-y-1/2'
            }`}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-500/30">
            <LeafPath />
          </svg>
        </div>

        {/* Leaf 3 - Center */}
        <div
          className={`absolute w-40 h-40 transition-all duration-[4000ms] ease-in-out
            ${inView ? 'opacity-25 animate-float-fast' : 'opacity-0'}`}
          style={{
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-400/35">
            <LeafPath />
          </svg>
        </div>

        {/* Leaf 4 - Bottom Left */}
        <div
          className={`absolute w-36 h-36 transition-all duration-[3200ms] ease-in-out delay-300
            ${inView 
              ? 'opacity-30 bottom-1/4 left-1/5 rotate-180 translate-y-0 animate-float-reverse' 
              : 'opacity-0 bottom-full left-1/5 rotate-0 translate-y-1/2'
            }`}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-500/25">
            <LeafPath />
          </svg>
        </div>

        {/* Leaf 5 - Bottom Right */}
        <div
          className={`absolute w-44 h-44 transition-all duration-[3800ms] ease-in-out delay-700
            ${inView 
              ? 'opacity-20 bottom-1/3 right-1/6 rotate-90 translate-y-0 animate-float-diagonal' 
              : 'opacity-0 bottom-full right-1/6 rotate-0 translate-y-1/2'
            }`}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-600/30">
            <LeafPath />
          </svg>
        </div>

        {/* Leaf 6 - Middle Right */}
        <div
          className={`absolute w-40 h-40 transition-all duration-[4200ms] ease-in-out delay-200
            ${inView 
              ? 'opacity-25 top-1/2 right-1/3 -rotate-45 translate-y-0 animate-float-spiral' 
              : 'opacity-0 top-full right-1/3 rotate-0 translate-y-1/2'
            }`}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-emerald-400/40">
            <LeafPath />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Add enhanced animation keyframes using Tailwind
const style = document.createElement('style');
style.textContent = `
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0) rotate(45deg); }
    50% { transform: translate(-15px, 20px) rotate(50deg); }
  }

  @keyframes float-medium {
    0%, 100% { transform: translate(0, 0) rotate(-30deg); }
    50% { transform: translate(20px, -15px) rotate(-25deg); }
  }

  @keyframes float-fast {
    0%, 100% { transform: translate(-50%, -50%) rotate(0); }
    33% { transform: translate(-45%, -55%) rotate(5deg); }
    66% { transform: translate(-55%, -45%) rotate(-5deg); }
    100% { transform: translate(-50%, -50%) rotate(0); }
  }

  @keyframes float-reverse {
    0%, 100% { transform: translate(0, 0) rotate(180deg); }
    50% { transform: translate(-10px, -25px) rotate(175deg); }
  }

  @keyframes float-diagonal {
    0%, 100% { transform: translate(0, 0) rotate(90deg); }
    50% { transform: translate(15px, 15px) rotate(95deg); }
  }

  @keyframes float-spiral {
    0% { transform: translate(0, 0) rotate(-45deg) scale(1); }
    33% { transform: translate(-10px, 15px) rotate(-40deg) scale(1.05); }
    66% { transform: translate(15px, -10px) rotate(-50deg) scale(0.95); }
    100% { transform: translate(0, 0) rotate(-45deg) scale(1); }
  }

  .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
  .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
  .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
  .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
  .animate-float-diagonal { animation: float-diagonal 9s ease-in-out infinite; }
  .animate-float-spiral { animation: float-spiral 10s ease-in-out infinite; }
`;
document.head.appendChild(style);

export default AnimatedBackground;