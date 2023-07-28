import React,{ useState } from 'react'
import { IMAGE_CDN_URL } from '../../../constants'
import { FaStar } from "react-icons/fa";
import { HiOutlineReceiptPercent } from "react-icons/hi2"
const RestaurantCard = (props) => {
    if(!props) return null
    const { name, avgRating, cloudinaryImageId, costForTwo, sla, cuisines, aggregatedDiscountInfoV3 } = props
    const { deliveryTime } = sla
    const discountString = aggregatedDiscountInfoV3
    
  return (
    <div className='md:w-[90%] xl:w-[85%] mx-auto p-8 xl:px-4 xl:py-8  hover:border border-gray-300 text-sm text-gray-600 font-extralight cursor-pointer hover:shadow-lg' >
        <img className='w-full' src={`${IMAGE_CDN_URL}${cloudinaryImageId}`} alt={name}  />
        <p className='mt-4 text-xl font-normal text-gray-800 ' >{name}</p>
        <p className='my-2' >{cuisines.join(', ')}</p>
        <div className='flex justify-between mt-4' >
            <p className={"text-white p-1 pr-2 relative bottom-1 " + (Number(avgRating)>=4.0 ? 'bg-green-500' : Number(avgRating)>=3.0 ? 'bg-yellow-500' : 'bg-red-500')} >
                <FaStar className='inline text-sm mx-1 relative bottom-[2px]'  />
                {avgRating !== "--" && avgRating}
            </p>
            <p className='font-bold relative bottom-1' >.</p>
            <p>{costForTwo}</p>
            <p className='font-bold relative bottom-1' >.</p>
            <p>{deliveryTime} mins</p>
        </div>
        {aggregatedDiscountInfoV3 && (
            <>
                <hr className='my-4 ' />
                
                {
                    discountString && (
                        <div className='text-yellow-800 font-normal text-md my-2 flex' >
                            <HiOutlineReceiptPercent className='inline text-yellow-800 text-lg  ' />
                            {/* <p className='mx-1' >{discountString.split('|')[0].split(' ').splice(0,2)[0]+" "+discountString.split('|')[0].split(' ').splice(0,2)[1]}</p> */}
                            {/* <p>{discountString.split('|')[1] ? ` | ${discountString.split('|')[1]}` :  ` on all orders `}</p> */}
                            {<p>{` ${discountString.discountTag ? discountString.discountTag + ' | ' : ''} ${discountString.header ? discountString.header + ' | ' : ''} ${discountString.subHeader ? discountString.subHeader: ''}`}</p>}
                        </div>
                    )
                }
            </>
            
        )}
    </div>
  )
}

export default RestaurantCard