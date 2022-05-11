import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppiontment = ({date, setDate}) => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data)
        })
    },[])
    return (
        <div className='px-12'>
            <h4 className='text-secondary text-center text-xl font-bold'>Available Appointments on {format (date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppiontment;