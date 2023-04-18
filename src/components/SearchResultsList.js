import React from 'react'
import SearchResultCard from './SearchResultCard'

const SearchResultsList = ({data}) => {
    if(!data) return null
    console.log(data)
  return (
    <div className='grid grid-flow-col ' >
        <div className='col-span-4'>

        </div>

        <div className='w-full mt-10 col-span-4' >
            {data.map(res=>(
                <SearchResultCard {...res}/>
            ))}
        </div>
        <div className='col-span-4'>

        </div>
    </div>
  )
}

export default SearchResultsList