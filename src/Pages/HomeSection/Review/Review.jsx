import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.text}</p>
                <div class="mt-5 flex items-center">
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt='#'/>
                    </div>
                    </div>
                    <div className='ml-10'>
                        <h1 className='font-bold'>{review.name}</h1>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
</div>
    );
};

export default Review;