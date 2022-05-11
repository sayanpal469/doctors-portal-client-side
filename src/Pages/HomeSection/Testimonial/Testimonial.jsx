import React from 'react';
import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='px-12 my-20 flex justify-between'>
            <div>
                <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                <h1 className='text-5xl mt-3'>What Our Patients Says</h1>
            </div>
            <div>
                <img className='lg:w-48 w-24' src={quote} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;