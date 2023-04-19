import { useState, useEffect } from 'react'
import { RESTAURANT_DATA_URL } from '../../constants'

const useFetchAllRestaurants = () => {
    const [ restaurantsData , setRestaurantsData ] = useState([])
    useEffect(()=>{
        fetchRestaurantData()
    },[])
    const fetchRestaurantData = async() => {
        const data = await fetch(RESTAURANT_DATA_URL)
        const jsonData = await data.json()
        // console.log(jsonData?.data?.cards[2]?.data?.data?.cards)
        setRestaurantsData(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    return restaurantsData
}

export default useFetchAllRestaurants