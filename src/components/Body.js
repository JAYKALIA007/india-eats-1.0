import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import useFetchAllRestaurants from '../utils/useFetchAllRestaurants'
const Body = () => {

    //fetching restaurants data from a custom hook
    const restaurantsData = useFetchAllRestaurants()

    //early return
    if(!restaurantsData) return null
    // console.log(restaurantsData)
  return (
    <div className='m-8 p-2 flex flex-wrap ' >
        {restaurantsData.map(restaurant => (
          <Link to={`/restaurants/${restaurant?.data?.slugs?.restaurant}-${restaurant?.data?.id}`} key={restaurant?.data?.id}>
            <RestaurantCard key={restaurant?.data?.id} {...restaurant} />
          </Link>
        ))}
    </div>
  )
}

export default Body