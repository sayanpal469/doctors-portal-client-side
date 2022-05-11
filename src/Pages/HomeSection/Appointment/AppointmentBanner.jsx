import React, { useState } from 'react';
import './AppointmentBanner.css'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero min-h-screen banner mb-10 lg:px-12 md:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img  style={{width: '600px', height: '355px'}} src={chair} className="rounded-lg shadow-2xl" alt='#' />
          <div className='lg:pr-48'>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            <p className='text-center mt-10'>You have selected: <span className='text-indigo-700 font-bold'>{format (date, 'PP')}</span></p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;