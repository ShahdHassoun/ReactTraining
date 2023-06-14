import { useState } from 'react';
import { IconContext } from 'react-icons';
import {AiFillPlusCircle}from 'react-icons/ai'
import ChoosingModal from './ChoosingModal';

const Form = ({addListToday,addListTomorrow,addListUpcoming}) => {
    const [inputText,setInputText]=useState('');
    const [showChooseTimeLine, setshowChooseTimeLine] = useState(false);
    
    const checkInputFeild=() => {
        if (inputText.trim().length !== 0) {
            setshowChooseTimeLine(true);
        }
        else alert("Please enter a task to add!")
       }
    return (
        <div className="form">
            <form>
                
                <input className="task"
                        placeholder="I want to ..."
                        value={inputText}
                        type="text"
                        onChange={e=>setInputText(e.target.value)}/>
                
                <IconContext.Provider  value={{color: '#00BFFF',size:'40'}}>
                <div className='plusIcon'>
                    <AiFillPlusCircle
                         color='#00BFFF'
                         size={40}
                         onClick={checkInputFeild}
                    />
                </div>

                </IconContext.Provider>
                
            </form>

            {showChooseTimeLine && <ChoosingModal  inputText={inputText}
                                                 showChooseTimeLine={showChooseTimeLine} 
                                                 setshowChooseTimeLine={setshowChooseTimeLine}
                                                 addListToday={addListToday}
                                                 addListTomorrow={addListTomorrow}
                                                 addListUpcoming={addListUpcoming} 
                                                 setInputText={setInputText}/>}
            
        </div> 
        
        );
}
 
export default Form;