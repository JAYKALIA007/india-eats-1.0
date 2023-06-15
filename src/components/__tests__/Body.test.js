import Body from '../page_layout/Body'
import  { render, waitFor } from '@testing-library/react'
import { RESTAURANT_DATA } from '../../utils/helper'
import { StaticRouter } from 'react-router-dom/server'

test('dummy test', ()=>{

    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json : () => Promise.resolve(RESTAURANT_DATA)
        })
    })
    const body = render(
        <StaticRouter>
            <Body />
        </StaticRouter>
    )
    
})

test('shimmer cards should appear on initial render', () => {
    const body = render(
        <StaticRouter>
            <Body />
        </StaticRouter>
    )
    const shimmerCards = body.getAllByTestId('shimmer-card')
    expect(shimmerCards.length).toBe(12)
})

test('restaurant cards should appear after the shimmer effect',async () =>{
    const body = render(
        <StaticRouter>
            <Body />
        </StaticRouter>
    )
    await waitFor(()=>{
        const resList = body.getAllByTestId('restaurant-card-list')
        expect(resList.length).toBe(15)
    })
})