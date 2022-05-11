import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Winson Herry',
            location: 'California'
        },
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 px-12'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;