import SearchBar from "./SearchBar"
import site_logo from '../assets/site_logo.jpg'
import Navbar from "./Navbar"
const Header = () => {
    return(
        <div className="grid grid-flow-col p-4 shadow-lg bg-white  sticky top-0 z-10" >
            <div className="col-span-3 flex align-middle" >
                <img className="h-12 rounded-md relative bottom-1 " src={site_logo} alt="site logo thumbnail"/>
                <h3 className="text-3xl px-4" >India Eats</h3>
            </div>
            <div className="col-span-6" >
                <SearchBar />
            </div>
            <div className="col-span-3" >
                <Navbar />
            </div>
        </div>
    )
}

export default Header