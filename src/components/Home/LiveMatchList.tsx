import React from 'react';
import LiveMatchCard from './LiveMatchCard';
import classes from './styles/LiveMatchList.module.css';

const LiveMatchList: React.FC = () => {
  return (
    <div className={classes.Box}>
      <div className={classes.UpperText}>
        <div className={classes.Container1}>
          <div className={classes.Circle}></div>
          <span className={classes.Topic}>Live Matches</span>
        </div>
        <div className={classes.Container2}>
          <span className={classes.SubTopic}>
            Select a Team to Vote and Confirm
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchList;
