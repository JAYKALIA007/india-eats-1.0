import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
const store = configureStore({
    reducer:{
        searchSuggestionsCache : searchSuggestionsCacheSlice
    }
})

export default store