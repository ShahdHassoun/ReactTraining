
import React, { useRef } from 'react';

const ChoosingModal = (props) => {
  const todayRef = useRef(null);
  const tomorrowRef = useRef(null);
  const upcomingRef = useRef(null);

  const handleCloseModal = () => {
    let selectedTime = '';

    if (todayRef.current.checked) {
      selectedTime = 'Today';
    } else if (tomorrowRef.current.checked) {
      selectedTime = 'Tomorrow';
    } else if (upcomingRef.current.checked) {
      selectedTime = 'Upcoming';
    } else {
      alert('Please choose one of these choices');
      return;
    }

    switch (selectedTime) {
      case 'Today':
        props.addListToday(props.inputText);
        break;
      case 'Tomorrow':
        props.addListTomorrow(props.inputText);
        break;
      case 'Upcoming':
        props.addListUpcoming(props.inputText);
        break;
      default:
        break;
    }

    props.setshowChooseTimeLine(false);
    props.setInputText('');
  };

  return (
    <div>
      {props.showChooseTimeLine && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter the time to do this task!</h2>
            <br />
            <ul className='chooseTime'>
              <input
                type='radio'
                id='Today'
                value='Today'
                name='time'
                ref={todayRef}
              />
              <label htmlFor='Today'>Today</label>
              <br /><br />
              <input
                type='radio'
                id='Tomorrow'
                value='Tomorrow'
                name='time'
                ref={tomorrowRef}
              />
              <label htmlFor='Tomorrow'>Tomorrow</label>
              <br /><br />
              <input
                type='radio'
                id='Upcoming'
                value='Upcoming'
                name='time'
                ref={upcomingRef}
              />
              <label htmlFor='Upcoming'>Upcoming</label>
            </ul>
            <button className='Done' onClick={handleCloseModal}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoosingModal;
