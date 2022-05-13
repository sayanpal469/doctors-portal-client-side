import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {_id, slots, name} = treatment

    const handelBook = (e) => {
        e.preventDefault()

        const slot = e.target.slot.value

        console.log(_id, name, date, slot);
        setTreatment(null)
    }
    return (
       <div>
            <input type="checkbox" id="book-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box text-center">
                    <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-xl text-secondary">{name}</h3>
                    <form onSubmit={handelBook} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                    <input type="text" disabled value={format (date, 'PP')} class="input input-bordered w-full max-w-xs" />
                    <select name='slot' class="select select-bordered w-full max-w-xs">
                        {
                            slots.map(slot => <option value={slot}>{slot}</option>)
                        } 
                    </select>
                    <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" class="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
                </div>
       </div>
    );
};

export default BookingModal;