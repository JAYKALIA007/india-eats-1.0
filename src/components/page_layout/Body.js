import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from '../restaurants/RestaurantCard'
import { RESTAURANT_DATA_URL } from '../../../constants'
import ShimmerCard from '../shimmer/ShimmerCard'
import ShimmerCardContainer from '../shimmer/ShimmerCardContainer'

const Body = () => {

   const [ restaurantsData , setRestaurantsData ] = useState([])
   const [ offset , setOffset ] = useState(-1)
   const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetchRestaurantData() 
    },[offset])

    const fetchRestaurantData = async() => {
        if(offset < 0 ){
          //fetch 1st 15 restaurants 
          const data = await fetch(RESTAURANT_DATA_URL)
          const jsonData = await data.json()
          const modifiedData = jsonData?.data?.cards[2]?.data?.data?.cards.map(card => {
            return card?.data
          })
          setRestaurantsData(modifiedData)
        }
        else{
          //fetch restaurant data for infinite scrolling
          let FETCH_MORE_RESTAURANT_DATA_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
          const data  = await fetch(FETCH_MORE_RESTAURANT_DATA_URL)
          const jsonData = await data.json()
          const modifiedData = jsonData?.data?.cards.map(card => {
            return card?.data?.data
          })
          setRestaurantsData( prev => prev.concat(modifiedData))
        }
        setLoading(false);
    }

    const handleScroll = async() =>{
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        setLoading(true);
        setOffset((prev)=>prev+16)
          // console.log('changing offset value')
      }
    }

    useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
      return() => window.removeEventListener('scroll',handleScroll)
    },[])


    //early return
    if(!restaurantsData) return null
    // console.log(restaurantsData)

  return (
    restaurantsData.length === 0 ? <ShimmerCardContainer numberOfCards={12}/> : (
      <div className='m-8 p-2 flex flex-wrap lg:mx-8 lg:my-0 xl:m-0 2xl:m-2 ' >
          {restaurantsData.map(restaurant => (
            <Link to={`/restaurants/${restaurant?.slugs?.restaurant}-${restaurant?.id}`} key={restaurant?.id}>
              <RestaurantCard key={restaurant?.id} {...restaurant} />
            </Link>
          ))}
          {loading && (<ShimmerCard/>)}
      </div>
    )
  )
}

export default Body