import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from'axios'
import { UserDataContext } from '../context/UserContext'
import toast,{ Toaster } from 'react-hot-toast'
const UserSignUp = () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [userData, setUserData] = useState({});

    const navigate=useNavigate()

    const {user, setUser}=useContext(UserDataContext)
  // console.log(user)
  const submitHandler=async (e)=>{
    e.preventDefault()
    // setUserData()
    const newUser={
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    
    const response=await axios.post(`${apiUrl}/users/register`,newUser)


    if(response.status==201){
      const data=response.data
      localStorage.setItem('token',data.token)
      setUser(data.user)
      navigate('/home')
    }else{
        toast.error("Email is already register")
        setTimeout(()=>{
            toast.error("Please try another email")
        },3000)
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    // console.log(userData)

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <Toaster />
        <div>
        <img className='w-14 mb-10' src="https://play-lh.googleusercontent.com/oa3KmJ5TGL9DwhXrk7JHvHrtf-Szt_oc4qFisnc7D1mgOayhCEUWnr5Fli7G4wK54KI" alt="" />
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      >

        <h3 className='text-base font-medium mb-2 mr-2'>Enter Your Name</h3>
        <div className='flex gap-4 mb-5'>
        <input
         value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}
        className='bg-[#eeeeee]  w-1/2 rounded px-2 py-4 border  text-base placeholder:text-sm' type="text" placeholder='First Name' />
        <input 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        className='bg-[#eeeeee]  w-1/2 rounded px-2 py-4 border  text-base placeholder:text-sm' type="text" placeholder='Last Name' />
        </div>
        <h3 className='text-base font-medium mb-2'>Enter Your email to login</h3>
        <input 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-2 py-4 border w-full text-base placeholder:text-sm' type="email" placeholder='email@example.com' />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input  
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] mb-5 rounded px-2 py-4 border w-full text-base placeholder:text-sm' type="password" placeholder='password' />
        <button className='bg-[#111] text-white mb-3 rounded px-2 py-4  w-full text-base placeholder:text-sm'>Create account</button>
        
      </form>
      <p className='text-center'>Already Have an Account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </div>
         <div>
        {/* <Link to='/captain-login' className='bg-[#10b461] flex justify-center items-center text-white mb-2 rounded px-2 py-4  w-full text-lg placeholder:text-base'>Sign In as Captain</Link>  */}
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span> </p>
        </div>
    </div>
  )
}

export default UserSignUp