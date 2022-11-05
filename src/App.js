import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function App() {

  const [names, setNames] = useState([])
  const [text, setText] = useState("")

  const addName = () => {
    setNames(names.concat(text))
  }
  const remove = () => {
    //todo ner hasah
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <TextField
            id="filled-basic"
            label="Нэрээ оруул"
            variant="filled"
            value={text}
            onChange={(e) =>{setText(e.target.value)}}
          />
          <Button variant="contained" onClick={addName}>Add</Button>
        </div>
        <ul>
          {names.map(name =><li>{name}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
