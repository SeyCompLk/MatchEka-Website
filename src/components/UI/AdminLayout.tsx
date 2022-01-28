import React, { ReactElement, useContext } from 'react';
import classes from './AdminLayout.module.css';
import Logo from '../../assets/icons/me-logo.png';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';

const AdminLayout = (props: { children: ReactElement | ReactElement[] }) => {
  const ctx = useContext(authContext);
  return (
    <>
      <header className={classes.Header}>
        <div className={classes.Brand}>
          <img src={Logo} alt="logo" />
          <span className={classes.BrandName}>Match Eka</span>
          <span>|Admin</span>
        </div>
        <nav className={classes.Nav}>
          <ul>
            <li>
              <NavLink
                to="/admin/"
                className={(navData) =>
                  navData.isActive ? classes.Active : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {ctx.isAdmin && ctx.token && (
                <NavLink
                  to="/admin/new-match"
                  className={(navData) =>
                    navData.isActive ? classes.Active : ''
                  }
                >
                  New match
                </NavLink>
              )}
            </li>
            {ctx.isAdmin && ctx.token && (
              <li
                onClick={() => {
                  ctx.logout();
                }}
              >
                Logout
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default AdminLayout;
