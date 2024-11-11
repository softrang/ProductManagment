import React, { useState } from 'react';
import Theader from '../Header/Theader';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/slices/productslices';

const Update = () => {
    const location = useLocation();
    const initialData = location.state?.data ||  ''; // Ensure default values
    const [data, setData] = useState(initialData);
    const dispatch = useDispatch();

   

    const handleValue = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateProduct = (newData) => {
      if (newData) {
        dispatch(updateProduct(newData)); // Dispatch with newData only
      } else {
        console.error("Invalid newData provided to handleUpdateProduct:", newData);
      }
    };

    return (
        <div>
            <Theader />
            <div className='w-full h-[90vh] fixed right-0 bottom-0 border border-zinc-300 p-5 flex gap-5 flex-wrap justify-center'>
                <div className='w-5/12 add h-max border border-zinc-300 p-4'>
                    <div className='w-full'>
                        <label className='py-2'>Product Title</label>
                        <input
                            onChange={handleValue}
                            type='text'
                            name='title'
                            value={data.title}
                            className='w-full h-[5vh] rounded-lg outline-0 bg-gray-600 px-3 my-2'
                        />
                    </div>
                    <div className='w-full'>
                        <label className='py-2'>Product Description</label>
                        <textarea
                            onChange={handleValue}
                            name='dic'
                            value={data.dic}
                            className='w-full h-[20vh] rounded-lg outline-0 bg-gray-600 px-3 my-2 resize-none'
                        />
                    </div>
                    <div className='w-full'>
                        <label className='py-2'>Price</label>
                        <input
                            onChange={handleValue}
                            type='text'
                            name='price'
                            value={data.price}
                            className='w-full h-[5vh] rounded-lg outline-0 bg-gray-600 px-3 my-2'
                        />
                    </div>
                    <div className='w-full h-[5vh]'>
                        <select
                            onChange={handleValue}
                            name='status'
                            value={data.status}
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
                        <Link to="/">
                            <button className='px-4 py-2 bg-rose-600'>Cancel</button>
                        </Link>
                        <button
                             onClick={() => handleUpdateProduct( data)}
                            className='px-4 py-2 bg-indigo-600'
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
