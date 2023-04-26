import React from 'react'
import { ERROR_PAGE_IMAGE_CDN_URL } from '../../constants'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='grid grid-flow-col' >
        <div className='col-span-4' >

        </div>
        <div className='col-span-4' >
            <div className='text-center mt-32 ' >
                <img className='mx-auto h-80 ' src={ERROR_PAGE_IMAGE_CDN_URL} alt='empty cart' />
                <p className='text-xl font-semibold  text-gray-600 mt-5 ' >Uh-oh!</p>
                <p className='text-[#9DA0A9] my-1' >Sorry! This should not have happened. Please retry.</p>
                <Link to='/'  >
                    <button className=' bg-orange-500 text-white p-2 px-6 font-bold ml-4 mt-5' >SEE RESTAURANTS NEAR YOU</button>
                </Link>
                </div>
            </div>
        <div className='col-span-4' >

        </div>
        
    </div>
  )
}

export default Error