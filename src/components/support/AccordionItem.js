import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'
const AccordionItem = ({ item, selectedIndex }) => {

  return (
    <div className=" border-b lg:border-b-2 border-gray-200 hover:cursor-pointer py-4 lg:p-6 text-[#3D4152] font-light " >
        <div className="flex justify-between" >
            <p className=" text-xs lg:text-lg hover:text-orange-400 pr-1 lg:pr-0 " >{item.title}</p>
            { selectedIndex === item.id ? <HiOutlineChevronUp /> : <HiOutlineChevronDown  />  }
        </div>
        <div className= {`text-xs  lg:text-sm w-11/12 lg:w-4/5 ${selectedIndex !== item.id ? 'hidden' : ' my-5  '}`} >
            {
                ( item.description || item.hyperLinkText ) && (
                    <p className={`${item.description ? 'text-[#3D4152]' : item.hyperLinkText ? 'text-orange-400 font-semibold' : ''}`} >{ item.description || item.hyperLinkText}</p>
                )
            }
            {
                ( item.options[0]?.type === 'email' ) && (
                    <div>
                        <button className='pt-6' >
                            <a className='p-2 px-4 text-orange-400 font-semibold border-2 border-orange-400' href="mailto:support@swiggy.in?subject=I want to provide feedback">SEND AN EMAIL</a>
                            <p className='text-[9px] font-extralight mt-2' >{item.options[0].waitTime}</p>
                        </button>
                    </div>
                )
            }
        </div>
    </div> 
  );
};

export default AccordionItem;
