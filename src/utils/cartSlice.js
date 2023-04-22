import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInfo:{}
    },
    reducers:{
        addToCart: (state,action) => {
            console.log(action.payload)
            // state.cart.push(action.payload)
            state.cartInfo = action.payload
        },
        removeFromcart: (state,action) => {

            // console.log(action.payload)

            // const index = array.indexOf(5);
            // if (index > -1) { // only splice array when item is found
            // array.splice(index, 1); // 2nd parameter means remove one item only
            // }
        }
    }
})

export default cartSlice.reducer 
export const { addToCart, removeFromCart }  = cartSlice.actions


// let {restaurantName, itemName} = action.payload
//             console.log(restaurantName, itemName)
//             if(Object.keys(state.cartInfo).length === 0)
//             {
//                 console.log('cart is empty')
//                 let cartInfoObj = {} 

//                 let itemObj = {}
//                 itemObj[itemName] = 1
                
//                 cartInfoObj.restaurantName = restaurantName
//                 cartInfoObj.items =  itemObj

//                 state.cartInfo = cartInfoObj

//                 console.log(state.cartInfo)
//             }
//             else{
//                 console.log('hellos')
//                 if(restaurantName == cartInfo?.restaurantName){
//                     if(cartInfo.items[itemName])console.log('item already present in cart')
//                     else {
//                       console.log('item not present in cart')
//                       cartInfo.items[itemName] = 1
//                     }
//                     // cartInfo.items[itemName] = (cartInfo.items[itemName] + 1 ) || 1  
//                   }
//                   else{
//                     console.log('show a popup saying items already in cart. are you sure you want to reset')
//                     let cartInfoObj = {} 

//                     let itemObj = {}
//                     itemObj[itemName] = 1
                    
//                     cartInfoObj.restaurantName = restaurantName
//                     cartInfoObj.items =  itemObj

//                     state.cartInfo = cartInfoObj

//                     console.log(state.cartInfo)
//                   }
//             }