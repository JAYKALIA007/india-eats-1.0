// import { useState } from 'react'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import { CgTimelapse } from 'react-icons/cg'
import { HiOutlineCurrencyRupee } from 'react-icons/hi2'
import { FaStar } from 'react-icons/fa'
const RestaurantInfo = ({name,cuisines,areaName,totalRatingsString,costForTwoMessage,cloudinaryImageId,avgRatingString,aggregatedDiscountInfo,expectationNotifiers,sla}) => {
  // console.log(name)
  return (
    <div className="my-12 text-[#82838F] text-sm " >
      <div className="flex justify-between  border-b border-gray-400 border-dashed	mr-20 align-baseline" >
        <div className='h-full' >
          <p className="text-[#282C3F] text-2xl font-bold my-2">{name}</p>
          <p>{cuisines.join(', ')}</p>
          <p>{areaName}</p>
          { expectationNotifiers && 
              <p className="text-base  my-2" ><MdOutlineDirectionsBike className='inline mr-2' />{expectationNotifiers[0]?.text}</p>
          }
          
        </div>
        <div className='border border-gray-300 h-24 p-1 w-20 text-center rounded-md shadow-sm relative top-4 ' >   
          <p className='text-[#3E9B6D] font-bold text-base my-2' ><FaStar className='inline relative bottom-[2px] mr-1 ' />{avgRatingString}</p>
          <hr className='border border-slate-200 ' />
          <p className='text-xs tracking-tighter my-2 ' >{totalRatingsString}</p>
        </div>
      </div>
      <div className=" my-3 flex text-[#282C3F] text-base font-bold" >
        <p className="mr-2" ><CgTimelapse className='inline mr-2 text-2xl relative bottom-[2px] ' />{sla?.slaString}</p>
        <p className="mr-2" ><HiOutlineCurrencyRupee className='inline mr-2 text-2xl relative bottom-[2px] ' />{costForTwoMessage}</p>
      </div>
      <div className="md:flex" >
        {aggregatedDiscountInfo?.descriptionList.map(item=>{
          const metaData = item?.meta.split('|')
          if(metaData === undefined) {return null}
          return(
          <div className="border-2 border-gray-200 mr-2 p-2 my-2 rounded-md w-max " key={item?.meta}  >
              <p className="font-bold "  >{metaData[0]}</p>
              <p className=" uppercase tracking-tighter	 "  >{metaData[1]}</p>
          </div>
        )})}
      </div>
    </div>
  )
}

export default RestaurantInfo