import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading) {
        return <Loading/>
    }
    return (
        <div>
            All Users is {users.length}
            <div className='px-12'>
            <table class="table w-full">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Users</th>
                    <th>Admin</th>
                    <th>Remove</th>
                </tr>
                </thead>
                  <tbody>
                  {
                      users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                  }
                  </tbody>
                </table> 
            </div> 
            
        </div>
    );
};

export default Users;