import { useEffect } from 'react'
import { HELP_PAGE_DATA_URL,  HELP_PAGE_ACCORDION_LIST_DATA } from '../../../constants'
import AccordionList from './AccordionList'
import { useSupportDispatch, useSupportStore } from '../../utils/contexts/supportPageContext'
const Help = () => {

    const {sideNavData, accordionData, selectedOption, titleHeader} = useSupportStore()
    const dispatch = useSupportDispatch()

    useEffect(()=>{
        fetchSideNavData()
    },[])
    useEffect(()=>{
        fetchAccordionListData()
        window.scrollTo(0,0)
    },[selectedOption])

    const fetchSideNavData = async () => {
        //cache side nav data to reduce network calls
        if(sideNavData.length===0){
            const data = await fetch(HELP_PAGE_DATA_URL)
            const jsonData = await data.json()
            dispatch({type: 'addDataToSideNav', payload: jsonData?.data?.issueTypes?.data })
        }
    }

    const fetchAccordionListData = async () => {
        //cache accordion data to reduce network calls
        if(!accordionData[selectedOption]){
            const url = HELP_PAGE_ACCORDION_LIST_DATA + selectedOption
            const data= await fetch(url)
            const jsonData = await data.json()
            let tempObjToStoreAccordionData = {}
            tempObjToStoreAccordionData[selectedOption] = jsonData?.data?.issues?.data
            dispatch({type: 'addDataToAccordion', payload: tempObjToStoreAccordionData})
        }
    }

  return (
    <div className=' bg-[#37718E] tracking-wide' >
        <div className='mx-auto p-5 w-11/12 '>
            <div className=' sticky top-20 md:z-10 p-4  lg:p-10  lg:px-20 text-white bg-[#37718E]' >
                <header className='text-lg lg:text-4xl font-semibold' >Help & Support</header>
                <p className='text-xs lg:text-lg' >Let's take a step ahead and help you better.</p>
            </div>
            <div className=' lg:flex  justify-center min-h-screen bg-white lg:p-10 m-2 shadow-lg  ' >
                {sideNavData.length > 0 && (
                    <>  
                        <div className='self-start sticky top-36 lg:top-48 lg:min-h-screen flex justify-around lg:inline-block bg-slate-200 lg:w-1/4  lg:m-4 py-4 hover:cursor-pointer' >
                            {sideNavData.map(item=>(
                                <div key={item.title} onClick={()=>{
                                    dispatch({type: 'setSelectedOption', payload: item?.type})
                                    dispatch({type: 'setTitleHeader', payload: item?.title})
                                }} >
                                    <div className= {` text-[#535665] text-sm lg:text-base hover:font-semibold m-2 lg:mx-10 lg:mr-0 p-1 rounded-md lg:rounded-none lg:py-7 lg:pl-10 ${selectedOption === item.type ? ' bg-white font-semibold' : ''}`}>
                                            <p>{item.title}</p>    
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr/>
                        <div className='  lg:w-3/4  m-4 p-2' >
                            <div className=' text-xl lg:text-2xl font-semibold mt-2 lg:mt-10 mb-5' >{titleHeader}</div>
                            { <AccordionList  items={accordionData[selectedOption]} />}
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Help
