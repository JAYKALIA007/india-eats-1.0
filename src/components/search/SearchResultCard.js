import React from 'react'
import { SEARCH_SUGGESTIONS_IMAGE_CDN_URL } from '../../../constants'

const SearchResultCard = ({text, cloudinaryId, tagToDisplay}) => {
    // if(!data) return null
    // console.log(data)

  return (
    <div className='p-4 flex hover:bg-slate-100 ' >
        <img className='h-20 rounded-md'  src={`${SEARCH_SUGGESTIONS_IMAGE_CDN_URL}${cloudinaryId}`} alt={text}  />
        <div className='text-left py-4 mx-2' >
            <p className='font-light' >{text}</p>
            <p className='font-extralight text-gray-500' >{tagToDisplay}</p>
        </div>
    </div>
  )
}

export default SearchResultCard