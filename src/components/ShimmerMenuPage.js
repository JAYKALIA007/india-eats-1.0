import React from 'react'
import ShimmerCardMenuPage from './ShimmerCardMenuPage'
const ShimmerMenuPage = () => {
  return (
    <div className=' mx-24 flex flex-wrap' >
        <div className='mx-8 mt-10 my-2 h-4 bg-slate-100 w-full ' ></div>
        <div className='mx-8 my-2 h-4 bg-slate-100 w-full ' ></div>
        <ShimmerCardMenuPage />
        <ShimmerCardMenuPage />
    </div>
  )
}

export default ShimmerMenuPage