import { useState, useEffect } from 'react'
const useGeoLocation = () =>{
    const [ currentLocation, setCurrentLocation ] = useState({
        latitude:'',
        longitude:''
    })
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position=>{
            // console.log(position)
            setCurrentLocation({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            })
        })
    },[])
    return currentLocation
}

export default useGeoLocation

