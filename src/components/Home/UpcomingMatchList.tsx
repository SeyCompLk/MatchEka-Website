import React from 'react';
// import { upcomingMatchProps } from '../../types';
import classes from './styles/UpcomingMatchList.module.css';
import UpcomingMatchCard from './UpcomingMatchCard';
import { UpcomingCardProps } from '../../types';

const UpcomingMatches = ({ matches }: { matches: UpcomingCardProps[] }) => {
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
      {matches.map((match) => (
        <UpcomingMatchCard {...match} />
      ))}
    </div>
  );
};

export default UpcomingMatches;
