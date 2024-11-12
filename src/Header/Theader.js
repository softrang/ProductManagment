import React  from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Theader = ({searchQuery, handleSearch}) => {


  return (
    <div className='w-90 m-auto h-max py-5 flex items-center justify-center sticky top-0 z-50  bg-gray-900 shadow-md shadow-gray-600'>
  <div className='w-3/12'>
    <h1 className='text-4xl font-mono text-center text-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg'>Softrang</h1>
  </div>

  <div className="w-7/12 mx-auto">
    <input 
      type="search" 
      placeholder="Search...by title" 
      value={searchQuery}
      onChange={handleSearch}
      className="w-full h-[5vh] rounded-lg outline-none bg-gray-700 px-4 text-gray-100 placeholder-gray-400 uppercase border border-gray-700 shadow-inner shadow-gray-600 transform hover:translate-y-[-2px] transition duration-200"
    />
  </div>

  <div className='w-2/12 flex items-center justify-end gap-5'>
    <div className='w-[4vw] h-[4vw] flex items-center justify-center text-2xl relative transform hover:scale-110 transition-transform duration-300 ease-in-out bg-gray-700 p-0 rounded-full shadow-md hover:shadow-lg'>
      <p className='text-base text-rose-700 absolute top-1 right-1'>1</p>
      <IoIosNotifications className='text-gray-100' />
    </div>

    <div className='w-[4vw] h-[4vw] flex items-center justify-center text-2xl relative transform hover:scale-110 transition-transform duration-300 ease-in-out bg-gray-700 p-0 rounded-full shadow-md hover:shadow-lg'>
      <p className='text-base text-rose-700 absolute top-1 right-1'>1</p>
      <MdOutlineEmail className='text-gray-100' />
    </div>
  </div>
</div>

  )
}

export default Theader
