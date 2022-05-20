import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    // if(adminLoading) {
    //     return <Loading/>
    // }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/*<!-- Page content here -->*/}
                <h2 className='text-3xl'>Welcome to your dashboard</h2>
                <Outlet/>                
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Show Dashboard</label>
            </div> 
            <div className="drawer-side shadow-2xl">
                <label for="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-58 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here -->*/}
                <li><Link to='/dashboard'>My Appointment</Link></li>
                <li><Link to='/dashboard/myReview'>My Review</Link></li>
                <li><Link to='/dashboard/myHistory'>My History</Link></li>
                {admin && <>
                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                    <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                </>}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;