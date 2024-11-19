import React, { useState, useEffect } from "react";
import { Stepper, Step, Typography, Button } from "@material-tailwind/react";
import { UserIcon, ChatBubbleOvalLeftIcon, CalendarIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function SpaAppointmentStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const steps = [
    {
      label: "Paso 1",
      description: "Busca el servicio que deseas entre nuestras opciones de spa y bienestar.",
      icon: <UserIcon className="h-6 w-6 text-gray-700" />,
    },
    {
      label: "Paso 2",
      description: "Envíanos un mensaje por WhatsApp para obtener más información sobre nuestros servicios.",
      icon: <ChatBubbleOvalLeftIcon className="h-6 w-6 text-gray-700" />,
    },
    {
      label: "Paso 3",
      description: "Una asesora te guiará paso a paso, resolviendo tus dudas y personalizando tu experiencia.",
      icon: <CalendarIcon className="h-6 w-6 text-gray-700" />,
    },
    {
      label: "Paso 4",
      description: "Agenda tu cita de valoración, eligiendo la fecha y hora más conveniente para ti.",
      icon: <PhoneIcon className="h-6 w-6 text-gray-700" />,
    }
  ];

  const handleScroll = (event) => {
    const distance = event.deltaY;
    setScrollDistance((prev) => prev + distance);

    if (scrollDistance > 100 && activeStep < steps.length - 1) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
      setScrollDistance(0);
    } else if (scrollDistance < -100 && activeStep > 0) {
      setActiveStep((prev) => Math.max(prev - 1, 0));
      setScrollDistance(0);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeStep, scrollDistance]);

  const whatsappLink = "https://wa.me/1234567890";

  return (
    <>
      <div className="max-w-screen-2xl w-full px-8 py-8 flex flex-col items-center">
        {/* Stepper */}
        <Stepper activeStep={activeStep} className="w-full">
          {steps.map((step, index) => (
            <Step
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative flex items-center justify-center ${activeStep === index ? 'bg-purple-100' : 'bg-transparent'}`}
            >
              <div className="flex items-center justify-center rounded-full p-4 bg-purple-500 text-white shadow-lg">
                {step.icon}
              </div>
              <div className="absolute -bottom-16 w-full text-center">
                <Typography
                  variant="h6"
                  color={activeStep === index ? "purple" : "gray"}
                  className="text-xl font-semibold"
                >
                  {step.label}
                </Typography>
                <Typography
                  color={activeStep === index ? "purple" : "gray"}
                  className="text-sm font-normal"
                >
                  {step.description}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>

        <Button
          color="purple"
          onClick={() => window.open(whatsappLink, "_blank")}
          className={`transform transition-all duration-1500 ease-out mt-16 ${
            activeStep === 3 ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'
          }`}
          style={{
            transform: activeStep === 3 ? 'translateY(0) scale(1.1)' : 'translateY(100%) scale(0.8)',
            opacity: activeStep === 3 ? 1 : 0,
          }}
        >
          Contactar por WhatsApp
        </Button>
      </div>

      {/* Responsiveness para pantallas pequeñas */}
      <style jsx>{`
        @media (max-width: 768px) {
          .stepper {
            flex-direction: column;
            align-items: center;
          }

          .stepper .step {
            width: 100%;
            margin-bottom: 2rem;
          }

          .stepper .step .absolute {
            bottom: -2rem;
            width: 100%;
          }

          .stepper .step .absolute h6 {
            font-size: 1.2rem;
          }

          .stepper .step .absolute p {
            font-size: 0.9rem;
          }
        }

        /* En pantallas grandes, mostrar los pasos de forma horizontal */
        @media (min-width: 1024px) {
          .stepper {
            flex-direction: row;
            justify-content: space-between;
          }

          .stepper .step {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
