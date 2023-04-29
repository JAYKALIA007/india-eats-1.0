import React from 'react'
import CartItemCard from './CartItemCard'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../../utils/cartSlice'
import { totalCartPrice } from '../../utils/helper'
const CartItems = ({data}) => {
    const dispatch = useDispatch()
    if(!data) return null
    const totalPrice = totalCartPrice(data?.items)
  return (
    <div>
        <div className='border-b border-dashed border-gray-500 mt-16' >
            {
                data?.items.map((item) =>{
                    return(
                        <CartItemCard key={item?.name} data={item} />
                    )
                })
            }
        </div>
        <div className='flex justify-between p-4 px-20  ' >
            <div className='flex flex-col text-sm ' >
                <p className='font-bold' >Sub Total</p>
                <p className='text-[#9DA0A9]' >Extra charges may apply</p>
            </div>
            <div className='relative top-2 font-bold ' >
                ₹ {totalPrice}
            </div>
        </div>
        <div className='text-right px-7 ' >
            <button className=' bg-gray-300 text-white p-2 px-6 font-bold  hover:bg-orange-500 ' onClick={()=>{dispatch(emptyCart())}}  >EMPTY CART</button>
            <button className=' bg-orange-500 text-white p-2 px-6 font-bold ml-4' onClick={()=>{console.log(`checkout functionality hasn't been added yet`)}} >CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartItems