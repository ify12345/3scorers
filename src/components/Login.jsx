import React from 'react'
import Img from "../assets/IMG-20230509-WA0021-removebg-preview 1.png"

const Login = () => {
  return (
    <div className="bg-[#158F8F] w-full h-[100vh]">
       <div className="flex justify-center ">
        <img  className="h-[70px] my-8" src={Img} alt="img" />
       </div>
       <div className='bg-white w-[700px] h-[600px] border-white border-2 rounded-3xl  mx-auto '>
           <form action="" className='py-[70px] px-8'>
            <div className='mt-3'>Email Address</div>
            <input className='py-3 px-4 w-[600px] border-black border rounded-xl ' type="email" placeholder="Email Address"/>
            <div className='mt-3'>Password</div>
            <input className='py-3 px-4 w-[600px] border-black border rounded-xl ' type="password" placeholder='Password'/>
            <button className='flex mx-auto mt-20 bg-[#158F8F] px-20 py-2 text-white rounded'>Log In</button>
           </form>
       </div>
    </div>
  )
}

export default Login
