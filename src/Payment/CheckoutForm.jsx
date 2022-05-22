import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { success } from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [tnxId, setTnxId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    console.log(appointment);

    const { price, patient, patientName } = appointment;

    useEffect(() => {
        fetch(`https://afternoon-falls-94690.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/jsonn',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card

        })

        setCardError(error.message || '')
        setSuccess('')

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message)
            success('')
        } else {
            setCardError('')
            setTnxId(paymentIntent.id)
            console.log();
            setSuccess('Congrats your payment is completed')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-blue-500'>
                    <p>{success}</p>
                    <p>Your tnx id: <span className='font-bold text-orange-500'>{tnxId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;