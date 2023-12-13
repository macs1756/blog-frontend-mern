import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'
import { toast } from 'react-toastify'
import { checkIsAuth, loginUser } from '../../Redux/authSlice'

function Login(): JSX.Element {

  const [userNameValue, setUserNameValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [isCreateUser, setIsCreateUser] = React.useState(false)

  const dispatch = useAppDispatch()

  const { status } = useAppSelector( (state) => state.auth )

  const isAuth: boolean = useAppSelector(checkIsAuth)

  const navigate = useNavigate()
  
  React.useEffect(()=>{
    if(status && isCreateUser){
      toast(status)
      setIsCreateUser(false)

      if(isAuth) navigate('/')

    }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [status])


const handleSubmit = () => {

  try {  

    if(userNameValue.length > 0 && passwordValue.length > 0){

    dispatch(loginUser(
      {
        username:userNameValue, 
        password:passwordValue
      }))

    setIsCreateUser(true)

    }else{
      toast('Your password or username is missing')
    }

  } catch (error) {
    console.log(error)
    
  }
}


  return (
    <div className='flex items-center justify-center w-full h-[80vh]'>
        <div className='w-[420px] rounded-lg bg-slate-400 p-5'>
          <h3 className='text-[22px] mb-[16px] leading-none'>Enter your username and password:</h3>

          <input value={userNameValue} onChange={(e) => setUserNameValue(e.target.value)} className='w-full text-black mb-[16px] rounded-md pl-[8px] h-[36px]' type="text" placeholder='Your username' />
          <input value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className='w-full text-black mb-[20px] rounded-md pl-[8px] h-[36px]' type="password" placeholder='Your password' />

          <div className="flex items-center justify-between px-2 text-[18px] font-semibold">

          <button onClick={handleSubmit} className='tr hover:text-[#243B55]'>Log In</button>

          <Link to="/register" className='tr hover:text-[#243B55]'>To register</Link>
          </div>
         

        </div>
    </div>
  );
}

export default Login;