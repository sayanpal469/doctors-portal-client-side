import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({treatment, date, setTreatment}) => {
    const [user] = useAuthState(auth)
    const {_id, slots, name, price} = treatment
    //console.log(treatment);
    const formattedDate = format(date, 'PP');

    const handelBook = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(_id, name, date, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            price,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }

        fetch(`https://afternoon-falls-94690.herokuapp.com/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                alert(`Appointment is set, ${formattedDate} at ${slot}`)
            } else{
                alert(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            console.log(data);
            setTreatment(null)
        })
    }
    return (
       <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <label for="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">{name}</h3>
                    <form onSubmit={handelBook} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                    <input type="text" disabled value={format (date, 'PP')} className="input input-bordered w-full max-w-xs" />
                    <select name='slot' className="select select-bordered w-full max-w-xs">
                        {
                            slots.map(slot => <option value={slot}>{slot}</option>)
                        } 
                    </select>
                    <input type="text" name='name' disabled value={user?.displayName} placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
                </div>
       </div>
    );
};

export default BookingModal;