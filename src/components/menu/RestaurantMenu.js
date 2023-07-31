import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useFetchMenu from '../../utils/useFetchMenu'
import RestaurantInfo from './RestaurantInfo'
import RestaurantMenuSections from './RestaurantMenuSections'
import ShimmerMenuPage from '../shimmer/ShimmerMenuPage'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { totalCartPrice } from '../../utils/helper'
import { useCartStore } from '../../utils/contexts/cartContext'


const RestaurantMenu = () => {
    const [ showFooter, setShowFooter ] = useState(false)
    const { cartInfo } = useCartStore()

    let totalPrice = cartInfo?.items ? totalCartPrice(cartInfo?.items) : 0

    useEffect(()=>{
        setShowFooter(cartInfo?.items ? true : false)
    },[ cartInfo ])

    const { slug } = useParams()
    const slugArray = slug.split('-')
    const resId = slugArray[slugArray.length - 1]
    const menu = useFetchMenu(resId)
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
    if(!menu) return null
    return(
        menu.length === 0 ? ( 
        <ShimmerMenuPage />
     ) : (
        <div className=' w-full sm:w-4/5 lg:w-3/5 px-10 sm:p-0  sm:mx-auto' >
                        <RestaurantInfo {...menu[0]?.card?.card?.info} />
                        <RestaurantMenuSections {...menu[2]?.groupedCard?.cardGroupMap?.REGULAR} restaurantName={menu[0]?.card?.card?.info?.name} />
                        {showFooter && (
                            <Link to='/cart' >
                                <div className='bg-[#5FB246] p-4  sticky bottom-0 mr-12 text-white flex justify-between text-sm font-bold  w-11/12 ml-3' >
                                    <div className='flex ' >
                                        <p>{`${cartInfo?.items.length} Items `}</p> 
                                        <p className='mx-1' > | </p>
                                        <p> {`₹ ${totalPrice}`}</p>
                                    </div>
                                    <p>VIEW CART <HiOutlineShoppingBag className='inline text-sm relative bottom-[2px] '  /> </p>
                                </div>
                            </Link>
                            )
                        }
        </div>
     ))
}

export default RestaurantMenu