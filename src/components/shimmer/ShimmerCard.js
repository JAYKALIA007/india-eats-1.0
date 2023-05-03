import React from 'react'

const ShimmerCard = () => {
  return (
    <div className=' w-80 lg:w-[280px] p-4 m-8 lg:mx-5 xl:my-7  2xl:m-7 shadow-sm rounded-md ' >
        <div className='w-full h-48 xl:w-[90%] xl:h-44 bg-slate-100 rounded-md ' ></div>
        <p className='mt-4 h-4 bg-slate-100 w-1/2' ></p>
        <p className='my-4 h-4 bg-slate-100 w-1/3 ' ></p>
    </div>
  )
}

export default ShimmerCard