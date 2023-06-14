import React, { useState } from 'react';
import Header from "./Header";
import Form from "./Form";
import TimeLines from "./TimeLines";
import Navbar from "./Navbar";

const Tasks = () => {
    
  const [listTodoToday,setListTodoToday]=useState([]);
  let addListToday=(inputText)=>setListTodoToday([...listTodoToday,inputText]);
  const [listTodoTomorrow,setListTodoTomorrow]=useState([]);
  let addListTomorrow=(inputText)=>setListTodoTomorrow([...listTodoTomorrow,inputText]);
  const [listTodoUpcoming,setListTodoUpcoming]=useState([]);
  let addListUpcoming=(inputText)=>setListTodoUpcoming([...listTodoUpcoming,inputText]);
  
  return ( 
    <div className='Tasks'>
        <Header />
        <TimeLines  listTodoToday={listTodoToday} listTodoTomorrow={listTodoTomorrow} listTodoUpcoming={listTodoUpcoming}/>
        <Form  addListToday={addListToday}addListTomorrow={addListTomorrow} addListUpcoming={addListUpcoming}/>
        <Navbar />
    </div>
   );
}
 
export default Tasks;