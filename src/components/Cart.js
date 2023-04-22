import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
const Cart = () => {
    const cartItems = useSelector(store =>  store.cart.cart)
    if(!cartItems) return null
  return cartItems.length === 0 ? <p>Add some items to cart</p> :(
    <div>
        <CartItems data={cartItems} />
    </div>
  )
}

export default Cart