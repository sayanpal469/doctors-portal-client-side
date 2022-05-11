import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css'
const Banner = () => {
  return (
    <div className="hero min-h-screen banner mb-40 px-12">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-5">
    <img  style={{width: '600px', height: '355px'}} src={chair} className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;