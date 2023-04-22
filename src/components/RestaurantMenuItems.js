import React from 'react'
import { MENU_ITEMS_IMAGE_CDN_URL } from '../../constants'
import { BsCircleFill } from 'react-icons/bs'
import { TiArrowSortedUp } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../utils/cartSlice'
// import useAddToCart from '../utils/useAddToCart'
const RestaurantMenuItems = ({data, title, restaurantName}) => {
  if(!data) return null
  // console.log(data)
  const dispatch = useDispatch()
  const cartInfo = useSelector(store=> store.cart.cartInfo)
  // console.log(cartInfo)

  const useAddToCart = (resName, itemName) => {
    //check if cart is empty
    if(Object.keys(cartInfo).length === 0)
    {
      let cartInfoObj = {} 
      let itemObj = {}
      itemObj[itemName] = 1
      // itemObj.count = 1
      cartInfoObj.restaurantName = resName
      cartInfoObj.items =  itemObj

      dispatch(addToCart(cartInfoObj))
    }
    else{
      if(resName == cartInfo?.restaurantName){
        let cartInfoObj = structuredClone(cartInfo)
        cartInfoObj.items[itemName] = (cartInfoObj.items[itemName] + 1 ) || 1  
        dispatch(addToCart(cartInfoObj))
      }
      else{
        console.log('show a popup saying items already in cart. are you sure you want to reset')

        let cartInfoObj = {} 
        let itemObj = {}
        itemObj[itemName] = 1
        cartInfoObj.restaurantName = resName
        cartInfoObj.items =  itemObj

        dispatch(addToCart(cartInfoObj))
      }
    }

  }
    const displayItems = data.map(item=>(
      <div className='my-10 [&:not(:last-child)]:border-b border-slate-200' key={item?.card.info?.id} >
        <div className='w-full flex' >
          <div className='w-3/4'>
            <div className='text-xl font-normal my-2' >
              {item?.card?.info?.isVeg ? <BsCircleFill className=' text-green-600 text-sm mb-2' />: <TiArrowSortedUp className='text-red-500 text-3xl'  />}
              <p className='' >{item?.card?.info?.name}</p>
              <p className='' >₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
            </div>
            <p className='text-[#9DA0A9] mb-10 ' >{item?.card?.info?.description}</p>
          </div>
          <div className='w-1/4 py-8'>
            {item?.card?.info?.imageId &&
                <img className='h-28 w-32 mx-auto rounded-md shadow-sm' src={`${MENU_ITEMS_IMAGE_CDN_URL}${item?.card?.info?.imageId}`} alt={item?.card?.info?.name} />
            }
            <div className='text-center relative bottom-7 ' >
                  <button 
                      className='bg-white shadow-lg  w-24 p-2 rounded-md text-green-600 font-bold text-sm ' 
                      onClick={()=>{
                        // dispatch(addToCart({restaurantName: restaurantName , itemName : item?.card?.info?.name}))
                        useAddToCart(restaurantName, item?.card?.info?.name)
                      }}
                    >
                    ADD
                  </button>
            </div>
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