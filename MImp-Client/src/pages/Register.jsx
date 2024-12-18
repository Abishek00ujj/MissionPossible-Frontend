import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../assets/img/google.png';
import { useState, useRef } from 'react';
import { RegisUser } from '../services/AuthServices';
import { CircleX } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spin } from 'antd';

const Register = () => {
  const [statusMessage, setstatusMess] = useState('');
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const nameref = useRef(null);
  const emailref = useRef(null);
  const phoneref = useRef(null);
  const passwordref = useRef(null);

  const handleReg = async (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const data = {
      name: nameref.current.value,
      email: emailref.current.value,
      phone: phoneref.current.value,
      password: passwordref.current.value
    };
    if (!emailRegex.test(emailref.current.value)) {
      toast.error("Invalid Credentials");
      setstatusMess("Enter Email in correct format");
      return;
    }
    if (!phoneRegex.test(phoneref.current.value)) {
      toast.error("Invalid Credentials");
      setstatusMess("Phone Number must contain Numbers with limit 10");
      return;
    }
    // if (!passwordRegex.test(phoneref.current.value)) {
    //   toast.error("Enter Valid Pasword");
    //   setstatusMess("Password must contain at least one digit, one lowercase, and one uppercase letter, and must be between 6 and 20 characters");
    //   return;
    // }
    // if (passwordref.current.value !== repasswordref.current.value) {
    //   toast.error("Invalid Credentials");
    //   setstatusMess("Passwords do not match");
    //   return;
    // }

    try {
      const res = await RegisUser(data);
      if (res.status === 200 || res.status === 201) {
        console.log(res);
        setstatusMess('User Added Successfully');
        toast.success("User Registered Successfully");

        // Navigate after showing the toast
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      toast.error('Credentials Not Valid Try Again', {
        className: 'text-xl text-black'
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-full w-screen flex justify-center absolute items-center z-10 bg-slate-300">
        <div className="h-100 w-[370px] flex flex-col justify-center items-center rounded-[30px] shadow-lg bg-slate-100 m-7">
          <div className="w-full flex justify-end align-top p-3">
            <CircleX onClick={() => navigate('/')} />
          </div>

          {Loading ? <Spin /> : (
            <form onSubmit={handleReg} className="flex flex-col justify-center w-[80%] h-[80%] rounded-2xl items-center gap-4">
              <h1 className="text-blue-600 font-serif text-2xl font-medium">Register Form</h1>
              <input type="text" ref={nameref} className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner bg-[#f5f5f5]" placeholder="Name" required />
              <input type="email" ref={emailref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner bg-[#f5f5f5]" placeholder="Email" required />
              <input type="phone" ref={phoneref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner bg-[#f5f5f5]" placeholder="Phone" required />
              <input type="password" ref={passwordref} className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner bg-[#f5f5f5]" placeholder="Password" required />
              {/* <input type="password" ref={repasswordref} className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Re-enter Password" required /> */}
              <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600">Register</button>
              <p>Already have an account? <Link to='/login' className='text-blue-500 border-blue-500 text-lg'> Login Here</Link></p>
              <button type="button" className="h-12 bg-white rounded-full w-[90%] p-2 font-serif flex justify-center gap-4 items-center hover:bg-white/50">
                <img src={Google} alt="Google" /> Continue with Google
              </button>
              <div className="">
                <h1 className="text-[1rem] text-red-900 text-center">{statusMessage}</h1>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
