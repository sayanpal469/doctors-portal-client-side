import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading/Loading';
import { FaUserAlt } from 'react-icons/fa';


const Nav = () => {
  const [user, loading] = useAuthState(auth);

  if(loading) {
    return <Loading/>
  }

  const logout = () => {
    signOut(auth);
  };
// <li><Link onClick={logout} to='/login'>Log out</Link></li>

  const menuItems = <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {user ? 
              <div class="dropdown">
              <label tabindex="0" class=""><FaUserAlt className='text-2xl mt-3 ml-3'></FaUserAlt></label>
              <ul tabindex="0" class="dropdown-content  menu  pr-28 shadow bg-base-100 rounded-box w-80">
              <li><Link onClick={logout} to='/login'>Log out</Link></li>            
              </ul>
            </div>
              : 
              <li><Link to='/login'>Login</Link></li>
              }
  </>
    return (
        <div className='lg:px-12'>
            <div className="navbar container bg-base-100">
  <div className="navbar">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
      </ul>
    </div>
    <Link to='#' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
            {menuItems}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Nav;