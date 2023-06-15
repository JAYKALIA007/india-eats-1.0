import { render } from '@testing-library/react'
import Navbar from '../page_layout/Navbar'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
test("cart value should be zero on initial render", () =>{

    //load navbar
    const navbar = render(
        <StaticRouter>
            <Provider store={store} >
                <Navbar/>
            </Provider>
        </StaticRouter>
    )
    // console.log(navbar)

    //check if initial rendered value is a string 'Cart'
    const cartCount = navbar.getAllByTestId('cart-count')
    expect(cartCount[0].innerHTML.split('</svg> ')[1]).toBe('Cart')
    expect(cartCount[1].innerHTML).toBe('Cart')

})