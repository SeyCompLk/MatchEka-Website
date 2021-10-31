import React, { useContext } from 'react';
import Home from './pages/Home';
import NavBar from './components/UI/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';
import UserLogin from './pages/Login';
import UserRegister from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import Chat from './pages/Chat';
import AdminLayout from './components/UI/AdminLayout';
import AdminHome from './pages/Admin/Home';
import AdminSingleMatch from './pages/Admin/SingleMatch';
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
        <AdminLayout>
          <Route path="/" exact>
            <AdminHome />
          </Route>
          <Route path="/matches/:matchId">
            <AdminSingleMatch />
          </Route>
        </AdminLayout>
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
          <Route path="/chat/:matchId">
            <Chat />
          </Route>
        </NavBar>
      )}
    </>
  );
}

export default App;
