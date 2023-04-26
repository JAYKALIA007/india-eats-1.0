import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartInfo:{}
    },
    reducers:{
        addToCart: (state,action) => {
            // state.cartInfo = action.payload
            const { resName, itemName, itemPrice } = action.payload

            if(Object.keys(state.cartInfo).length === 0)
            {
                let cartInfoObj = {} 
                let items = [] 
                let itemObj = {}
                itemObj.name = itemName
                itemObj.count = 1
                itemObj.price = itemPrice
                items.push(itemObj)
                cartInfoObj.restaurantName = resName
                cartInfoObj.items =  items

                state.cartInfo = cartInfoObj
                alert(`${itemName} added to cart`)
            }
            else{
                if(resName == state.cartInfo?.restaurantName){
                    let cartInfoObj = JSON.parse(JSON.stringify((state.cartInfo)))
                    let itemFoundInArrayFlag = 0;
                    let obj = cartInfoObj?.items.find((item, i) => {
                        if (item.name == itemName) {
                        cartInfoObj?.items[i] = { name: item.name, count: item.count + 1, price : item.price };
                            itemFoundInArrayFlag = 1
                            return true; // stop searching
                        }
                    });

                    if(itemFoundInArrayFlag == 0){
                    let itemObj = {}
                    itemObj.name = itemName
                    itemObj.count = 1
                    itemObj.price = itemPrice
                    cartInfoObj?.items.push(itemObj)
                    }

                    state.cartInfo = cartInfoObj
                    alert(`${itemName} added to cart`)
                }
                else{
                    const ans = window.confirm('Are you sure you want to reset cart')
                    if(ans){
                        let cartInfoObj = {} 
                        let items = [] 
                        let itemObj = {}
                        itemObj.name = itemName
                        itemObj.count = 1
                        itemObj.price = itemPrice
                        items.push(itemObj)
                        cartInfoObj.restaurantName = resName
                        cartInfoObj.items =  items

                        state.cartInfo = cartInfoObj
                        alert(`${itemName} added to cart`)
                    }
                }
            }

        },
        removeFromcart: (state,action) => {

            // console.log(action.payload)

            // const index = array.indexOf(5);
            // if (index > -1) { // only splice array when item is found
            // array.splice(index, 1); // 2nd parameter means remove one item only
            // }
        },
        emptyCart: (state)=>{
            state.cartInfo = {}
        }
    }
})

export default cartSlice.reducer 
export const { addToCart, removeFromCart, emptyCart }  = cartSlice.actions