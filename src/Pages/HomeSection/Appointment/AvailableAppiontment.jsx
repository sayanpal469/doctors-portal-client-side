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
        <div>
            <h4 className='text-secondary text-center text-xl font-bold'>Available Appointments on {format (date, 'PP')}</h4>
            <div>
                {
                    services.map(service => <Service></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppiontment;