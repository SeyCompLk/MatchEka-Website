import React from 'react';
import { Link } from 'react-router-dom';
import { MatchOverviewProps } from '../../types';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import classes from './styles/LiveMatchList.module.css';

const LiveMatchCard = (props: MatchOverviewProps) => {
  return (
    <div className={classes.Card}>
      <div className={classes.TeamRow}>
        <div className={classes.Team1}>
          <div>
            <img src={props.team1?.flag} alt={props.team1?.name} />
            <p className={classes.LightText}>{props.team1?.name}</p>
          </div>
          <div>
            <p>{`${props.score}/${props.wickets}`}</p>
            <p className={classes.LightText}>
              {`(${props.overs}.${props.bowls})`}
            </p>
          </div>
        </div>
        <div className={classes.RunRate}>
          <p>{props.toss}</p>
          <p className={classes.LightText}>
            CRR {`${Math.round(props.score! / props.overs!)}`}
          </p>
        </div>
        <div className={classes.Team2}>
          <div>Yet to bat</div>
          <div>
            <img src={props.team2?.flag} alt={props.team2?.name} />
            <div className={classes.LightText}>{props.team2?.name}</div>
          </div>
        </div>
      </div>
      <div className={classes.ScoreRow}>
        <div className={classes.Player}>
          <div className={classes.Bat}>
            <p>{props.currStriker?.name}</p> <p>{props.currStriker?.score}</p>
          </div>
          <div className={classes.Bat}>
            <p>{props.nonStriker?.name}</p> <p>{props.nonStriker?.score}</p>
          </div>
        </div>
        <div className={classes.Over}>
          <p className={classes.LightText} style={{ textAlign: 'center' }}>
            This Over:
          </p>
          Over
          <div className={classes.ButtonContainer}>
            <Link to="/matches/chat?match=1" className={classes.Button}>
              <ChatIcon />
              <span>Chat</span>
            </Link>
            <Link to="/matches/myteam?match=1" className={classes.Button}>
              <GroupIcon />
              <span>My Team</span>
            </Link>
          </div>
        </div>
        <div className={classes.Bowler}>
          <p>{props.currBowler?.name}</p>
          <p>
            {props.currBowler?.overs}-{props.currBowler?.wickets}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchCard;
