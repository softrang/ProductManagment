import React, { useState } from 'react'
import Allorder from '../Compo/Allorder'
import Pending from '../Compo/Pending'
import Review from '../Compo/Review'
import Sucsess from '../Compo/Sucsess'
import Cancale from '../Compo/Cancale'
import Complete from '../Compo/Complete'
import Theader from '../Header/Theader'
import Lheader from '../Header/Lheader'

const Body = () => {

  const [searchQuery, setSearchQuery] = useState('');



  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    
  };

  return (
    <> 
   <Theader searchQuery={searchQuery} handleSearch={handleSearch} />
     <div className='w-90 h-max m-auto flex xsm:flex-wrap'>
       
        <Lheader/>
    <div className='xsm:w-full llg:w-10/12 h-max  bg-gray-900 llg:p-5 flex gap-5 flex-wrap justify-center  xsm:p-0'>
    <div className='grid xsm:grid-cols-1 xsm:grid-rows-6 md:grid-cols-2 md:grid-row-3 lmd:grid-cols-3 lmd:grid-rows-2 gap-2'>

   
        <Allorder searchQuery={searchQuery}  />
        <Pending searchQuery={searchQuery}  />
        <Review searchQuery={searchQuery} />
        <Sucsess searchQuery={searchQuery} />
        <Complete searchQuery={searchQuery} />
        <Cancale searchQuery={searchQuery} />
        </div>
        
    </div>
    
    </div>
    </>
  )
}

export default Body
