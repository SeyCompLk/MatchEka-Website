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
        >
          <div className={classes.Bar}></div>
          <div className={classes.Bar}></div>
          <div className={classes.Bar}></div>
        </div>
        <NavLink className={classes.Brand} to="/">
          <img src={imgSrc} alt="Logo" />
          <span>Match Eka</span>
        </NavLink>
        <nav className={`${classes.Nav} && ${!clicked && classes.DoNotShow}`}>
          <ul>
            <li>
              <NavLink to="/rewards" activeClassName={classes.Active}>
                Rewards
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" activeClassName={classes.Active}>
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/pastMatches" activeClassName={classes.Active}>
                Past Matches
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={classes.Active}>
                About
              </NavLink>
            </li>
            {ctx.token ? (
              <li>
                <NavLink to="/profile" activeClassName={classes.Active}>
                  Profile
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login" activeClassName={classes.Active}>
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
          overflowY: clicked ? 'hidden' : 'scroll',
        }}
      >
        {children}
      </main>
    </>
  );
};

export default NavBar;
