import SearchBar from '../search/SearchBar'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import '@testing-library/jest-dom'
import { POPULAR_CUISINES_DATA, SEARCH_RESULTS_DATA } from '../../utils/helper'
test('should display the placehloder text in the search bar', ()=>{

    const placeholderTextString = 'Search for restaurants and food'

    const searchBar = render(
            <Provider store={store} >
                <SearchBar />
            </Provider>
    )
    const placeholderText = searchBar.getByPlaceholderText(placeholderTextString)
    expect(placeholderText).toBeInTheDocument()
})

test('input field value should be empty string on initial render', ()=>{
    const searchBar = render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )
    const inputFieldString = searchBar.getByTestId('search-bar')
    expect(inputFieldString.value).toBe('')
})

test('input field should render the entered text while typing', ()=>{
    const searchBar = render(
        <Provider store={store}>
            <SearchBar />
        </Provider>
    )
    const inputFieldString = searchBar.getByTestId('search-bar')
    fireEvent.change(inputFieldString, { target : { value : 'noodles'}})
    expect(inputFieldString.value).toBe('noodles')
})

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => Promise.resolve(POPULAR_CUISINES_DATA)
    })
})
test('popular cuisines should render after making an API call', async ()=>{

    const searchBar = render(
        <Provider  store={store}>
            <SearchBar />
        </Provider>
    )
    await waitFor(()=>{
        const cuisinesList = searchBar.getAllByTestId('cuisines-list')
        expect(cuisinesList.length).toBe(12)
    } )

})

// test('search results should appear on entering text to search input', async()=>{

//     const searchBar = render(
//         <Provider store={store}>
//             <SearchBar />
//         </Provider>
//     )

// })

