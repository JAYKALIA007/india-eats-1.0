import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiOutlineReceiptPercent, HiMagnifyingGlass } from 'react-icons/hi2'
import { RxHamburgerMenu , RxCross1 } from 'react-icons/rx'
import { TfiHelpAlt } from 'react-icons/tfi'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [ showSideNav , setShowSideNav ] = useState(false)
  const cartItems = useSelector(store => store.cart.cartInfo)
  let totalItemsCount = 0
  cartItems?.items && cartItems?.items.map(item=> totalItemsCount += item.count)
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol or link inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <div>
      <ul className='hidden md:flex justify-between relative top-2 text-base  ' >
          <NavLink 
              to='/search'
              className={({ isActive }) =>isActive ? 'text-orange-400 font-semibold ' : 'hover:text-orange-400 ' } > 
                <HiMagnifyingGlass className='inline  mr-1  text-lg  relative bottom-[2px] ' /> 
                Search
          </NavLink>
          <NavLink 
              to='/offers'
              className={({ isActive }) =>isActive ? 'text-orange-400 font-semibold ' : 'hover:text-orange-400 ' } > 
                <HiOutlineReceiptPercent className='inline  mr-1  text-lg  relative bottom-[2px] ' /> 
                Offers
          </NavLink>
          <NavLink 
              to='/support'
              className={({ isActive }) =>isActive ? 'text-orange-400 font-semibold ' : 'hover:text-orange-400 ' } > 
                <TfiHelpAlt className='inline mr-1  text-lg relative bottom-[2px] ' /> 
                Help
          </NavLink>
          <NavLink 
              to='/signin'
              className={({ isActive }) =>isActive ? 'text-orange-400 font-semibold ' : 'hover:text-orange-400 ' } > 
                <HiOutlineUser className='inline  text-lg relative bottom-[2px] ' /> 
                Sign In
          </NavLink>
          <NavLink 
              to='/cart'
              className={({ isActive }) =>isActive ? 'text-orange-400 font-semibold ' : 'hover:text-orange-400 ' } > 
                <HiOutlineShoppingBag className='inline text-lg relative bottom-[2px] ' />
                {totalItemsCount > 0 ? totalItemsCount : <>Cart</>}
          </NavLink>
      </ul>
      <div className='md:hidden'  >
        <div id="myNav" className="overlay h-full w-0 fixed z-10 left-0 top-0 bg-[#000000e6] overflow-x-hidden">
          <RxCross1 className=' text-2xl text-white absolute top-7 left-[21rem] sm:left-[33rem]'  onClick={()=>closeNav()}  />
          <div className='relative top-1/4 w-full text-center mt-30px'>
            <Link to='/search' className=' text-[#818181] p-[20px] no-underline	 text-3xl block transition  hover:text-[#f1f1f1] focus:text-[#f1f1f1] ' onClick={()=>closeNav()} >Search</Link>
            <Link to='/offers' className=' text-[#818181] p-[20px] no-underline	 text-3xl block transition  hover:text-[#f1f1f1] focus:text-[#f1f1f1] ' onClick={()=>closeNav()} >Offers</Link>
            <Link to='/support' className=' text-[#818181] p-[20px] no-underline	 text-3xl block transition  hover:text-[#f1f1f1] focus:text-[#f1f1f1] ' onClick={()=>closeNav()} > Help</Link>
            <Link to='/signin' className=' text-[#818181] p-[20px] no-underline	 text-3xl block transition  hover:text-[#f1f1f1] focus:text-[#f1f1f1] ' onClick={()=>closeNav()} > Sign In </Link>
            <Link to='/cart' className=' text-[#818181] p-[20px] no-underline	 text-3xl block transition  hover:text-[#f1f1f1] focus:text-[#f1f1f1] ' onClick={()=>closeNav()} >{totalItemsCount > 0 ? totalItemsCount : <>Cart</>} </Link>
          </div>
        </div>
        <RxHamburgerMenu className='text-2xl relative top-3  ' onClick={()=>{
          openNav()
        }} />
      </div>
    </div>
  )
}

export default Navbar