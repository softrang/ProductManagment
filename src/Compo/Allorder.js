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

  const onDelete = (id) => {
    dispatch(deletIndex(id));; // Dispatches action with the `id` for deletion
};




  useEffect(() => {
    const allOrders = document.querySelectorAll(".all");
    setOrderCount(allOrders.length);
   
  }, [deta]);

  return (
    <div className="w-1/4 h-max max-h-[65vh] bg-gradient-to-br from-gray-800 to-gray-800 p-4 rounded-lg shadow-md shadow-gray-800 overflow-hidden">
      <p className="text-center text-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold py-3 rounded-t-lg shadow-inner">
        All Orders <span>({orderCount})</span>
      </p>

      {deta?.length > 0 ? (
        deta
          .filter((item) => item.status === "All Order").reverse()
          .map((item, index) => (
            <div key={index} className="all mt-4 bg-gray-900 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-lg font-bold text-green-400 line-clamp-1 ">{item.title}</h2>
              <p className="text-base text-gray-200 line-clamp-2  ">{item.dic}</p>
              <p className="text-base text-rose-500 font-medium">Price: {item.price}</p>
              <p className="text-sm text-lime-500 font-medium">Date: {item.timestamp}</p>

              <div className="flex justify-around text-gray-500">
                <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="View Order"><GrView /></div>
                <Link to="order/update" state={{ data: item, index }}>
                  <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Edit Order"><FaRegEdit /></div>
                </Link>
                <div onClick={() => onDelete(item.id)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Delete Order"><MdDelete /></div>
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
