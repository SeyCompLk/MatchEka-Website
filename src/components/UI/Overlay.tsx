import React, { ReactElement } from 'react';
import classes from './Overlay.module.css';

const Overlay = (props: { children: ReactElement | ReactElement[] }) => {
  return <div className={classes.Container}>{props.children}</div>;
};

export default Overlay;
