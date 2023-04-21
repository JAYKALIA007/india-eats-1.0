import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchBar from './src/components/SearchBar';
import RestaurantMenu from './src/components/RestaurantMenu';
import { Provider } from 'react-redux'
import store from './src/utils/store';
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
const AppLayout = () => (
    <>
        <Header />
        <Outlet/>
    </>
)
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
                element : <SearchBar />
            },
            {
                path : '/restaurants/:slug',
                element: <RestaurantMenu />
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
