import React from 'react';

const DoctorsRow = ({doctor, index}) => {
    const {name, specialty} = doctor;
    return (
        <tr>
        <th>{ index +1 }</th>
        <td>Avatar</td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td><button className='btn btn-sm btn-error'>Delete</button></td>
    </tr>
    );
};

export default DoctorsRow;