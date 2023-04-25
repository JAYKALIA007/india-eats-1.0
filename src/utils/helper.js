export const totalCartPrice = (cartItemsArr) => {
    let totalPrice = 0 
    cartItemsArr.map(item=>{
        totalPrice+= item?.price * item?.count
    })
    return totalPrice
}