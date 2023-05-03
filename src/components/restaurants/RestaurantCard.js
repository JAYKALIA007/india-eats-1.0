import React,{ useState } from 'react'
import { IMAGE_CDN_URL } from '../../../constants'
import { FaStar } from "react-icons/fa";
import { HiOutlineReceiptPercent } from "react-icons/hi2"
const RestaurantCard = (props) => {
    // console.log(data)
    const [ color, setColor ] = useState('')
    if(!props) return null
    const { name, uuid, avgRating, cloudinaryImageId, costForTwoString, deliveryTime, cuisines, aggregatedDiscountInfo } = props
    const discountString = aggregatedDiscountInfo?.descriptionList[0]?.meta
    
  return (
    <div className='w-80 p-4 m-8 lg:mx-3 lg:w-72 2xl:m-7 hover:border border-gray-300 text-sm text-gray-600 font-extralight cursor-pointer hover:shadow-lg ' >
        <img className='w-full' src={`${IMAGE_CDN_URL}${cloudinaryImageId}`} alt={name}  />
        <p className='mt-4 text-xl font-normal text-gray-800 ' >{name}</p>
        <p className='my-2' >{cuisines.join(', ')}</p>
        <div className='flex justify-between mt-4' >
            <p className={"text-white p-1 pr-2 relative bottom-1 " + (Number(avgRating)>=4.0 ? 'bg-green-500' : Number(avgRating)>=3.0 ? 'bg-yellow-500' : 'bg-red-500')} >
                <FaStar className='inline text-sm mx-1 relative bottom-[2px]'  />
                {avgRating !== "--" && avgRating}
            </p>
            <p className='font-bold relative bottom-1' >.</p>
            <p>{costForTwoString}</p>
            <p className='font-bold relative bottom-1' >.</p>
            <p>{deliveryTime} mins</p>
        </div>
        {aggregatedDiscountInfo && (
            <>
                <hr className='my-4 ' />
                
                {
                    discountString && (
                        <div className='text-yellow-800 font-normal text-md my-2 flex' >
                            <HiOutlineReceiptPercent className='inline text-yellow-800 text-lg  ' />
                            <p className='mx-1' >{discountString.split('|')[0].split(' ').splice(0,2)[0]+" "+discountString.split('|')[0].split(' ').splice(0,2)[1]}</p>
                            <p>{discountString.split('|')[1] ? ` | ${discountString.split('|')[1]}` :  ` on all orders `}</p>
                        </div>
                    )
                }
                {/* <p className='text-yellow-800 font-normal my-2 inline' >{aggregatedDiscountInfo?.descriptionList[0]?.meta}</p> */}
            </>
            
        )}
    </div>
  )
}

export default RestaurantCard