import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from '../restaurants/RestaurantCard'
import { RESTAURANT_DATA_URL } from '../../../constants'
import ShimmerCard from '../shimmer/ShimmerCard'
import ShimmerCardContainer from '../shimmer/ShimmerCardContainer'

const Body = () => {

   const [ restaurantsData , setRestaurantsData ] = useState([])
   const  resSlug = useRef('')
  //  const [ offset , setOffset ] = useState(-1)
  //  const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //   fetchRestaurantData() 
    // },[offset])

    useEffect(()=>{
      fetchRestaurantData() 
    },[])

    const fetchRestaurantData = async() => {

      const data = await fetch(RESTAURANT_DATA_URL)
      const jsonData = await data.json()
      setRestaurantsData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
      
        // if(offset < 0 ){
        //   //fetch 1st 15 restaurants 
          // const data = await fetch(RESTAURANT_DATA_URL)
          // const jsonData = await data.json()
          // setRestaurantsData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // }
        // else{
        //   //fetch restaurant data for infinite scrolling
        //   let FETCH_MORE_RESTAURANT_DATA_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
        //   const data  = await fetch(FETCH_MORE_RESTAURANT_DATA_URL)
        //   const jsonData = await data.json()
        //   setRestaurantsData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // }
        // setLoading(false);
    }

    // const handleScroll = async() =>{
    //   if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
    //     setLoading(true);
    //     setOffset((prev)=>prev+16)
    //       // console.log('changing offset value')
    //   }
    // }

    // useEffect(()=>{
    //   window.addEventListener('scroll',handleScroll)
    //   return() => window.removeEventListener('scroll',handleScroll)
    // },[])


    //early return
    if(!restaurantsData) return null
    // console.log(restaurantsData)
  return (
    restaurantsData.length === 0 ? <ShimmerCardContainer numberOfCards={12}/> : (
      <div className=' mt-10 w-[100%] flex flex-wrap mx-auto ' >
        {restaurantsData.map(restaurant => {
          resSlug.current = restaurant?.cta?.link.split('/')
          resSlug.current = resSlug.current[resSlug.current.length-1]
          return(
            <Link className=' w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'  to={`/restaurants/${resSlug.current}`} key={restaurant?.info?.id}>
              <RestaurantCard {...restaurant?.info} />
            </Link>
          )
        })}
        {/* {loading && (<ShimmerCard/>)} */}
      </div>
    )
  )
}

export default Body

