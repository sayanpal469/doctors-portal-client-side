import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body pt-16 text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avalible</p>
                <div class="card-actions justify-center">
                <button disabled={slots.length === 0} class="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;