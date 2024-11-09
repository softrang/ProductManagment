import React, { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
const Cancale = () => {

  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);

  const onDelete = (index) => {
    dispatch(deletIndex(index));

  };
  useEffect(()=>{
    const Can = document.querySelectorAll(".can");
    const Maincan = document.querySelector(".maincan");
    Maincan.innerHTML =  "("+Can.length +")";  // Corrected to innerHTML, and removed 'style'
   
    
  })

  return (
    <div className="w-1/4 h-max max-h-[65vh] bg-gradient-to-br from-oasim2 to-oasim1 p-4 rounded-lg shadow-md shadow-oasim2  overflow-hidden">
    <p className="text-center text-xl bg-gradient-to-r from-rose-700 to-rose-500 text-white font-semibold py-3 rounded-t-lg shadow-inner">Cancle <span className='maincan'> </span>  </p>
    
    <div className="w-full mt-4 can h-max p-3 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
      <p className="text-lg font-bold text-gray-800">Thander Ice Polo Shirt</p>
      <p className="text-base text-gray-600">Thander ice polo shirt</p>
      <p className="text-sm text-gray-800 font-medium">Prise: 100 </p>
      <p className="text-sm text-gray-800 font-medium">Status: </p>
      
      <div className="flex justify-around text-gray-700">
        <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out"><GrView /></div>
        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out"><FaRegEdit /></div>
        <div className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out"><MdDelete /></div>
      </div>
    </div>
  
    {deta.length > 0 ? (
      deta.map((item, index) => (
        item.status === "Cancel" ? (
          <div key={index} className="order-item can mt-4 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-base text-gray-600">{item.dic}</p>
            <p className="text-sm text-gray-800 font-medium">Price: {item.price}</p>
            <p className="text-sm text-gray-800 font-medium">Status: {item.status}</p>

            <div className="flex justify-around text-gray-700">
        <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out"><GrView /></div>
        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out"><FaRegEdit /></div>
        <div onClick={() => onDelete(index)}   className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out"><MdDelete /></div>
      </div>

          </div>
        ) : null
      ))
    ) : null }
  </div>
  )
}

export default Cancale
