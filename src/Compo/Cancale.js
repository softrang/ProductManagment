import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
import { Link } from 'react-router-dom';

const PendingItem = ({ item, index, onDelete }) => (
  <div className="order-item pending mt-4 bg-gray-900 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-inner">
    <h2 className="text-lg font-bold text-green-400 line-clamp-1 ">{item.title}</h2>
    <p className="text-base text-gray-200 line-clamp-2 ">{item.dic}</p>
    <p className="text-base text-rose-500 font-medium">Price: {item.price}</p>
    <p className="text-sm text-lime-500 font-medium">Date: {item.timestamp}</p>
    <div className="flex justify-around text-gray-500">
      <div className="text-xl hidden p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out">
        <GrView />
      </div>
      <Link to="order/update" state={{ data: item, index }}>
        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out">
          <FaRegEdit />
        </div>
      </Link>
      <div onClick={() => onDelete(item.id)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out">
        <MdDelete />
      </div>
    </div>
  </div>
);



const Cancale = ({searchQuery}) => {

  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);
  const [cancelCount, setCancelCount] = useState(0);

  useEffect(() => {
    const count = deta ? deta.filter(item => item.status === "Cancel").length : 0;
    setCancelCount(count);
  }, [deta]);

  const onDelete = (id) => {
    dispatch(deletIndex(id));; // Dispatches action with the `id` for deletion
};


const data = deta.filter(item => item.status === "Cancel").slice(-2).reverse()




  return (

    <div className="w-full h-max  bg-gradient-to-br from-gray-800 to-gray-800 p-4 rounded-lg shadow-md shadow-gray-800 ">
    <p className="text-center text-xl bg-gradient-to-r from-rose-700 to-rose-600 text-white font-semibold py-3 rounded-t-lg shadow-inner">
    Cancel <span>({cancelCount})</span>
    </p>

    {data && data.length > 0 ? (
      data.filter((item) => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())||
        item.status.toLowerCase().includes(searchQuery.toLowerCase())

       )
        
        .map((item, index) => (
          <PendingItem key={index} item={item} index={index} onDelete={onDelete} />
        ))
    ) : (
      <p className="text-center mt-4 text-gray-600">No Cancale items</p>
    )}
  </div>
  )
}

export default Cancale
