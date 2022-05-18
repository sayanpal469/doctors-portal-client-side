import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyApointment = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
          return res.json()
        })
        .then(data => {
            //console.log(data);
            setAppointments(data)
            //console.log(appointments);
        })
    },[user])
    return (
        <div >
            <h1>My Appintments: {appointments.length}</h1>
            <div className='px-12'>
            {
                appointments.map(appointment => <div class="overflow-x-auto">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th>Treatment</th>
                      <th>Patient</th>
                      <th>Time</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                        <th>{appointment.treatment}</th>
                      <td>{appointment.patientName}</td>
                      <td>{appointment.slot}</td>
                      <td>{appointment.date}</td>
                    </tr> 
                  </tbody>
                </table>
              </div>)
            }
            </div>
        </div>
    );
};

export default MyApointment;