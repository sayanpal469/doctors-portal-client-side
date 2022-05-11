import React from 'react';
import doctorSm from '../../../assets/images/doctor-small.png'
import './MakeAppointment.css'

const MakeAppointMent = () => {
    return (
        <section className='w-full flex justify-center items-center appointment my-32'>
            <div className='lg:flex-1'>
                <img className='mt-[-120px] hidden lg:block' src={doctorSm} alt="" />
            </div>
            <div className='lg:flex-1 p-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h1 className='text-4xl text-white my-3'>Make an appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-primary mt-5'>Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointMent;