import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
import { Link } from 'react-router-dom';

const Allorder = () => {
  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);
  const [orderCount, setOrderCount] = useState(0);

  const onDelete = (index) => {
    dispatch(deletIndex(index));; // Dispatches action with the `id` for deletion
};




  useEffect(() => {
    const allOrders = document.querySelectorAll(".all");
    setOrderCount(allOrders.length);
   
  }, [deta]);

  return (
    <div className="w-1/4 h-max max-h-[65vh] bg-gradient-to-br from-oasim2 to-oasim1 p-4 rounded-lg shadow-md shadow-oasim2 overflow-hidden">
      <p className="text-center text-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 rounded-t-lg shadow-inner">
        All Orders <span className="mainall">({orderCount})</span>
      </p>

      {deta?.length > 0 ? (
        deta
          .filter((item) => item.status === "All Order")
          .map((item, index) => (
            <div key={index} className="all mt-4 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <p className="text-base text-gray-600 line-clamp-2  ">{item.dic}</p>
              <p className="text-sm text-gray-800 font-medium">Price: {item.price}</p>
              <p className="text-sm text-gray-800 font-medium">Status: {item.status}</p>

              <div className="flex justify-around text-gray-700">
                <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="View Order"><GrView /></div>
                <Link to="order/update" state={{ data: item, index }}>
                  <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Edit Order"><FaRegEdit /></div>
                </Link>
                <div onClick={() => onDelete(index)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Delete Order"><MdDelete /></div>
              </div>
            </div>
          ))
      ) : (
        <p className="text-center mt-4 text-gray-600">No All items</p>
      )}
    </div>
  );
};

export default Allorder;
