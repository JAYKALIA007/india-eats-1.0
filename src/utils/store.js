import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        searchSuggestionsCache : searchSuggestionsCacheSlice,
        cart : cartSlice
    }
})

export default store