import React from "react";
import { useState } from "react";
import imageSignUp from "../assets/image-2.jpg";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const navigate = useNavigate()
  const [showPassword,setShowPasword] = useState(false)

  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    password:""
  })

  const {email,password,fullName} = formData;

  const handleOnChange = (e)=>{
      setFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }

  const handlePasswordhide =()=>{
    setShowPasword((prevState)=> !prevState)
  }



  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up </h1>
      <div className="flex flex-wrap justify-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={imageSignUp} alt="" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form >
            <div className="mb-7">
              <input value={fullName} name="name" className="w-full py-3 px-3 rounded-md border border-pink-400 outline-none focus:border-pink-600 bg-white transition ease-out" type="text"  placeholder="Full Name" id="fullName" onChange={handleOnChange} />
            </div>
            <div className="mb-7">
              <input value={email} name="email" className="w-full py-3 px-3 rounded-md border border-pink-400 outline-none focus:border-pink-600 bg-white transition ease-out" type="email"  placeholder="Email address" id="email" onChange={handleOnChange} />
            </div>
            <div className="mb-5 relative">
              <input className="w-full py-3 px-3 rounded-md focus:border-pink-600 border border-pink-400 outline-none bg-white transition ease-out" type={showPassword ? "text":"password"} name="password" placeholder="Password" id="" />
              {showPassword ? <FaEye className="absolute top-3 right-3 text-xl cursor-pointer" onClick={handlePasswordhide}/> : <FaEyeSlash className="absolute top-3 right-3 text-xl cursor-pointer" onClick={handlePasswordhide}/>}
            </div>
            <div>
              <p className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <span className="font-normal cursor-pointer">have an account? <span onClick={()=>navigate('/sign-in')} className="text-red-600 hover:text-red-700 transition duration-200 ease-linear font-semibold">Login</span> </span>
                <span className="text-blue-500 font-semibold">
                  <Link to="/forgote-password" className="hover:text-blue-700 transition duration-200">Forgot password?</Link>
                </span>
              </p>
            </div>
            <div className="mt-5">
              <button type="submit" className="w-full rounded-[4px] text-white py-3 px-7 font-medium  bg-blue-600 shadow-md hover:bg-blue-700 transition duration-200 ease-in-out">SIGN UP</button>
                <div className="before:border-t before:border-gray-300 flex before:flex-1 items-center after:border-t after:border-gray-300 after:flex-1">
                  <p className="text-center font-semibold mx-4 my-5">OR</p>
                </div>
                {/* OAuth FROM FIREBASE AUTHENTICATION */}
              <OAuth/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp
