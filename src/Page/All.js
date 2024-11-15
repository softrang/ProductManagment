import React, { useState } from 'react';
import Theader from '../Header/Theader';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
import { Link } from 'react-router-dom';

const All = () => {

  const [searchQuery, setSearchQuery] = useState('');



  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    
  };




  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);

  const onDelete = (id) => {
    dispatch(deletIndex(id));; // Dispatches action with the `id` for deletion
};

console.log(deta)

  const statusStyles = {
    "All Order": "bg-green-600",
    "Pending": "bg-amber-600",
    "Review": "bg-sky-600",
    "Success": "bg-green-600",
    "Complete": "bg-sky-600",
    "Cancel": "bg-rose-600"
  };

  return (
    <div>
      <Theader searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="w-90 m-auto h-max bg-gray-900  ">
        <div className="w-full h-max py-5 flex items-center justify-center space-x-2 text-gray-600 text-sm font-medium">
          <span>
            <Link to="/" className="hover:text-blue-300 transition duration-200 ease-in-out text-gray-400">
              Home
            </Link>
          </span>
          <span className="text-zinc-50">/</span>
          <span className="text-gray-400">All Order</span>
        </div>
        <div className='w-full  overflow-x-auto'> 
        <table className="w-full h-max shadow-lg rounded-lg bg-gray-800">
          <thead className="bg-gray-950 border-b border-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-3 text-center font-semibold ">Sl No</th>
              <th className="px-4 py-3 text-center font-semibold ">Title</th>
              <th className="px-4 py-3 text-center font-semibold ">Price</th>
              <th className="px-4 py-3 text-center font-semibold ">Date</th>
              <th className="px-4 py-3 text-center font-semibold ">Description</th>
              <th className="px-4 py-3 text-center font-semibold ">Status</th>
              <th className="px-4 py-3 text-center font-semibold ">Action</th>
              </tr>
         </thead>
          <tbody>
            {deta?.length > 0 ? (
               deta.filter((item) => 
               item.title.toLowerCase().includes(searchQuery.toLowerCase())||
               item.status.toLowerCase().includes(searchQuery.toLowerCase())
      
              ).reverse().map((item, index) => (
                <tr key={index} className="hover:bg-gray-900 hover:text-gray-300 transition duration-200 ease-in-out border-b-2 border-gray-900 text-gray-200">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center  ">{item.title}</td>
                  <td className="px-4 py-2 text-center">{item.price}</td>
                  <td className="px-4 py-2 text-center">{item.timestamp || "2023-01-01"}</td>
                  <td className="px-4 py-2 text-center">{item.dic}</td>
                  <td className="px-4 py-2 flex  justify-center font-medium">
                    <span className={`px-4 py-2 font-medium ${statusStyles[item.status] || ""}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-around text-zinc-100">
                      <div className="text-xl hidden p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="View Order"><GrView /></div>
                      <Link to="/order/update" state={{ data: item, index }}>
                        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Edit Order"><FaRegEdit /></div>
                      </Link>
                      <div onClick={() => onDelete(item.id)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Delete Order"><MdDelete /></div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-400 text-lg font-medium py-2 rounded-md shadow-md">
                  Sorry, you haven't created any orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default All;
