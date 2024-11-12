import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFrom, addProduct, resetForm } from '../redux/slices/productslices';
import Theader from '../Header/Theader';

import { Link } from 'react-router-dom';

const Add = () => {
  const [showCongras, setShowCongras] = useState(false);
  const [showAdd, setShowAdd] = useState(true);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { from } = useSelector((state) => state.product);

  const handleValue = (e) => {
    const { name, value } = e.target;

    dispatch(setFrom({ [name]: value }));


// Validation logic
let newErrors = { ...errors };
if (name === 'title' && !value) newErrors.title = 'Product Title is required.';
else delete newErrors.title;

if (name === 'dic' && !value) newErrors.dic = 'Product Description is required.';
else delete newErrors.dic;

if (name === 'price') {
  if (!value) newErrors.price = 'Price is required.';
  else if (isNaN(value)) newErrors.price = 'Price must be a number.';
  else delete newErrors.price;
}


setErrors(newErrors);




  };

 

  const handleAddProduct = () => {
    if (Object.keys(errors).length === 0 && from.title && from.dic && from.price) {
      dispatch(addProduct());
      dispatch(resetForm());
      setShowCongras(true); // Show the message
      setShowAdd(false);
    } else {
      alert('Please Fill up the all field before submitting.');
    }

  
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
      
      <div className='w-full h-[90vh] fixed right-0 bottom-0  p-5 flex gap-5 flex-wrap justify-center bg-gray-900'>
  {showAdd && (
    <div className='w-5/12  h-max  p-4 shadow-lg shadow-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg'>
      <div className='w-full'>
        <label className='py-2 text-gray-300'>Product Title</label>
        <input
          onChange={handleValue}
          type='text'
          name='title'
          value={from.title || ''}
          className='w-full h-[5vh] rounded-lg outline-none bg-gray-600 px-3 my-2 text-gray-100 shadow-inner'
        />
         {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className='w-full'>
        <label className='py-2 text-gray-300'>Product Description</label>
        <textarea
          onChange={handleValue}
          name='dic'
          value={from.dic || ''}
          className='w-full h-[20vh] rounded-lg outline-none bg-gray-600 px-3 my-2 resize-none text-gray-100 shadow-inner'
        />
         {errors.dic && <p className="text-red-500 text-sm">{errors.dic}</p>}
      </div>
      <div className='w-full'>
        <label className='py-2 text-gray-300'>Price</label>
        <input
          onChange={handleValue}
          type='text'
          name='price'
          value={from.price || ''}
         
          className='w-full h-[5vh] rounded-lg outline-none bg-gray-600 px-3 my-2 text-gray-100 shadow-inner'
        />
         {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>
      <div className='w-full h-[5vh]'>
        <select
          onChange={handleValue}
          name='status'
          value={from.status || ''}
          className='w-full h-full bg-gray-700 outline-none border border-zinc-900 text-gray-100 shadow'
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
        <Link to="/">
          <span className='px-4 py-2 bg-rose-600 cursor-pointer rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all'>Cancel</span>
        </Link> 
        <span onClick={handleResetForm} className='px-4 py-2 bg-green-600 cursor-pointer rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all'>Reset</span>
        <span onClick={handleAddProduct} className='px-4 py-2 bg-indigo-600 cursor-pointer rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all'>Add</span>
      </div>
    </div>
  )}
  {showCongras && (
    <div className='w-5/12 h-max border border-zinc-300 p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-800 rounded-lg'>
      <h1 className='text-5xl font-mono text-gray-200'>Congratulations</h1>
      <p className='text-xl py-5 text-gray-300'>Your Product was successfully added</p>
      <div className='w-full flex gap-10 items-center justify-end'>
        <Link to="/">
          <span className='px-4 py-2 bg-indigo-600 rounded-lg cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all'>Back to Home</span>
        </Link> 
        <p onClick={handleBack} className='px-4 py-2 bg-sky-600 rounded-lg cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all'>Add Again</p>
      </div>
    </div>
  )}
</div>
</div>

  );
};

export default Add;
