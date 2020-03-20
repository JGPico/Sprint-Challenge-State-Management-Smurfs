import React, { useState, useEffect } from "react";
import axios from 'axios';

// context
import SmurfContext from '../contexts/SmurfContext';

// component
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import "./App.css";

function App () {

  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("Smurf response ", response);
      setSmurfs(response.data);
    })
    .catch(error => {
      console.log("Smurf error ", error);
    })
  },[])

  return (
    <div className='App'>
      <SmurfContext.Provider value={smurfs}>
        <h1>Bienvenue au Village du Smurf</h1>
        <p>Je n' conais pas les smurfs, desole</p>
        <SmurfForm />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  )

}

export default App;
