import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers:{
        addToCart: (state,action) => {
            state.cart.push(action.payload)
        },
        removeFromcart: (state,action) => {

            console.log(action.payload)

            // const index = array.indexOf(5);
            // if (index > -1) { // only splice array when item is found
            // array.splice(index, 1); // 2nd parameter means remove one item only
            // }
        }
    }
})

export default cartSlice.reducer 
export const { addToCart, removeFromCart }  = cartSlice.actions