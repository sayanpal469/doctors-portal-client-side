import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/*<!-- Page content here -->*/}
                <h2 className='text-3xl'>Welcome to your dashboard</h2>
                <Outlet/>                
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Show Dashboard</label>
            </div> 
            <div class="drawer-side shadow-2xl">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here -->*/}
                <li><Link to='/dashboard'>My Appointment</Link></li>
                <li><Link to='/dashboard/myReview'>My Review</Link></li>
                <li><Link to='/dashboard/myHistory'>My History</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;