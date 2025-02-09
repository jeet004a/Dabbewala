import React,{useRef,useState,useEffect,useContext} from 'react'
import UserDetails from '../components/UserDetails'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { UserDataContext } from '../context/UserContext';
import LiveTracking from '../components/LiveTracking';
const Home = () => {
  const [waitingForDriver, setWaitingForDriver] = useState(true)
  const [name, setName] = useState('');
  const waitingForDriverRef=useRef(null)
  const {user}=useContext(UserDataContext);

  useEffect(()=>{
    console.log(user)
    const fullname=user.fullname.firstname
    console.log(fullname)
    setName(fullname)
  })
  
  // useGSAP(function(){
  //   if(waitingForDriver){
  //     gsap.to(waitingForDriverRef.current,{
  //       transform: 'translateY(100%)'
  //     })
  //   }else{
  //     gsap.to(waitingForDriverRef.current,{
  //       transform: 'translateY(100%)'
  //     })
  //   }
  // },[waitingForDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://play-lh.googleusercontent.com/oa3KmJ5TGL9DwhXrk7JHvHrtf-Szt_oc4qFisnc7D1mgOayhCEUWnr5Fli7G4wK54KI" alt="" />
      {/* hello */}
      <div className='h-5/6'>
        {/* <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
        <LiveTracking/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
      <div ref={waitingForDriverRef}   className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12 '>
        <UserDetails name={name} />
      </div>
          
      </div>

      

      

      

      
    </div>
  )
}

export default Home