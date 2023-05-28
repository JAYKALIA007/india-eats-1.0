import React from 'react'
import { FaSearch } from 'react-icons/fa'
const ShimmerSearchPage = () => {
  return (
    <div className='w-3/5 mt-10 mx-auto'>
        <div className='w-1/3 h-4 bg-slate-100 my-6 animate-pulse' ></div>
        {Array(3).fill(' ').map( (e,index) =>(
            <div key={index}  className='flex  my-6 border-b border-gary-400 py-4' >
                <FaSearch className='inline mr-6 '  />
                <div className='w-1/2 h-4 bg-slate-100 block animate-pulse'></div>
            </div>
        ))}
    </div>
  )
}

export default ShimmerSearchPage