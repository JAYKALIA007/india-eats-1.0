import React from 'react'

const OfflineMessage = () => {
    const handleReloadClick = () => {
        location.reload()
    }
  return (
    <div className='text-center h-screen' >
        <div className='relative top-72' >
            <div className='text-4xl font-bold tracking-wide my-2 text-gray-800 ' >
                Connection Error
            </div>
            <div className='text-lg text-gray-500 my-6 ' >
                Please check your internet connection and try again.
            </div>
            <div>
                <button className=' bg-orange-500 text-white p-2 px-6 font-bold ' onClick={()=>handleReloadClick()} >RELOAD</button>
            </div>
        </div>
    </div>
  )
}

export default OfflineMessage