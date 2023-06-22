import { configureStore } from "@reduxjs/toolkit";
import searchSuggestionsCacheSlice from "./searchSuggestionsCacheSlice";
import cartSlice from "./cartSlice";
import supportPageCacheSlice from "./supportPageCacheSlice";
const store = configureStore({
    reducer:{
        searchSuggestionsCache : searchSuggestionsCacheSlice,
        cart : cartSlice,
        supportPageCache : supportPageCacheSlice
    }
})

export default store