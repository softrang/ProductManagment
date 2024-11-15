import React from 'react'
import { Link } from 'react-router-dom'

const Lheader = () => {
  return (
    <div className="xsm:w-full llg:w-2/12 h-max z-0 lg:my-2 flex xsm:flex-col lsm:flex-row llg:flex-col lsm:flex-wrap items-center lsm:justify-around justify-start bg-gray-900 shadow-lg shadow-gray-700/50 transform transition-transform duration-300 ">
  <Link to="order/add" className="my-5">
    <span className="px-4 py-2 bg-green-600 rounded-lg my-5 shadow-md hover:shadow-lg transition-all duration-300">
      Add Order
    </span>
  </Link>

  <Link to="/" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2  bg-gray-700 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Dashboard</p>
  </Link>
  <Link to="/order/all" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">All Order</p>
  </Link>
  <Link to="/order/pending" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Pending</p>
  </Link>
  <Link to="/order/review" className="xsm:w-full lsm:w-max llg:w-full  ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Review</p>
  </Link>
  <Link to="order/sucsess" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Success</p>
  </Link>
  <Link to="/order/complete" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Complete</p>
  </Link>
  <Link to="/order/cancel" className="xsm:w-full lsm:w-max llg:w-full ">
    <p className="w-full py-2 bg-gray-800 px-5 text-lg mb-2 text-white shadow-inner hover:shadow-gray-600/50 transform hover:scale-105 transition-transform duration-200">Cancel</p>
  </Link>
</div>

  )
}

export default Lheader
