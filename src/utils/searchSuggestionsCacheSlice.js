import { createSlice } from "@reduxjs/toolkit";
const searchSuggestionsCacheSlice = createSlice(
    {
        name: 'searchSuggestionsCache',
        initialState:{
            cache:{}
        },
        reducers:{
            addToSearchCacheSlice : (state,action) => {
                const key = Object.keys(action.payload)[0]
                state.cache[key] = action.payload[key]
            }
        }
    }
)

export default searchSuggestionsCacheSlice.reducer
export const { addToSearchCacheSlice } = searchSuggestionsCacheSlice.actions