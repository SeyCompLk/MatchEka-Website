import React, { useContext } from 'react';
import Home from './pages/Home';
import NavBar from './components/UI/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';
import UserLogin from './pages/Login';
import UserRegister from './pages/SignUp';
import { authContext } from './context/authContext';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const ctx = useContext(authContext);
  console.log(ctx.token);
  return (
    <NavBar imgSrc={PRImg}>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/user/login">
        {ctx.token === null ? <UserLogin /> : <Redirect to="/" />}
      </Route>
      <Route path="/user/register">
        {ctx.token === null ? <UserRegister /> : <Redirect to="/" />}
      </Route>
    </NavBar>
  );
}

export default App;
