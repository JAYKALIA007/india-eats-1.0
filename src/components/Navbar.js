import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiOutlineReceiptPercent, HiMagnifyingGlass } from 'react-icons/hi2'
import { TfiHelpAlt } from 'react-icons/tfi'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cartItemCount = useSelector(store => store.cart.cart.length)
  // console.log(cartItemCount)
  return (
    <ul className='flex justify-between relative top-2 text-base ' >
        <Link to='/search' ><HiMagnifyingGlass className='inline  mr-1  text-lg  relative bottom-[2px] ' />Search</Link>
        <Link to='/offers' ><HiOutlineReceiptPercent className='inline  mr-1  text-lg  relative bottom-[2px] ' />Offers</Link>
        <Link to='/help' > <TfiHelpAlt className='inline mr-1   text-lg relative bottom-[2px] ' /> Help</Link>
        <Link to='/signin' ><HiOutlineUser className='inline  text-lg relative bottom-[2px] ' /> Sign In </Link>
        <Link to='/cart' ><HiOutlineShoppingBag className='inline text-lg relative bottom-[2px] ' /> {cartItemCount > 0 ? cartItemCount : <>Cart</>} </Link>
    </ul>
  )
}

export default Navbar