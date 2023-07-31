import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import { EMPTY_CART_IMAGE_CDN_URL } from '../../../constants'
import { useCartStore } from '../../utils/contexts/cartContext'
const Cart = () => {

    const {cartInfo} = useCartStore()
    const { restaurantName, items } = cartInfo

    const emptyCartMessage = <div className='text-center mt-20 ' >
      <img className='mx-auto h-80 ' src={EMPTY_CART_IMAGE_CDN_URL} alt='empty cart' />
      <p className='text-xl font-semibold  text-gray-600 mt-5 ' >Your cart is empty</p>
      <p className='text-[#9DA0A9] my-1' >You can go to home page to view more restaurants</p>
      <Link to='/'  >
        <button className=' bg-orange-500 text-white p-2 px-6 font-bold ml-4 mt-5' >SEE RESTAURANTS NEAR YOU</button>
      </Link>
    </div>
  return( 
    <div className='grid grid-flow-col m-10 ' >
      <div className='col-span-4' ></div>
      <div className='col-span-4' >
        { items == undefined ? emptyCartMessage : (
          <div>
            <span className='text-lg font-bold' >{restaurantName}</span>
            <hr/>
            <CartItems data={cartInfo} />
          </div>
        )}
      </div>
      <div className='col-span-4' ></div>
    </div>
  )
}

export default Cart