import * as React from 'react';
import { Link } from 'react-router-dom';

function Register(): JSX.Element {
  return (
    <div className='flex items-center justify-center w-full h-[80vh]'>
        <div className='w-[420px] rounded-lg bg-slate-400 p-5'>
          <h3 className='text-[22px] mb-[16px] leading-none'>For created your account enter your username and password:</h3>

          <input className='w-full text-black mb-[16px] rounded-md pl-[8px] h-[36px]' type="text" placeholder='Your username' />
          <input className='w-full text-black mb-[20px] rounded-md pl-[8px] h-[36px]' type="password" placeholder='Your password' />

          <div className="flex items-center justify-between px-2 text-[18px] font-semibold">

          <button className='tr hover:text-[#243B55]'>Confirm</button>

          <Link to="/login" className='tr hover:text-[#243B55]'>Log In</Link>
          </div>
         

        </div>
    </div>
  );
}

export default Register;
