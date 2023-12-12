import * as React from 'react';
import { Link } from 'react-router-dom';
import { blogApi } from '../../RTK_Query';

function Register(): JSX.Element {

  const [userNameValue, setUserNameValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')

  const handleRegistration = async () => {
    try {
      if (userNameValue.length > 0 && passwordValue.length > 0) {
      

        const { data, error } = await blogApi.useToRegisterQuery({
          username: userNameValue,
          password: passwordValue,
        });

        if (error) {
          alert('Error on server');
        }

        if (data) {
          console.log(data);
        }
      } else {
        alert('Your password or username is missing');
      }
    } finally {
    }
  };



  return (
    <div className='flex items-center justify-center w-full h-[80vh]'>
      <div className='w-[420px] rounded-lg bg-slate-400 p-5'>
        <h3 className='text-[22px] mb-[16px] leading-none'>For created your account enter your username and password:</h3>

        <input onChange={(e) => setUserNameValue(e.target.value)} className='w-full text-black mb-[16px] rounded-md pl-[8px] h-[36px]' type="text" placeholder='Your username' />

        <input onChange={(e) => setPasswordValue(e.target.value)} className='w-full text-black mb-[20px] rounded-md pl-[8px] h-[36px]' type="password" placeholder='Your password' />

        <div className="flex items-center justify-between px-2 text-[18px] font-semibold">

          <button onClick={handleRegistration} className='tr hover:text-[#243B55]'>Confirm</button>

          <Link to="/login" className='tr hover:text-[#243B55]'>Log In</Link>
        </div>


      </div>
    </div>
  );
}

export default Register;
