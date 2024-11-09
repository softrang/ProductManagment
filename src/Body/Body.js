import React from 'react'
import Allorder from '../Compo/Allorder'
import Pending from '../Compo/Pending'
import Review from '../Compo/Review'
import Sucsess from '../Compo/Sucsess'
import Cancale from '../Compo/Cancale'
import Complete from '../Compo/Complete'

const Body = () => {
  return (
    <div className='w-10/12 h-[90vh] fixed right-0 bottom-0 bg-oasim1 p-5 flex gap-5 flex-wrap justify-center overflow-y-scroll'>
        <Allorder/>
        <Pending/>
        <Review/>
        <Sucsess/>
        <Complete/>
        <Cancale/>
      
    </div>
  )
}

export default Body
