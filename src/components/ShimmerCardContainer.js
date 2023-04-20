import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerCardContainer = ({numberOfCards}) => {
    return(
        <div className='m-8 flex flex-wrap' >
            {
                Array(numberOfCards).fill('').map((e,index)=>(
                    <ShimmerCard key={index}  />
                ))
            }
        </div>
    )
  
}

export default ShimmerCardContainer