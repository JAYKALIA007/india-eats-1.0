import { useState , useEffect } from 'react'
import { IMAGE_CDN_URL, SEARCH_POPULAR_CUISINES_SUGGESTIONS } from '../../constants'
import { FaSearch } from "react-icons/fa";
import SearchResultsList from './SearchResultsList';

const SearchBar = () => {
    const [ searchText , setSearchText ] = useState('')
    const [ popularCuisines , setPopularCuisines ] = useState([])
    const [ searchResults , setSearchResults ] = useState([])
    const [ filterFlag , setFilterFlag ] = useState(false)
    useEffect(()=>{
        fetchPopularCuisines()
    },[])
    useEffect(()=>{

        if(searchText.length>1) 
            fetchSuggestions()
        else if(searchText.length==0)
            setFilterFlag(false)

    },[searchText])

    const fetchSuggestions = async() =>{
        setFilterFlag(true)
        const SEARCH_SUGGESTIONS = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchText}&trackingId=undefined`
        const data = await fetch(SEARCH_SUGGESTIONS)
        const jsonData = await data.json()
        // console.log(jsonData?.data?.suggestions)
        setSearchResults(jsonData?.data?.suggestions)
    }
    const fetchPopularCuisines = async() => {
        const data = await fetch(SEARCH_POPULAR_CUISINES_SUGGESTIONS)
        const jsonData = await data.json()
        setPopularCuisines(jsonData?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }
    if(!popularCuisines) return null
    const displayPopularCuisines = popularCuisines.map(cuisine => {
        return(
            <div className='w-20 mx-2' key={cuisine?.id}>
                <img className='h-12 mb-4' src={`${IMAGE_CDN_URL}${cuisine?.imageId}`}  />
                <p className='text-xs text-gray-500' >{decodeURI(cuisine?.action?.link.split('=')[1]).replace(" %26 ", " & ")}</p>
            </div>
        )
    })
    return(
        <div className=" text-center mt-16" >
            <input type="text" 
                placeholder="Search for restaurants and food" 
                className="border border-black w-3/5 rounded-sm p-3 text-lg " 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                value={searchText}
            />
            <FaSearch className=" text-gray-600 inline text-2xl font-extralight relative right-12 cursor-pointer " onClick={()=>{
                
            }}/>
            {filterFlag ? <SearchResultsList data={searchResults}  /> : (
                <>
                    <div className='w-3/5 inline-flex mt-10 text-xl font-extrabold ' >
                        <span className='block text-left ' >Popular Cuisines</span>
                    </div>
                    <div className='inline-flex mt-10' >
                        { displayPopularCuisines}
                    </div>
                </>  
            ) }
            
        </div>
    )
}
export default SearchBar