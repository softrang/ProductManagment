import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { deletIndex } from '../redux/slices/productslices';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SuccessItem = ({ item, index, onDelete }) => (
  <div className="order-item pending mt-4 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
    <p className="text-base text-gray-600 line-clamp-2 ">{item.dic}</p>
    <p className="text-sm text-gray-800 font-medium">Price: {item.price}</p>
    <p className="text-sm text-gray-800 font-medium">Status: {item.status}</p>
    <div className="flex justify-around text-gray-700">
      <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out">
        <GrView />
      </div>
      <Link to="order/update" state={{ data: item, index }}>
        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out">
          <FaRegEdit />
        </div>
      </Link>
      <div onClick={() => onDelete(index)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out">
        <MdDelete />
      </div>
    </div>
  </div>
);








const Sucsess = () => {
  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);
  const [SuccessCount, setSuccessCount] = useState(0);

  useEffect(() => {
    const count = deta ? deta.filter(item => item.status === "Success").length : 0;
    setSuccessCount(count);
  }, [deta]);

  const onDelete = (index) => {
    dispatch(deletIndex(index));
  };



  return (
    <div className="w-1/4 h-max max-h-[65vh] bg-gradient-to-br from-oasim2 to-oasim1 p-4 rounded-lg shadow-md shadow-oasim2 overflow-hidden">
    <p className="text-center text-xl bg-gradient-to-r from-sky-600 to-green-600 text-white font-semibold py-3 rounded-t-lg shadow-inner">
      Sucsess <span>({SuccessCount})</span>
    </p>

    {deta && deta.length > 0 ? (
      deta
        .filter(item => item.status === "Success")
        .map((item, index) => (
          <SuccessItem key={index} item={item} index={index} onDelete={onDelete} />
        ))
    ) : (
      <p className="text-center mt-4 text-gray-600">No Sucsess items</p>
    )}
  </div>
  )
}

export default Sucsess
