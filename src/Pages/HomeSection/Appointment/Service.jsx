import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service
    //console.log(service);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body pt-16 text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avalible</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-center">
                <label onClick={() => setTreatment(service)} for="book-modal" disabled={slots.length === 0} className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;