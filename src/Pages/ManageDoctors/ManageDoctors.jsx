import React from 'react';
import { useQuery } from 'react-query';
import DoctorsRow from '../DoctorsRow/DoctorsRow';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('https://afternoon-falls-94690.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div className='px-12'>
            <h1 className='text-center my-10 text-2xl font-bold'>Manage Doctors-{doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;