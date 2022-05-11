import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Treatment = () => {
    return (
       <div className='my-28 lg:px-40 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center px-12'>
           <div>
               <img style={{width: '458px', height: '576px'}} className='' src={treatment} alt="" />
           </div>
           <div>
                <h1 className='font-bold text-5xl mb-5'>Exceptional Dental Care, on Your Terms</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-primary mt-10'>Get Started</button>
           </div>
       </div>
    );
};

export default Treatment;