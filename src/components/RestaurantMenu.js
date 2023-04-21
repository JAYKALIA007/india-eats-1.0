import { useEffect } from 'react'
import { useParams } from 'react-router'
import useFetchMenu from '../utils/useFEtchMenu'
import RestaurantInfo from './RestaurantInfo'
import RestaurantMenuItems from './RestaurantMenuItems'
import RestaurantMenuSections from './RestaurantMenuSections'
import ShimmerCardMenuPage from './ShimmerCardMenuPage'

const RestaurantMenu = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    },[])
    const { slug } = useParams()
    const slugArray = slug.split('-')
    const resId = slugArray[slugArray.length - 1]
    // console.log(resId)
    const menu = useFetchMenu(resId)
    if(!menu) return null

    return(
        menu.length === 0 ? ( 
        <div className=' mx-24 flex flex-wrap' >
            <div className='mx-8 mt-10 my-2 h-4 bg-slate-100 w-full ' ></div>
            <div className='mx-8 my-2 h-4 bg-slate-100 w-full ' ></div>
            <ShimmerCardMenuPage />
            <ShimmerCardMenuPage />
        </div>
     ) : (
        <div className=' w-3/5 mx-auto' >
                        <RestaurantInfo {...menu[0]?.card?.card?.info} />
                        <RestaurantMenuSections {...menu[2]?.groupedCard?.cardGroupMap?.REGULAR}  />
        </div>
     ))
}

export default RestaurantMenu