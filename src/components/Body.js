import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import useFetchAllRestaurants from '../utils/useFetchAllRestaurants'
const Body = () => {

    //fetching restaurants data from a custom hook
    const restaurantsData = useFetchAllRestaurants()

    //early return
    if(!restaurantsData) return null
  return (
    <div className='m-8 p-2 flex flex-wrap ' >
        {restaurantsData.map(restaurant => (
            <RestaurantCard key={restaurant?.data?.id} {...restaurant} />
        ))}
    </div>
  )
}

export default Body