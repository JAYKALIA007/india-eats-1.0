import SearchBar from "../search/SearchBar"
import site_logo from '../../assets/site_logo.jpg'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <div className="grid grid-flow-col p-4 shadow-lg bg-white  sticky top-0 z-10 px-8 xl:px-20" >
            <Link to='/' className="col-span-4 flex align-middle  " >
                <img className="h-12 rounded-md" src={site_logo} alt="site logo thumbnail"/>
                <h3 className="text-3xl px-4 relative top-1 " >India Eats</h3>
            </Link>
            <div className="col-span-5  "></div>
            <div className="col-span-3  " >
                <Navbar />
            </div>
        </div>
    )
}

export default Header