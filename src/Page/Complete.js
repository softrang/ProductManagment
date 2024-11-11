import React, { useState } from 'react';
import Theader from '../Header/Theader';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { deletIndex } from '../redux/slices/productslices';
import { Link } from 'react-router-dom';

const Complete = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const deta = useSelector((state) => state.product.deta);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onDelete = (id) => {
    dispatch(deletIndex(id));
  };

  const CompleteItems = deta.filter((item) => item.status === "Complete");

  return (
    <div>
      <Theader searchQuery={searchQuery} handleSearch={handleSearch} />
      
      <div className='w-full h-[90vh] border border-zinc-300 fixed bottom-0'>
        <div className="w-full h-[5vh] flex items-center justify-center space-x-2 text-gray-600 text-sm font-medium">
          <span>
            <Link to="/" className="hover:text-blue-300 transition duration-200 ease-in-out text-white">Home</Link>
          </span>
          <span className='text-zinc-50'>/</span>
          <span className="text-zinc-50">Complete</span>
        </div>

        {CompleteItems.length > 0 ? (
          <table className="w-full shadow-lg rounded-lg bg-zinc-800">
            <thead className="bg-zinc-300 border-b">
              <tr>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Sl No</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Title</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Price</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Date</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Description</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {CompleteItems.filter((item) => 
               item.title.toLowerCase().includes(searchQuery.toLowerCase())||
               item.status.toLowerCase().includes(searchQuery.toLowerCase())
      
              ).reverse()
              .map((item, index) => (
                <tr key={item.id || index} className="hover:bg-zinc-900 hover:text-zinc-50 transition duration-200 ease-in-out border-b text-white">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">{item.title}</td>
                  <td className="px-4 py-2 text-center">{item.price}</td>
                  <td className="px-4 py-2 text-center">{item.timestamp}</td>
                  <td className="px-4 py-2 text-center">{item.dic}</td>
                  <td className="px-4 py-2 flex justify-center font-medium">
                    <span className="px-4 py-2 bg-rose-600 font-medium">{item.status}</span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-around text-zinc-100">
                      <div className="text-xl p-2 cursor-pointer hover:text-green-600 transform hover:scale-110 transition duration-200 ease-in-out">
                        <GrView />
                      </div>
                      <div className="text-xl p-2 cursor-pointer hover:text-blue-600 transform hover:scale-110 transition duration-200 ease-in-out">
                        <FaRegEdit />
                      </div>
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

export default Complete;
