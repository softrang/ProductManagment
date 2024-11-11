import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFrom, addProduct, resetForm } from '../redux/slices/productslices';
import Theader from '../Header/Theader';

import { Link } from 'react-router-dom';

const Add = () => {
  const [showCongras, setShowCongras] = useState(false);
  const [showAdd, setShowAdd] = useState(true);
  

  const dispatch = useDispatch();
  const { from } = useSelector((state) => state.product);

  const handleValue = (e) => {
    dispatch(setFrom({ [e.target.name]: e.target.value }));
  };

 

  const handleAddProduct = () => {
    dispatch(addProduct());
    dispatch(resetForm());
    setShowCongras(true); // Show the message
    setShowAdd(false);
  
  };

  const handleBack = ()=>{

    setShowCongras(false); // Show the message
    setShowAdd(true);
  
  }



  const handleResetForm = () => {
    dispatch(resetForm());
  };




  return (
    <div>
      <Theader />
      
      <div className='w-full h-[90vh] fixed right-0 bottom-0 border border-zinc-300 p-5 flex gap-5 flex-wrap justify-center'>
      {showAdd && (
      
        <div className='w-5/12 add h-max border border-zinc-300 p-4'>
       
          <div className='w-full'>
            <label className='py-2'>Product Title</label>
            <input
              onChange={handleValue}
              type='text'
              name='title'
              value={from.title || ''} // Controlled input
              className='w-full  h-[5vh] rounded-lg outline-0 bg-gray-600 px-3 my-2'
            />
          </div>
          <div className='w-full'>
            <label className='py-2'>Product Description</label>
            <textarea
              onChange={handleValue}
              name='dic'
              value={from.dic || ''} // Controlled textarea
              className='w-full h-[20vh] rounded-lg outline-0 bg-gray-600 px-3 my-2 resize-none'
            />
          </div>
          <div className='w-full'>
            <label className='py-2'>Price</label>
            <input
              onChange={handleValue}
              type='text'
              name='price'
              value={from.price || ''} // Controlled input
              className='w-full h-[5vh] rounded-lg outline-0 bg-gray-600 px-3 my-2'
            />
          </div>
          <div className='w-full h-[5vh]'>
            <select
              onChange={handleValue}
              name='status'
              value={from.status || ''} // Controlled select
              className='w-full h-full bg-gray-800 outline-0 border border-zinc-900'
            >
              <option value='' className='bg-gray-600'>Select Status</option>
              <option value='All Order' className='bg-gray-600'>All Order</option>
              <option value='Pending' className='bg-gray-600'>Pending</option>
              <option value='Review' className='bg-gray-600'>Review</option>
              <option value='Success' className='bg-gray-600'>Success</option>
              <option value='Complete' className='bg-gray-600'>Complete</option>
              <option value='Cancel' className='bg-gray-600'>Cancel</option>
            </select>
          </div>
          <div className='w-full flex gap-5 items-center justify-end mt-3'>
           <Link to="/"> <span className='px-4 py-2 bg-rose-600 cursor-pointer'>Cancel</span> </Link> 
            <span onClick={handleResetForm} className='px-4 py-2 bg-green-600 cursor-pointer'>Reset</span>
            <span onClick={handleAddProduct} className='px-4 py-2 bg-indigo-600 cursor-pointer'>Add</span>
          </div>
        </div>
   )}
        {showCongras && (

        <div className='w-5/12  h-max border border-zinc-300 p-4 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-mono'> Congratulate</h1>
        <p className='text-xl py-5'> Your Product is Successfly added</p>
        <div className='w-full flex gap-10 items-center justify-end'>
      
        <Link to="/"> <span className='px-4 py-2 bg-indigo-600 rounded-lg cursor-pointer'>Back to Home</span> </Link> 
        <p onClick={handleBack} className='px-4 py-2 bg-sky-600 rounded-lg cursor-pointer'> Add Again</p>
        </div>

        </div>
)}


      </div>
    </div>
  );
};

export default Add;
