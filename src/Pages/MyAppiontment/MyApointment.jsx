import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyApointment = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAppointments(data)
        })
    },[])
    return (
        <div>
            <h1>My Appintments: {appointments.length}</h1>
        </div>
    );
};

export default MyApointment;