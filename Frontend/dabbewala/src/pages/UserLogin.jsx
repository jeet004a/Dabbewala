import React,{useState,useEffect,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast'

const UserLogin = () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const {user,setUser} = useContext(UserDataContext);
    const navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=async(e)=>{
        e.preventDefault()
        const newUser={
          email: email,
          password: password
        }

        const response=await axios.post(`${apiUrl}/users/login`,newUser)

        if(response.status==201){
          const data=response.data
          localStorage.setItem('token',data.token)
          setUser(data.user)
          navigate('/home')
        }else{
            toast.error("email or password is wrong")
        }

        setEmail('')
        setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <Toaster />
        <div>
        <img className='w-14 mb-10 ' src="https://play-lh.googleusercontent.com/oa3KmJ5TGL9DwhXrk7JHvHrtf-Szt_oc4qFisnc7D1mgOayhCEUWnr5Fli7G4wK54KI" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>Enter Your email to login</h3>
        <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-2 py-4 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} className='bg-[#eeeeee] mb-2 rounded px-2 py-4 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />
        <button className='bg-[#111] text-white mb-3 rounded px-2 py-4  w-full text-lg placeholder:text-base'>Login</button>
        
      </form>
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
        </div>
        <div>
        <Link to='/captain-login' className='bg-[#10b461] flex justify-center items-center text-white mb-2 rounded px-2 py-4  w-full text-lg placeholder:text-base'>Sign In as Provider</Link>
        </div>
    </div>
  )
}

export default UserLogin