import React from 'react'

const ShimmerCardMenuPage = () => {
  return (
    <div className=' w-[600px] p-4 m-[10px] sm:m-[60px] shadow-sm rounded-md ' >
        <div className=' w-full h-60 sm:h-80  bg-slate-100 rounded-md  animate-pulse' ></div>
        <p className='mt-4 h-4 bg-slate-100 w-1/2 animate-pulse' ></p>
        <p className='my-4 h-4 bg-slate-100 w-1/3  animate-pulse' ></p>
    </div>
  )
}

export default ShimmerCardMenuPage