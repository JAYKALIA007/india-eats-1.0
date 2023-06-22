import { createSlice } from "@reduxjs/toolkit";
const supportPageCacheSlice = createSlice({
    name : `supportPageCache`,
    initialState:{
        sideNavData : [],
        accordionData : {}
    },
    reducers: {
        addDataToSideNav : (state, action) => {
            state.sideNavData = action.payload
        },
        addDataToAccordion : (state,action)=>{
            let key = Object.keys(action.payload)[0]
            state.accordionData[key] = action.payload[key]
        }
    }

})

export default supportPageCacheSlice.reducer
export const { addDataToSideNav, addDataToAccordion }  = supportPageCacheSlice.actions