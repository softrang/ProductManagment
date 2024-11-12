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
     <div className='w-90 h-max m-auto flex'>
       
        <Lheader/>
    <div className='w-10/12 h-max  bg-gray-900 p-5 flex gap-5 flex-wrap justify-center '>
    <div className='grid grid-cols-3 grid-rows-1 gap-2'>

   
        <Allorder searchQuery={searchQuery}  />
        <Pending searchQuery={searchQuery}  />
        <Review searchQuery={searchQuery} />
        </div>
        <div className='grid grid-cols-3 grid-rows-1 gap-2'>
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
