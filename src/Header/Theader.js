import React  from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Logo from '../image/logo.png'

const Theader = ({searchQuery, handleSearch}) => {


  return (
<div className='w-90 m-auto sm:flex-wrap md:flex h-max py-5 items-center justify-center sticky top-0 z-50 bg-gray-900 shadow-md shadow-gray-600'>
  <div className='xsm:w-full mb-2 md:w-3/12'>
  <img className='w-10/12 h-auto  m-auto' src={Logo} alt='logo'/>

   
  </div>

  <div className="xsm:w-full mb-2 md:w-6/12 llg:w-7/12 mx-auto">
    <input 
      type="search" 
      placeholder="Search...by title" 
      value={searchQuery}
      onChange={handleSearch}
      className="w-full h-10 rounded-lg outline-none bg-gray-700 px-4 text-gray-100 placeholder-gray-400 uppercase border border-gray-700 shadow-inner shadow-gray-600 transform hover:translate-y-[-2px] transition duration-200"
    />
  </div>

  <div className='xsm:w-full md:w-2/12 flex items-center justify-end gap-5'>
    <div className='w-10 h-10 flex items-center justify-center text-2xl relative transform hover:scale-110 transition-transform duration-300 ease-in-out bg-gray-700 rounded-full shadow-md hover:shadow-lg'>
      <p className='text-base text-rose-700 absolute top-1 right-1'>1</p>
      <IoIosNotifications className='text-gray-100' />
    </div>

    <div className='w-10 h-10 flex items-center justify-center text-2xl relative transform hover:scale-110 transition-transform duration-300 ease-in-out bg-gray-700 rounded-full shadow-md hover:shadow-lg'>
      <p className='text-base text-rose-700 absolute top-1 right-1'>1</p>
      <MdOutlineEmail className='text-gray-100' />
    </div>
  </div>
</div>


  )
}

export default Theader
