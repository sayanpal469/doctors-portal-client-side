import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppiontment from './AvailableAppiontment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className=''>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppiontment date={date} setDate={setDate}></AvailableAppiontment>
            <Footer/>
        </div>
    );
};

export default Appointment;