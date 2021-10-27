import React, { useContext } from 'react';
import Home from './pages/Home';
import NavBar from './components/UI/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';
import UserLogin from './pages/Login';
import UserRegister from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import AdminHome from './pages/Admin/Home';
import { authContext } from './context/authContext';
import { Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const ctx = useContext(authContext);
  const router = useLocation();
  console.log(ctx.token);
  return (
    <>
      <Route path="/user/login">
        {ctx.token === null ? <UserLogin /> : <Redirect to="/" />}
      </Route>
      <Route path="/user/register">
        {ctx.token === null ? <UserRegister /> : <Redirect to="/" />}
      </Route>
      <Route path="/admin">
        <Route path="/">
          <AdminHome />
        </Route>
      </Route>
      {!(
        router.pathname === '/user/login' ||
        router.pathname === '/user/register' ||
        router.pathname.startsWith('/admin')
      ) && (
        <NavBar imgSrc={PRImg}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/leaderboard" exact>
            <Leaderboard />
          </Route>
        </NavBar>
      )}
    </>
  );
}

export default App;
