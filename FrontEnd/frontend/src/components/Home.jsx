import React from 'react'
import {Star} from 'lucide-react'
import {Cards} from './Cards'
import {ArrowRight} from 'lucide-react'
export const Home = () => {
  return (
    <>
       <div className='w-screen h-screen text-white bg-[#f8f8f8]'>
          <div className='w-screen h-[50%] bg-[#D9D9D9] backdrop-blur-lg flex flex-col items-center font-bold mt-3'>
           <div className='text-3xl mt-2'> Tamil Nadu's Best</div>
             <div className='text-3xl'>Travel Itinerary Planner</div>
             <div className='flex space-x-1'>
                <div className='flex space-x-1'><Star color='orange' /><Star color='orange'/><Star color='orange'/><Star color='orange'/><Star color='orange'/></div>
                <div className='font-bold'>4.5 + Ratings</div>
             </div>
          </div>
          <Cards/>
          <div className='w-screen flex justify-center'>
          <div className=' bg-slate-400 flex w-[150px] flex justify-center rounded-lg h-8'>
          <button className='text-black'>View More</button><ArrowRight className='text-black'/>
          </div>
          </div>
       </div>
    </>
  )
}

export default Home