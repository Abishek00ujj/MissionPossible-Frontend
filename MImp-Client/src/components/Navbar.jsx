import React, { useState, useRef } from 'react';
import { User2, CircleX } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const url = import.meta.env.VITE_CONTACT_API;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const placeRef = useRef(null);
  const dateref = useRef(null);
  const people = useRef(null);
  const vacation = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      place: placeRef.current.value,
      date: dateref.current.value,
      people: people.current.value,
      vacation: vacation.current.value,
    };
    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        alert('Message sent successfully!');
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        placeRef.current.value = '';
        dateref.current.value = '';
        people.current.value = '';
        vacation.current.value = '';
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className='w-screen h-[4rem] z-25 text-lg text-white bg-blue-500 shadow-md flex justify-between items-center rounded-b-lg sticky top-0'>
        <div className='flex ml-10 items-center'> 
          <Link to={'/'} className='hover:bg-blue-400 hover:border-b-4 p-3 rounded-md'><p className='font-bold'>Trip Planner</p></Link>
        </div>
        <div className='flex'>
          <ul className='flex gap-8 mr-10'>
          <li className='hover:border-b-4 border-white rounded-md'> <Link to={'/register'}>For Booking</Link></li>
            <li className='hover:border-b-4 border-white rounded-md'> <Link to={'/aboutus'} >About us</Link></li>
              <li className='hover:border-b-4 border-white rounded-md' onClick={() => setVisible(true)}>Contact</li>
          <button className='hover:border-b-4 border-white rounded-md'>
            <Link to={'./admin'}><User2 className='rounded-full' /></Link>
          </button>
          </ul>
        </div>
      </div>
      {visible && (
        <div className='h-screen w-screen fixed top-6 left-0 flex justify-center items-center z-50'>
          <div className='h-[80%] w-[40%] px-[3%] py-[2%] rounded-2xl bg-red flex flex-col bg-white shadow-lg'>
            <div className='px-[3%] flex justify-between items-center mb-2 top-0'>
              <h2 className='text-2xl font-semibold text-[#657cba]'>Contact Us</h2>
              <CircleX
                className='text-red-500 cursor-pointer'
                onClick={() => setVisible(false)}
              />
            </div>
            <form onSubmit={handleSubmit}>
                <p className='text-red-500 mb-4'>*All fields are mandatory</p>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Name *"
                        type="text"
                        name="name"
                        ref={nameRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Phone Number *"
                        name="phone"
                        id="phone"
                        type="tel"
                        ref={phoneRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Email ID *"
                        name="email"
                        id="email"
                        type="email"
                        ref={emailRef}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <input
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        placeholder='Travel Destination *'
                        name='place'
                        id='place'
                        type='text'
                        ref={placeRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        placeholder='Travel Date'
                        type='date'
                        name='date'
                        id='date'
                        ref={dateref}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Number of People *"
                        type="number"
                        name="people"
                        id="people"
                        ref={people}
                        required
                    />
                </div>
                <div className="mb-4">
                    <select
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        name='vacation'
                        id='vacation'
                        ref={vacation}
                        required
                    >
                        <option value=''>Select Vacation Type *</option>
                        <option value='Family'>Family</option>
                        <option value='Friends'>Friends</option>
                        <option value='Solo'>Solo</option>
                        <option value='Honeymoon'>Honeymoon</option>
                        <option value='Corporate'>Corporate</option>
                    </select>
                </div>
                <div className="flex justify-center p-[6%]">
                    <button
                        className="px-5 py-2 bg-neutral-700 text-white rounded-3xl hover:neutral-700 transition duration-300"
                        type="submit">Submit & Enquiry now
                    </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
