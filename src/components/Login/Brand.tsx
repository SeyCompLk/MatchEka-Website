import React from 'react';
import Logo from '../../assets/icons/me-logo.png';
import classes from './Brand.module.css';

const Brand = () => {
  return (
    <div className={classes.Container}>
      <img src={Logo} alt="brand-logo" />
      <div>
        <h1>Match eka</h1>
        <span>Powered by SeyComp.Lk</span>
      </div>
    </div>
  );
};

export default Brand;
