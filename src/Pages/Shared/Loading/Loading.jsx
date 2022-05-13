import React from 'react';
import './Loading.css'

const Loading = () => {

    return (
        <div className='flex justify-center items-center h-screen'>
           <div id="main">
                <div class="box s">
                    <div class="bar" id="a1"></div>
                    <div class="bar" id="a2"></div>
                </div>  
            </div>
        </div>
    );
};

export default Loading;