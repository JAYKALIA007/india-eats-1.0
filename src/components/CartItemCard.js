import React from 'react'

const CartItemCard = ({data}) => {
    // console.log(data)
    const { name, price, count } = data
  return (
    
    <div className='p-4 px-20 hover:bg-slate-100 my-2 rounded-md ' >
        <div key={name} className='flex justify-between text-sm'  >
            <p className=' font-medium	' >{name} x {count}</p>
            <p className='text-[#9DA0A9]' >₹{price * count}</p>
        </div>
    </div>
  )
}

export default CartItemCard