import React from 'react'
import { Link } from 'react-router-dom'

const Lheader = () => {
  return (
    <div className='w-2/12 h-[90vh]  fixed left-0 bottom-0 flex flex-col items-center justify-start'>
       <Link to="order/add" className='my-5'>  <span className=' px-4 py-2 bg-green-600 rounded-lg my-5'>Add Order</span>  </Link>

       <Link to="/" className='w-full '> <p className=' w-full py-2 bg-indigo-800 pl-5 text-lg mb-2'>Dashbord</p></Link>
       <Link to="order/all" className='w-full'>  <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>All Order</p> </Link>
       <Link to="order/pending" className='w-full'>  <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>Pending</p> </Link>
       <Link to="order/review" className='w-full'> <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>Reveiw</p> </Link> 
       <Link to="order/sucsess" className='w-full'>  <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>Suscess</p> </Link>
       <Link to="order/complete" className='w-full'>  <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>Complete</p></Link>
       <Link to="order/cancel" className='w-full'>  <p className=' w-full py-2 bg-violet-800 pl-5 text-lg mb-2'>Cancle</p> </Link>
      
    </div>
  )
}

export default Lheader
