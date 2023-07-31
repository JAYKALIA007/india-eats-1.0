import makeStore from "../customStore"

const initialState = {
    sideNavData : [],
    accordionData : {},
    selectedOption:  `partner-onboarding`,
    titleHeader:   `Partner Onboarding`,
}

function reducer(state, action){
    switch(action.type){
        case 'addDataToSideNav':
            return { ...state, sideNavData : action.payload }
        case 'addDataToAccordion':
            let key = Object.keys(action.payload)[0]
            let tempState = JSON.parse(JSON.stringify(state))
            tempState.accordionData[key] = action.payload[key]
            return tempState
        case 'setSelectedOption':
            return { ...state, selectedOption : action.payload}
        case 'setTitleHeader':
            return { ...state, titleHeader : action.payload}
        default:
            return state
    }
}

export const [ 
    SupportPageCacheProvider, 
    useSupportStore, 
    useSupportDispatch 
    ] = makeStore(reducer, initialState)