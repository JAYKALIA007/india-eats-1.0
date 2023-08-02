import makeStore from "../customStore"

const initialState = {
        searchCacheItems:{}
}

function reducer(state, action){
    switch(action.type){
        case 'addToSearchCacheSlice':
            const key  = Object.keys(action.payload)[0]
            let tempState = JSON.parse(JSON.stringify(state))
            tempState.searchCacheItems[key] = action.payload[key]
            return tempState
        default: 
            return state
    }
}

export const [ 
    SearchSuggestionsCacheProvider, 
    useSearchSuggestionsCacheStore,
    useSearchSuggestionsCacheDispatch
   ] = makeStore(reducer, initialState)
