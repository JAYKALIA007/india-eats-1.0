import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
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
        <Body />
    </>
)
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render( <AppLayout />)
