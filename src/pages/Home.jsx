import React from 'react';
import { NavbarWithMegaMenu } from '../components/NavbarWithMegaMenu';
import { SliderMain } from '../components/Slidermain';
import { Rating, Switch } from "@material-tailwind/react";
import { SpaAppointmentStepper } from '../components/Stepper';
export const Home = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <div className="h-[100vh] lg:h-[60vh]">
        <div className='flex justify-center'>
          <SliderMain />
        </div>
      </div>
      <div className='flex flex-col justify-center h-80'>
      <SpaAppointmentStepper/>
      </div>
    </>
  );
};
