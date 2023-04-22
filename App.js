import React, { lazy, Suspense } from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './src/utils/store';
import useOnline from './src/utils/useOnline';
import OfflineMessage from './src/components/OfflineMessage';
import ShimmerSearchPage from './src/components/ShimmerSearchPage';
import ShimmerMenuPage from './src/components/ShimmerMenuPage';


//lazy load the following components
const SearchBar = lazy(()=>import('./src/components/SearchBar'))
const RestaurantMenu = lazy (()=> import('./src/components/RestaurantMenu'))
/**
 * 
 * APP LAYOUT
 *  - Header
 *      - Logo
 *      - Header Text
 *      - Search Bar
 *      - Icons(Sign in/login , cart)
 *  - Body
 *      - Restaurant List
 *      - Restaurant Cards
 *        - Image
 *        - Name
 *        - Meta data(rating, cuisines, price, time)
 *  - Footer
 *      - Copyright 
 *      - Reference Links
 * 
 */
const AppLayout = () => {
    const isOnline = useOnline()
    return(
        <>
            <Header />
            {isOnline ? <Outlet /> : <OfflineMessage />}   
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <p>Error Page</p>,
        children: [
            {
                path : '/',
                element : <Body />
            },
            {
                path: '/search',
                element : <Suspense fallback={<ShimmerSearchPage />} >
                    <SearchBar />
                </Suspense>
            },
            {
                path : '/restaurants/:slug',
                element: <Suspense fallback={<ShimmerMenuPage/>} >
                    <RestaurantMenu />
                </Suspense>
            }
        ]
    }
])
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render( 
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider> 
)
