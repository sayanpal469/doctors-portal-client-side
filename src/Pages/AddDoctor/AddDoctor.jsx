import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: services, isLoading} = useQuery('services', () => fetch(`https://afternoon-falls-94690.herokuapp.com/service`).then(res => res.json()))

    const imageStorageKey = '604c7f458026853c4f7dbde02b9321f1'
    const onSubmit = async (data) => {
        const image = data.image[0]
        const formdata = new FormData()
        formdata.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formdata
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database
                fetch(`https://afternoon-falls-94690.herokuapp.com/doctor`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        alert('Doctors added successfully')
                        reset()
                    }
                    else{
                        alert('Failed to add doctors')
                    }
                })
            }
            console.log(result);
        })
        //console.log(data)
        
    };

    if(isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-10'>Add a Doctor</h2>
            <div className='text-center'>
            <form className='' onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs mx-auto">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs mx-auto">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs"
        {...register("email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }
        })}
    />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>


<div className="form-control w-full max-w-xs mx-auto">
    <label className="label">
        <span className="label-text">Specialty</span>
    </label>
            <select {...register('specialty')} class="select w-full max-w-xs">
                {
                    services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                }
        </select>
    
</div>

<div className="form-control w-full max-w-xs mx-auto">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'Image is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<input className='btn w-full max-w-xs text-white' type="submit" value="Add " />
</form>
            </div>
        </div>
    );
};

export default AddDoctor;