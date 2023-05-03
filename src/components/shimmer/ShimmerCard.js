import React from 'react'

const ShimmerCard = () => {
  return (
    <div className=' w-80 p-4 m-8 shadow-sm rounded-md 2xl:m-7' >
        <div className='w-full h-48  bg-slate-100 rounded-md ' ></div>
        <p className='mt-4 h-4 bg-slate-100 w-1/2' ></p>
        <p className='my-4 h-4 bg-slate-100 w-1/3 ' ></p>
    </div>
  )
}

export default ShimmerCard