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
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const ctx = useContext(authContext);
  console.log(ctx.token);
  return (
    <Switch>
      <Route path="/" exact>
        <NavBar imgSrc={PRImg}>
          <Home />
        </NavBar>
      </Route>
      <Route path="/leaderboard">
        <NavBar imgSrc={PRImg}>
          <Leaderboard />
        </NavBar>
      </Route>
      <Route path="/chat/:matchId">
        <NavBar imgSrc={PRImg}>
          <Chat />
        </NavBar>
      </Route>
      <Route path="/user/login">
        <UserLogin isAdmin={false} />
      </Route>
      <Route path="/user/register">
        <UserRegister isAdmin={false} />
      </Route>
      <Route path="/admin" exact>
        {ctx.token ? (
          <AdminLayout>
            <AdminHome />
          </AdminLayout>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
      <Route path="/admin/login">
        <UserLogin isAdmin={true} />
      </Route>
      <Route path="/admin/register">
        <UserRegister isAdmin={true} />
      </Route>
      <Route path="/admin/matches/:matchId" exact>
        {ctx.token ? (
          <AdminLayout>
            <AdminSingleMatch />
          </AdminLayout>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Route>
    </Switch>
  );
}

export default App;
