import { useState } from 'react';
import { IconContext } from 'react-icons';
import {AiFillPlusCircle}from 'react-icons/ai'
import HandleUserChoice from './HandleUserChoice';
const Form = ({addListToday,addListTomorrow,addListUpcoming}) => {
    const [inputText,setInputText]=useState('');
    const [showComponent, setShowComponent] = useState(false);
    
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
                         onClick={() => {
                                   if (inputText.trim().length !== 0) {
                                   setShowComponent(true);
                                   }
                                   else alert("Please enter a task to add!")
                                  }}
                    />
                </div>

                </IconContext.Provider>
                
            </form>

            {showComponent && <HandleUserChoice  inputText={inputText}
                                                 showComponent={showComponent} 
                                                 setShowComponent={setShowComponent}
                                                 addListToday={addListToday}
                                                 addListTomorrow={addListTomorrow}
                                                 addListUpcoming={addListUpcoming} 
                                                 setInputText={setInputText}/>}
            
        </div> 
        
        );
}
 
export default Form;