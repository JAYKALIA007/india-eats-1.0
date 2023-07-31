import makeStore from "../customStore"

const initialState = {
    cartInfo : {}
}

function reducer(state, action){
    switch(action.type){
        case 'addToCart':
            const { resName, itemName, itemPrice } = action.payload
            let updatedCartInfo = {}
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

                updatedCartInfo = cartInfoObj

                // alert(`${itemName} added to cart`)
                // return { cartInfo: cartInfoObj }
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

                    updatedCartInfo = cartInfoObj

                    // alert(`${itemName} added to cart`)
                    // return { cartInfo: cartInfoObj }
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

                        updatedCartInfo = cartInfoObj

                        // alert(`${itemName} added to cart`)
                        // return { cartInfo: cartInfoObj }
                    }
                }
            }
            alert(`${itemName} added to cart`)
            return { cartInfo: updatedCartInfo }

        case 'emptyCart':
            const ans = window.confirm('Are you sure you want to empty cart')
            if(ans){
                return { cartInfo: {} }
            }
            return state
        default:
            return state
    }
}

export const [ 
    CartProvider, 
    useCartStore, 
    useCartDispatch 
    ] = makeStore(reducer, initialState)