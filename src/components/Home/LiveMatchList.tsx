import React, { useState } from 'react';
import LiveMatchCard from './LiveMatchCard';
import { SwipeEventListener } from 'swipe-event-listener';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SLF from '../../assets/images/SL.jpg';
import SAF from '../../assets/images/SA.jpg';
import classes from './styles/LiveMatchList.module.css';

const props = [
  {
    team1: {
      name: 'Sri Lanka',
      flag: SLF,
    },
    team2: {
      name: 'South Africa',
      flag: SAF,
    },
    inning: 1,
    score: 86,
    wickets: 7,
    overs: 15,
    bowls: 3,
    currStriker: {
      name: 'Chamika Karunarathne',
      score: 56,
      bowls: 25,
    },
    nonStriker: {
      name: 'Dushmantha Chameera',
      score: 12,
      bowls: 9,
    },
    currBowler: {
      name: 'Tabraiz Shamsi',
      overs: 3.5,
      wickets: 1,
    },
    toss: 'SL Choose to bat',
  },
  {
    team1: {
      name: 'Australia',
      flag: 'https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg',
    },
    team2: {
      name: 'India',
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
    },
    inning: 1,
    score: 86,
    wickets: 7,
    overs: 15,
    bowls: 3,
    currStriker: {
      name: 'Chamika Karunarathne',
      score: 56,
      bowls: 25,
    },
    nonStriker: {
      name: 'Dushmantha Chameera',
      score: 12,
      bowls: 9,
    },
    currBowler: {
      name: 'Tabraiz Shamsi',
      overs: 3.5,
      wickets: 1,
    },
    toss: 'SL Choose to bat',
  },
];

const LiveMatchList: React.FC = () => {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (index === props.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(props.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const { swipeArea } = SwipeEventListener({
    swipeArea: document.getElementById('box')!,
  });

  swipeArea.addEventListener('swipeLeft', decreaseIndex);
  swipeArea.addEventListener('swipeRight', increaseIndex);

  return (
    <div className={classes.Box} id="box">
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
      <div className={classes.Slider}>
        <span className={classes.Arrow} onClick={decreaseIndex}>
          <SkipPreviousIcon />
        </span>
        <LiveMatchCard {...props[index]} />
        <span className={classes.Arrow} onClick={increaseIndex}>
          <SkipNextIcon />
        </span>
      </div>
    </div>
  );
};

export default LiveMatchList;
