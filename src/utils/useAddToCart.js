import { useSelector, useDispatch } from "react-redux"
const useAddToCart = (resName , itemName) => {
    console.log(resName, itemName)
    const cartInfo = useSelector(store=> store.cart)
    console.log(cartInfo)
}

export default useAddToCart