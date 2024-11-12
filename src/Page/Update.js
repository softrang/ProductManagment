import React, { useState } from 'react';
import Theader from '../Header/Theader';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/slices/productslices';

const Update = () => {
    const location = useLocation();
    const initialData = location.state?.data || {};
    const [data, setData] = useState(initialData);

    const [showCongras, setShowCongras] = useState(false);
    const [showUpdate, setShowUpdate] = useState(true);

    const dispatch = useDispatch();

    const handleValue = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateProduct = () => {
        if (JSON.stringify(data) === JSON.stringify(initialData)) {
            alert("You must edit at least one field before updating.");
            return;
        }
        
        dispatch(updateProduct(data)); 
        setShowCongras(true); // Show the message
        setShowUpdate(false);

    };

    return (
        <div>
            <Theader />
            <div className='w-90 m-auto h-max p-5 flex gap-5  justify-center items-center'>
            {showUpdate && (
                <div className='xsm:w-full md:w-6/12 h-max text-gray-300 bg-gray-800 p-4 rounded-lg'>
                    <div className='w-full'>
                        <label className='py-2'>Product Title</label>
                        <input
                            onChange={handleValue}
                            type='text'
                            name='title'
                            value={data.title || ''}
                            className='w-full h-8 rounded-lg shadow-inner shadow-gray-900 outline-0 bg-gray-700 px-3 my-2'
                        />
                    </div>
                    <div className='w-full'>
                        <label className='py-2'>Product Description</label>
                        <textarea
                            onChange={handleValue}
                            name='dic'
                            value={data.dic || ''}
                            className='w-full h-32 shadow-inner shadow-gray-900 rounded-lg outline-0 bg-gray-700 px-3 my-2 resize-none'
                        />
                    </div>
                    <div className='w-full'>
                        <label className='py-2'>Price</label>
                        <input
                            onChange={handleValue}
                            type='text'
                            name='price'
                            value={data.price || ''}
                            className='w-full h-8 shadow-inner shadow-gray-900 rounded-lg outline-0 bg-gray-700 px-3 my-2'
                        />
                    </div>
                    <div className='w-full h-8'>
                        <select
                            onChange={handleValue}
                            name='status'
                            value={data.status || ''}
                            className='w-full h-full bg-gray-700 outline-0 rounded-lg'
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
                            <button className='px-4 py-2 bg-gray-700 shadow-inner shadow-gray-900 rounded-lg'>Cancel</button>
                        </Link>
                        <button
                            onClick={handleUpdateProduct}
                            className='px-4 py-2 bg-gray-700 shadow-inner shadow-gray-900'
                        >
                            Update
                        </button>
                    </div>


                </div>
                )}
                {showCongras && (
                <div className='xsm:w-full md:w-5/12 flex flex-col items-center justify-center'>
                        <p className='text-center my-5 text-green-400 xsm:text-3xl md:text-5xl font-mono'>Congratulations</p>
                        <p className='text-center text-gray-400 text-base'>Your Poduct Sucessfuly Updated</p>
                         <Link to="/" className='text-center mt-5 px-4 py-2 bg-gray-800 shadow-inner shadow-gray-900'> Back to Home  </Link>

                    </div>
                     )}
            </div>
        </div>
    );
};

export default Update;
