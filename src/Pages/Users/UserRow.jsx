import React from 'react';

const UserRow = ({user, refetch}) => {
    const {email, role} = user

    const makeAdmin = () => {
        fetch(`https://afternoon-falls-94690.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403) {
                alert('Failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0) {
                refetch()
                alert('SuccesFully added')
            }
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button className='btn btn-xs btn-error text-white'>Delete User</button></td>
        </tr> 
    );
};

export default UserRow;