import React, { useContext } from 'react';
import Home from './pages/Home';
import NavBar from './components/UI/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';
import { authContext } from './context/authContext';
import { Route } from 'react-router-dom';

function App() {
  const ctx = useContext(authContext);
  return (
    <div className="App">
      <NavBar imgSrc={PRImg}>
        <Route path="/">
          <Home />
        </Route>
      </NavBar>
    </div>
  );
}

export default App;
