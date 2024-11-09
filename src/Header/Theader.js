import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Theader = () => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-center fixed top-0'>
        <div className='w-3/12'>
        <h1 className='text-4xl font-mono text-center'>Softrang</h1>

        </div>
        <div className='w-6/12'>
        <input type='search' className='w-full h-[5vh] rounded-xl outline-0 bg-zinc-900 px-2 uppercase border-2 border-zinc-300'/>

        </div>

        <div className='w-3/12 flex items-center justify-end'>
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
