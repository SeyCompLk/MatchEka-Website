import React, { useContext } from 'react';
import Home from './pages/Home';
import NavBar from './components/UI/Navbar';
import PRImg from '../src/assets/icons/me-logo.png';
import UserLogin from './pages/Login';
import UserRegister from './pages/SignUp';
import Leaderboard from './pages/Leaderboard';
import Chat from './pages/Chat';
import Rewards from './pages/Rewards';
import AdminLayout from './components/UI/AdminLayout';
import AdminHome from './pages/Admin/Home';
import AdminSingleMatch from './pages/Admin/SingleMatch';
import { authContext } from './context/authContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const ctx = useContext(authContext);
  console.log(ctx.token);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NavBar imgSrc={PRImg}>
            <Home />
          </NavBar>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <NavBar imgSrc={PRImg}>
            <Leaderboard />
          </NavBar>
        }
      />
      <Route
        path="/chat/:matchId"
        element={
          <NavBar imgSrc={PRImg}>
            <Chat />
          </NavBar>
        }
      />
      <Route
        path="/rewards"
        element={
          <NavBar imgSrc={PRImg}>
            <Rewards />
          </NavBar>
        }
      />
      <Route path="/user/login" element={<UserLogin isAdmin={false} />} />
      <Route path="/user/register" element={<UserRegister isAdmin={false} />} />
      <Route
        path="/admin"
        element={
          ctx.token ? (
            <AdminLayout>
              <AdminHome />
            </AdminLayout>
          ) : (
            <Route path="*" element={<Navigate to="/user/login" />} />
          )
        }
      ></Route>
      <Route path="/admin/login" element={<UserLogin isAdmin={true} />} />
      <Route path="/admin/register" element={<UserRegister isAdmin={true} />} />
      <Route
        path="/admin/matches/:matchId"
        element={
          ctx.token ? (
            <AdminLayout>
              <AdminSingleMatch />
            </AdminLayout>
          ) : (
            <Route path="*" element={<Navigate to="/admin/login" />} />
          )
        }
      />
    </Routes>
  );
}

export default App;
