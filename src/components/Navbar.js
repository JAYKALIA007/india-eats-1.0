import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='flex justify-between relative top-2 ' >
        <Link to='/search' >Search</Link>
        <Link to='/offers' >Offers</Link>
        <Link to='/help' >Help</Link>
        <Link to='/signin' >Sign In</Link>
        <Link to='/cart' >Cart</Link>
    </ul>
  )
}

export default Navbar