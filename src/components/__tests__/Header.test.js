import { render } from '@testing-library/react'
import Header from '../page_layout/Header'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
test("logo should load when header renders",()=>{

    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store} >
                <Header/>
            </Provider>
        </StaticRouter>
    )
    // console.log(header)

    //check if logo image renders
    const logoImg = header.getByTestId('logo-image')
    expect(logoImg.src).toBe(`http://localhost/dummyLogo.jpg`)

})

