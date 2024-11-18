import React, { useState, useEffect } from "react";
import { Stepper, Step, Typography, Button } from "@material-tailwind/react";
import { UserIcon, CalendarIcon } from "@heroicons/react/24/outline";

export function SpaAppointmentStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const steps = [
    { label: "Paso 1", description: "Busca el servicio que deseas." },
    { label: "Paso 2", description: "Envíanos un mensaje por WhatsApp." },
    { label: "Paso 3", description: "Una asesora te guiará paso a paso." },
    { label: "Paso 4", description: "Agenda tu cita de valoración." }
  ];

  // Función para controlar el scroll con un umbral de distancia
  const handleScroll = (event) => {
    const distance = event.deltaY;
    setScrollDistance((prev) => prev + distance);

    // Si el desplazamiento supera un umbral, cambiamos de paso
    if (scrollDistance > 100 && activeStep < steps.length - 1) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
      setScrollDistance(0); // Reiniciamos la distancia de desplazamiento
    } else if (scrollDistance < -100 && activeStep > 0) {
      setActiveStep((prev) => Math.max(prev - 1, 0));
      setScrollDistance(0); // Reiniciamos la distancia de desplazamiento
    }
  };

  useEffect(() => {
    // Añadir evento de scroll
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeStep, scrollDistance]);

  // Enlace para abrir WhatsApp
  const whatsappLink = "https://wa.me/1234567890"; // Reemplaza con tu número de WhatsApp

  return (
    <>
      <div className="max-w-screen-2xl w-screen px-24 py-4 flex flex-col items-center">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <UserIcon className="h-5 w-5 text-colorIcon" />
              <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                  variant="h6"
                  color={activeStep === index ? "purple" : "gray"}
                  className="text-white"
                >
                  {step.label}
                </Typography>
                <Typography
                  color={activeStep === index ? "purple" : "gray"}
                  className="font-normal text-gray-600"
                >
                  {step.description}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>

        {/* Botón de WhatsApp siempre visible pero con animación controlada */}
        <Button
          color="purple"
          onClick={() => window.open(whatsappLink, "_blank")}
          className={`transform transition-all duration-1500 ease-out mt-32 ${
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
    </>
  );
}
