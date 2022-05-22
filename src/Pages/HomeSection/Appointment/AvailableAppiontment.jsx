import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppiontment = ({date, setDate}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PP')
    useEffect( () => {
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setServices(data)
            console.log(data);
        })
    },[])
    return (
        <div className='px-12'>
            <h4 className='text-secondary text-center text-xl font-bold'>Available Appointments on {format (date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                }
        </div>
    );
};

export default AvailableAppiontment;