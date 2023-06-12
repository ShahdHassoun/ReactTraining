
import React from 'react';

const HandleUserChoice = (props) => {
  const handleCloseModal = () => {

    let valueSelected="";
    if (document.getElementById('Today').checked) {
         props.addListToday(props.inputText)
         props.setShowComponent(false);
         props.setInputText("");

      }
    else if(document.getElementById('Tomorrow').checked){
         props.addListTomorrow(props.inputText)
         props.setShowComponent(false);
         props.setInputText("");
    }
    else if(document.getElementById('Upcoming').checked){
         props.addListUpcoming(props.inputText)
         props.setShowComponent(false);
         props.setInputText("");


    }
    else alert("please choose one of these choices");

    
    
 };

  return (
    <div>
      {props.showComponent && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter the time todo this task!</h2><br/>
            <ul className='chooseTime'>
                <input type='radio' id="Today" value="Today" name="time"/>
                <label htmlFor="Today" >Today</label><br/><br/>
                <input type='radio' id="Tomorrow"value ="Tomorrow" name="time"/>
                <label htmlFor="Tomorrow" >Tomorrow</label><br/><br/>
                <input type='radio' id="Upcoming"value="Upcoming" name="time"/>
                <label htmlFor="Upcoming" >Upcoming</label>
            </ul>
            <button className="Done"onClick={handleCloseModal}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HandleUserChoice;
