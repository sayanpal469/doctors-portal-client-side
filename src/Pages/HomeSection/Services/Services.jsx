import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
       {
        _id: 1,
        img: fluoride,
        title: 'Fluoride Treatment',
        para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
       },
       {
        _id: 2,
        img: cavity,
        title: 'Cavity Filling',
        para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
       },
       {
        _id: 1,
        img: fluoride,
        title: 'Teeth Whitening',
        para: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
       },
    ]
    return (
        <div className='my-28 px-12'>
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary'>Our Services</h3>
                <h1 className='text-4xl mt-4'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;