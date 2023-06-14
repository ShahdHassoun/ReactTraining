import {AiFillCheckCircle} from 'react-icons/ai'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import{MdOfflineBolt} from 'react-icons/md'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="tasks">
                <AiFillCheckCircle size="22"color="#D0D0D0	" />
                <p>Tasks</p>
            </div>
            <div className="Calendar">
                <BsFillCalendarDateFill size="22"color="#D0D0D0	"/>
                <p>Calendar</p>
            </div>
            <div className="Moment">
                <MdOfflineBolt size="22"color="#D0D0D0	"/>
                <p>Moment</p>
            </div>
            

        </div>
         
     );
}
 
export default Navbar;