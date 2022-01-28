import React, { ReactElement, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';
import classes from './NavBar.module.css';

interface Props {
  imgSrc: string;
  children: ReactElement | ReactElement[];
}

const NavBar = ({ imgSrc, children }: Props) => {
  const ctx = useContext(authContext);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <header className={classes.Header}>
        <div
          className={classes.Hamburger}
          onClick={() => {
            setClicked((curr) => !curr);
          }}
          style={{
            flexDirection: clicked ? 'column' : 'row',
            height: clicked ? '7vh' : 'auto',
            transition: '0.3s all ease',
          }}
        >
          <div className={classes.Bar}></div>
          <div className={classes.Bar}></div>
          <div className={classes.Bar}></div>
        </div>
        <NavLink
          className={`${classes.Brand} && ${clicked && classes.DoNotShow}`}
          to="/"
        >
          <img src={imgSrc} alt="Logo" />
          <span>Match Eka</span>
        </NavLink>
        {clicked && (
          <div
            className={classes.Overlay}
            onClick={() => {
              setClicked((curr) => !curr);
            }}
          ></div>
        )}
        <nav className={`${classes.Nav} && ${!clicked && classes.DoNotShow}`}>
          <ul>
            {clicked && (
              <NavLink className={classes.Brand2} to="/">
                <img src={imgSrc} alt="Logo" />
                <span>Match Eka</span>
              </NavLink>
            )}
            <li>
              <NavLink to="/rewards" className={(navData) => navData.isActive ? classes.Active : "" }>
                Rewards
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" className={(navData) => navData.isActive ? classes.Active : "" }>
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/pastMatches" className={(navData) => navData.isActive ? classes.Active : "" }>
                Past Matches
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(navData) => navData.isActive ? classes.Active : "" }>
                About
              </NavLink>
            </li>
            {ctx.token ? (
              <li>
                <NavLink to="/profile" className={(navData) => navData.isActive ? classes.Active : "" }>
                  Profile
                </NavLink>
              </li>
            ) : (
              <li>
              <NavLink to="/login" className={(navData) => navData.isActive ? classes.Active : "" }>
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className={classes.HamHelper}></div>
      </header>
      <main
        style={{
          width: '100%',
          height: '87vh',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default NavBar;
