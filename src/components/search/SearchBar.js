import { useState , useEffect, useRef } from 'react'
import { IMAGE_CDN_URL, SEARCH_POPULAR_CUISINES_SUGGESTIONS } from '../../../constants'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';
import SearchResultsList from './SearchResultsList';
import ShimmerSearchPage from '../shimmer/ShimmerSearchPage';
import { useDispatch, useSelector } from 'react-redux'
import { addToSearchCacheSlice } from '../../utils/searchSuggestionsCacheSlice';
const SearchBar = () => {
    const [ searchText , setSearchText ] = useState('')
    const [ popularCuisines , setPopularCuisines ] = useState([])
    const [ searchResults , setSearchResults ] = useState([])
    const [ filterFlag , setFilterFlag ] = useState(false)
    const dispatch = useDispatch()
    const searchCacheItems = useSelector(store=> store.searchSuggestionsCache.cache)

    const inputRef = useRef(null)

    useEffect(()=>{
        fetchPopularCuisines()
    },[])
    useEffect(()=>{

        //debouncing for better performance
       const timeout = setTimeout(()=>{
        if(searchText.length>1) 
            fetchSuggestions()
        else if(searchText.length==0)
            setFilterFlag(false)
       },200)

       return() => clearTimeout(timeout)


    },[searchText])

    const fetchSuggestions = async() =>{
        setFilterFlag(true)
        if(searchCacheItems[searchText]){
            setSearchResults(searchCacheItems[searchText])
        }
        else{
            const SEARCH_SUGGESTIONS = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${searchText}&trackingId=undefined`
            const data = await fetch(SEARCH_SUGGESTIONS)
            const jsonData = await data.json()

            //add to cache
            const obj = {}
            obj[searchText] = jsonData?.data?.suggestions
            dispatch(addToSearchCacheSlice({
                [searchText] : jsonData?.data?.suggestions
            }))    
            setSearchResults(jsonData?.data?.suggestions)
        }
    }
    const fetchPopularCuisines = async() => {
        const data = await fetch(SEARCH_POPULAR_CUISINES_SUGGESTIONS)
        const jsonData = await data.json()
        setPopularCuisines(jsonData?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }
    if(!popularCuisines) return null
    const displayPopularCuisines = popularCuisines.map(cuisine => {
        const itemName = decodeURI(cuisine?.action?.link.split('=')[1]).replace(" %26 ", " & ")
        return(
            <div className='w-20  mx-2 hover:cursor-pointer ' 
                key={cuisine?.id} 
                onClick={()=>{
                    // console.log(itemName)
                    setSearchText(itemName)
                }} 
            >
                <img className='h-12 lg:h-8 xl:h-10  mb-4' src={`${IMAGE_CDN_URL}${cuisine?.imageId}`}  />
                <p className='text-xs text-gray-500' >{itemName}</p>
            </div>
        )
    })
    return(
        <div className=" text-center mt-16" >
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Search for restaurants and food" 
                className="border border-black w-3/5 rounded-sm p-3 text-sm sm:text-lg " 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                value={searchText}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        inputRef.current.blur()
                    }
                }}
            />
            {searchText === '' ? (
                <FaSearch className=" text-gray-600 inline text-2xl font-extralight relative right-12 cursor-pointer " />
            ):(<RxCross1  className=" text-gray-600 inline text-2xl relative right-12 bottom-1 cursor-pointer "
                          onClick={()=>setSearchText('')}    
            />)}
            {popularCuisines.length === 0 ? <ShimmerSearchPage /> : filterFlag ? 
                    <SearchResultsList data={searchResults}  /> : (
                    <>
                        <div className='w-3/5  inline-flex mt-10 text-xl font-extrabold ' >
                            <span className='block text-left ' >Popular Cuisines</span>
                        </div>
                        <div className='inline-flex mt-10 w-[55%] overflow-x-scroll'  >
                            { displayPopularCuisines}
                        </div>
                    </>  
                ) 
            }  
        </div>
    )
}
export default SearchBar