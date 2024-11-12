import React, { useState } from 'react';
import Theader from '../Header/Theader';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
import { Link } from 'react-router-dom';

const Pending = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onDelete = (id) => {
    dispatch(deletIndex(id));
  };

  const pendingItems = deta.filter((item) => item.status === "Pending");

  return (
    <div>
      <Theader searchQuery={searchQuery} handleSearch={handleSearch} />
      
      <div className='w-90 m-auto h-max  bg-gray-800'>
        <div className="w-full h-max py-5 flex items-center justify-center space-x-2 text-gray-600 text-sm font-medium">
          <span>
            <Link to="/" className="hover:text-blue-300 transition duration-200 ease-in-out text-gray-400">Home</Link>
          </span>
          <span className='text-zinc-50'>/</span>
          <span className="text-gray-400">Pending</span>
        </div>

        {pendingItems.length > 0 ? (
          <table className="w-full shadow-lg rounded-lg bg-gray-800">
            <thead className="bg-gray-900 border-b border-gray-800 text-gray-300">
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
              {pendingItems.filter((item) => 
               item.title.toLowerCase().includes(searchQuery.toLowerCase())||
               item.status.toLowerCase().includes(searchQuery.toLowerCase())
      
              ).reverse()
              .map((item, index) => (
                <tr key={item.id || index} className="hover:bg-gray-900 hover:text-gray-400 transition duration-200 ease-in-out border-b border-gray-900 text-gray-300">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{item.title}</td>
                  <td className="px-4 py-2 text-center">{item.price}</td>
                  <td className="px-4 py-2 text-center">{item.timestamp}</td>
                  <td className="px-4 py-2 text-center">{item.dic}</td>
                  <td className="px-4 py-2 flex justify-center font-medium">
                    <span className="px-4 py-2 bg-amber-600 font-medium text-gray-800">{item.status}</span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-around text-zinc-100">
                      <div className="text-xl p-2 hidden cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out">
                        <GrView />
                      </div>

                      <Link to="/order/update" state={{ data: item, index }}>
                        <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out" aria-label="Edit Order"><FaRegEdit /></div>
                      </Link>

                      <div onClick={() => onDelete(item.id)} className="text-xl p-2 cursor-pointer hover:text-red-600 transform hover:scale-110 transition duration-200 ease-in-out">
                        <MdDelete />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-400 text-lg font-medium py-2 rounded-md shadow-md">
            Sorry, you haven't created any canceled orders yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Pending;
