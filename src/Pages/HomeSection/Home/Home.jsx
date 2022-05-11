import React from 'react';
import Banner from '../Banner/Banner'
import Info from '../Info/Info';
import MakeAppointMent from '../MakeAppointment/MakeAppointMent';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppointMent/>
        </div>
    );
};

export default Home;