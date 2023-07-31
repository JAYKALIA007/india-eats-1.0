import { useState } from 'react'
import AccordionItem from './AccordionItem'
const AccordionList = ({items}) => {
    const [ selectedIndex , setSelectedIndex ] = useState(0)
  return items!==undefined && (
    <div>
        {items.map(item=>(
            <div key={item.id} onClick={()=>setSelectedIndex(item.id)} >
                <AccordionItem  item={item} selectedIndex={selectedIndex} />
            </div>
        ))}
    </div>
  )
}

export default AccordionList