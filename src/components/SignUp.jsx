import Img from "../assets/IMG-20230509-WA0021-removebg-preview 1.png";
import React, { useState } from 'react';
import Axios  from "axios";
 
const SignUp = () => {
  const url = 'https://test.3scorers.com/api/v1/admin/sign-up/?adminId=1'
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    repeat_password: "",
  });

 
  
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      firstName:  formData.firstName,
      lastName:  formData.lastName,
      email:  formData.email,
      username:  formData.username,
      password: formData.password,
      repeat_password: formData.repeat_password, 
    })
    .then(res=>{
      console.log(res.data)
    })

  }
  function handleInputChange(e){
    const newData = {...formData}
    newData[e.target.id] = e.target.value;
    setFormData(newData)
    console.log(newData)
  }
  
  return (
    <div>
      <section className="w-full overflow-hidden flex">
        <div className="bg-[#158F8F] h-[100vh] w-[50%] text-white flex flex-col justify-center items-center">
          <img className="h-[100px] " src={Img} alt="img" />
          <div className="text-center mt-5">
            <h1 className="font-extrabold text-2xl ">Create Account</h1>
            <p>
              Join the community and have fun <br />
              predicting!
            </p>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="flex justify-center w-[50%] h-[100vh] items-center">
          <div className="mt-44">
            <form onSubmit={(e)=>submit(e)} >
              <div className="mt-2">Firstname</div>
              <input
                value={formData.firstName}
                id="firstName"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px]"
                type="text"
                placeholder="firstname"
              />
               <div className="mt-2">lastname</div>
              <input
                value={formData.lastName}
                id="lastName"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px]"
                type="text"
                placeholder="lastname"
              />

              <div className="mt-2">username</div>
              <input
                value={formData.username}
                id="username"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px]"
                type="text"
                placeholder="username"
              />
              <div className="mt-2">Email Address</div>
              <input
                value={formData.email}
                id="email"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px]"
                type="email"
                placeholder="Email Address"
              />
              <div className="mt-2">Password</div>
              <input
                value={formData.password}
                id="password"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px]"
                type="password"
                placeholder="Password"
              />
              <div className="mt-2">Confirm Password</div>
              <input
                value={formData.repeat_password}
                id="repeat_password"
                onChange={(e)=>handleInputChange(e)}
                className="px-4 border rounded border-black py-2 w-[550px] mb-16"
                type="password"
                placeholder=" Confirm Password"
              />

              <div className=" flex justify-center">
                <button
                  type="submit"
                  className="text-white px-20 py-3 bg-[#158F8F] rounded my-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
