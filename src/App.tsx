import React, { useEffect } from 'react';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';

function App() {

  return (
    <div className="App">
      <NavBar imgSrc={PRImg}/>
      <Home/>
    </div>
  );
}

export default App;
