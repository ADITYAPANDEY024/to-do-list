import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import MainFrame from './components/MainFrame';
import Alert from './components/Alert';
function App() {
  const [todo, settodo] = useState()
  const [display, setdisplay] = useState("none")
  return (
    <div className="App">
      <Navbar/>
      <Alert todo={todo} showAlert={settodo} display={display} />
      <MainFrame todo={todo} showAlert={settodo} display={display} setdisplay={setdisplay}/>
    </div>
  );
}

export default App;
