import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form";
import TimeLines from "./Components/TimeLines";
import Navbar from "./Components/Navbar";
function App() {
  const [listTodoToday,setListTodoToday]=useState([]);
  let addListToday=(inputText)=>setListTodoToday([...listTodoToday,inputText]);
  const [listTodoTomorrow,setListTodoTomorrow]=useState([]);
  let addListTomorrow=(inputText)=>setListTodoTomorrow([...listTodoTomorrow,inputText]);
  const [listTodoUpcoming,setListTodoUpcoming]=useState([]);
  let addListUpcoming=(inputText)=>setListTodoUpcoming([...listTodoUpcoming,inputText]);
  
  return (
    <div className="App">
      <Header />
      <TimeLines  listTodoToday={listTodoToday} listTodoTomorrow={listTodoTomorrow} listTodoUpcoming={listTodoUpcoming}/>
      <Form  addListToday={addListToday}addListTomorrow={addListTomorrow} addListUpcoming={addListUpcoming}/>
      <Navbar />
    </div>
  );
}

export default App;
