import React from 'react';
import { UpcomingCardProps } from '../../types';
import { Link } from 'react-router-dom';
import classes from './styles/UpcomingMatchList.module.css';

const UpcomingMatchCard = (props: UpcomingCardProps) => {
  return (
    <Link className={classes.Card} to={`/matches/details?match=${props.id}`}>
      <div className={classes.Teams}>
        <div>
          <img src={props.team1.flag} alt={props.team1.title} />
          <p className={classes.Name}>{props.team1.title}</p>
        </div>
        <p className={classes.VS}>VS</p>
        <div>
          <img src={props.team2.flag} alt={props.team2.title} />
          <p className={classes.Name}>{props.team2.title}</p>
        </div>
      </div>
      <div className={classes.Date}>
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
    </Link>
  );
};

export default UpcomingMatchCard;
