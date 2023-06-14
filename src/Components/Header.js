import {FaTh}from 'react-icons/fa'
import {BsBasket3} from 'react-icons/bs'
import {HiOutlineBookOpen}from 'react-icons/hi'
import {CiCircleMore}from'react-icons/ci'

const Header = () => {
    return ( 
        <div className="header">
             <FaTh size="24" color="#B0B0B0	"/>
             <BsBasket3 size="24"color="#B0B0B0	" />
             <h1>All Tasks</h1>
             <HiOutlineBookOpen size="24"color="#B0B0B0"/>
             <CiCircleMore size="24"color="#B0B0B0	"/>
        </div>
     );
}
 
export default Header;