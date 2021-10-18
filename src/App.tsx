import React, { useState } from 'react';
import { TextField } from './components/TextField';
import Home from './pages/Home';
import {NavBar} from './components/Navbar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <TextField name='fef' age={12}/>
    </div>
  );
}

export default App;
