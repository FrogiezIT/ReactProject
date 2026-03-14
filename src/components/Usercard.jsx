import React from 'react'
import aman from '../assets/aman.jpg'

const Usercard = () => {
  return (
    <div className='flex flex-col bg-white w-1/3 rounded-2xl p-5'>
        <p className='text-3xl font-bold'>Aman</p>
        <img src={aman} alt=""  class="w-80 h-80 m-auto rounded-[50%] mt-5 mb-5" />
        <p className='text-sm font-bold'>Description of Aman</p>
      
    </div>
  )
}

export default Usercard
