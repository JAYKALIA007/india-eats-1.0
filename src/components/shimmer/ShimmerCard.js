import React from 'react'

const ShimmerCard = () => {
  return (
    <div className='w-[90%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-72 2xl:w-80 lg:h-96 p-2 my-6 mx-auto  md:mx-10 lg:mx-4 xl:mx-auto shadow-sm rounded-md block ' >
        <div className=' w-[100%] sm:w-[90%] md:w-[100%] lg:w-[74%] xl:w-[90%] 2xl:w-[100%] 
                         h-72 sm:h-44 xl:h-[44%] 2xl:h-[48%]  
                         mx-auto lg:mx-4 xl:mx-auto bg-slate-100 rounded-sm
                         animate-pulse
                         ' ></div>
        <p className='mt-4 h-4 bg-slate-100 w-1/2 mx-8 animate-pulse ' ></p>
        <p className='my-4 h-4 bg-slate-100 w-1/3  mx-8 animate-pulse ' ></p>
        <p className='my-4 h-4 bg-slate-100 w-1/3  mx-8 animate-pulse ' ></p>
    </div>
  )
}

export default ShimmerCard