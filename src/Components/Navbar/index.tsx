import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar(): JSX.Element {

  const isAuth: boolean = false;


  return (
    <nav className='bg-slate-400 fixed top-0 left-0 w-full'>
      <div className="container py-4 mx-auto flex items-center justify-between">

        <Link to='/' className='text-2xl'>LOGO</Link>

        {
        isAuth &&
        <ul className='flex gap-8 items-center'>


          <li className='hover:text-slate-600 tr font-semibold'>
            <NavLink 
            className={({isActive})=>isActive ? 'text-slate-600' : ''} 
            to='/'>
              Home Page</NavLink>
              </li>

          <li className='hover:text-slate-600 tr font-semibold'>
            <NavLink
            className={({isActive})=>isActive ? 'text-slate-600' : ''} 
            to='/posts'>My Posts</NavLink></li>

          <li className='hover:text-slate-600 tr font-semibold'>
            <NavLink 
            to='/add-post'
            className={({isActive})=>isActive ? 'text-slate-600' : ''} 
            >Add post</NavLink></li>

        </ul>
        }

        {
          isAuth ? 
          <button className='tr bg-gray-600 py-1 px-5 rounded-md hover:bg-slate-700'>Log Out</button>
          :
          <Link to='login' className='tr bg-gray-600 py-1 px-5 rounded-md hover:bg-slate-700'>Log In</Link>
        }
        

      </div>
    </nav>
  );
}

export default Navbar;
