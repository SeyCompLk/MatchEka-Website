import React, { useState } from 'react';
import { TextField } from './components/TextField';
import Home from './pages/Home';
import {NavBar} from './components/Navbar';
import PRImg from './logo.png';

function App() {

  return (
    <div className="App">
      <NavBar imgSrc={PRImg}/>
      <Home/>
    </div>
  );
}

export default App;
