import {useState} from 'react'
import RestaurantMenuItems from './RestaurantMenuItems'

const RestaurantMenuSections = ({cards , restaurantName}) => {
    const menuCards = cards.filter(card => card?.card?.card.hasOwnProperty('title'))
    // console.log(menuCards)
  return (
    <div>
        { menuCards.map( (card,index) =>(
                <RestaurantMenuItems key={index} data={card?.card?.card?.itemCards && card?.card?.card?.itemCards } title={card?.card?.card?.title} restaurantName={restaurantName}/>
        ))}
    </div>
  )
}

export default RestaurantMenuSections
