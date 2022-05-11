import React from 'react';
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointMent from '../MakeAppointment/MakeAppointMent';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppointMent/>
            <Testimonial/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;