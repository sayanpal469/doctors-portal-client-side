import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { data } from 'autoprefixer';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2BSOSAYOxqddWpvHOE3UQ9LQJVDDdCTg8TG5CWZRU2Ccm33dx7rAHOTW445yAg5vuC8Lwv31qFO4exW2kjJvyp00XhlwKfCk');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log({appointment});

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=''>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment?.patientName}</p>
                    <h2 class="card-title">Please Pay for {appointment?.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment?.date}</span> at {appointment?.slot}</p>
                    <p>Please pay: ${appointment?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;