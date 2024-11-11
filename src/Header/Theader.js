import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Theader = () => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-center fixed top-0'>
        <div className='w-3/12'>
        <h1 className='text-4xl font-mono text-center'>Softrang</h1>

        </div>
        <div className="w-7/12 mx-auto">
  <input 
    type="search" 
    placeholder="Search..." 
    className="w-full h-[5vh] rounded-lg outline-none bg-gray-100 px-4 text-gray-800 placeholder-gray-500 uppercase border border-gray-300 shadow-sm   transition duration-200"
  />
</div>

        <div className='w-2/12 flex items-center justify-end'>
        <div className='w-[3vw] h-[5vw] flex items-center justify-end text-2xl relative'>
            <p className='text-base text-rose-700 absolute top-4'>1</p>
        <IoIosNotifications />
        </div>

        <div className='w-[3vw] h-[5vw] flex items-center justify-end text-2xl relative '>
        <p className='text-base text-rose-700 absolute top-4'>1</p>
        <MdOutlineEmail />
        </div>

        </div>
      
    </div>
  )
}

export default Theader
