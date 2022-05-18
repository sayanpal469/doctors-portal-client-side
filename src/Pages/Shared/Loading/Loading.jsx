import React from 'react';
import './Loading.css'

const Loading = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
           <div id="main">
                <div className="box s">
                    <div className="bar" id="a1"></div>
                    <div className="bar" id="a2"></div>
                </div>  
            </div>
        </div>
    );
};

export default Loading;