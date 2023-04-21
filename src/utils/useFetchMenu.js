import { useState, useEffect } from 'react'
import { RESTAURANT_MENU_URL } from '../../constants'
const useFetchMenu = (resId) => {
    const [ menu, setMenu ] = useState([])
    useEffect(()=>{
        fetchMenuData()
    },[])
    const fetchMenuData = async() => {
        const data = await fetch(`${RESTAURANT_MENU_URL}${resId}`)
        const jsonData = await data.json()
        // console.log(jsonData)
        setMenu(jsonData?.data?.cards)
    }
    return menu
}

export default useFetchMenu