import React from 'react';
// import { upcomingMatchProps } from '../../types';
import classes from './styles/UpcomingMatchList.module.css';
import UpcomingMatchCard from './UpcomingMatchCard';
import SAF from '../../assets/images/SA.jpg';
import SLF from '../../assets/images/SL.jpg';

const props = {
  team1: {
    title: 'Sri Lanka',
    flag: SLF,
  },
  team2: {
    title: 'South Africa',
    flag: SAF,
  },
  date: '27th Feb 2021',
  time: '07:00 P.M',
  id: Math.random().toString(),
};

const UpcomingMatches = () => {
  return (
    <div className={classes.Box}>
      <div className={classes.TopText}>
        <p className={classes.Note}>
          <i>*All times are in Sri Lankan time (GMT 05:30)</i>
        </p>
        <p className={classes.Heading}>UPCOMING</p>
        <p className={classes.SubHeading}>
          Click on a match to choose the Teams
        </p>
      </div>
      <UpcomingMatchCard {...props} />
      <UpcomingMatchCard {...props} />
      <UpcomingMatchCard {...props} />
      <UpcomingMatchCard {...props} />
    </div>
  );
};

export default UpcomingMatches;
