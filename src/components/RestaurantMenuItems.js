import React from 'react'
import { MENU_ITEMS_IMAGE_CDN_URL } from '../../constants'
const RestaurantMenuItems = ({data, title}) => {
    // console.log(data)
    if(!data) return null
    const displayItems = data.map(item=>(
      <div className='my-10 [&:not(:last-child)]:border-b border-slate-200' key={item?.card.info?.id} >
        <div className='w-full flex' >
          <div className='w-3/4'>
            <div className='text-xl font-normal my-2' >
              <p className='' >{item?.card?.info?.name}</p>
              <p className='' >₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
            </div>
            <p className='text-[#9DA0A9] mb-10 ' >{item?.card?.info?.description}</p>
          </div>
          <div className='w-1/4 py-8'>
            {item?.card?.info?.imageId &&
              <img className='h-28 w-28 mx-auto rounded-md shadow-sm' src={`${MENU_ITEMS_IMAGE_CDN_URL}${item?.card?.info?.imageId}`} alt={item?.card?.info?.name} />
            }
          </div>
        </div>
      </div>
    ))
  return (
    <div className='text-[#3E4152] my-8' >
      <p className='text-xl font-bold' >{title} {` (${data.length})`}</p>
      <div>{displayItems}</div>
      <hr className="border-8 border-slate-200 " />
    </div>
  )
}

export default RestaurantMenuItems