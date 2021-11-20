import React, { useState, useRef, TouchEventHandler } from 'react';
import LiveMatchCard from './LiveMatchCard';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SLF from '../../assets/images/SL.jpg';
import SAF from '../../assets/images/SA.jpg';
import classes from './styles/LiveMatchList.module.css';
import Overlay from '../UI/Overlay';

const LiveMatchList: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState<number>(0);
  const [props, setProps] = useState([
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
      teamSelected: 0,
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
      toss: 'Australia Choose to bat',
      teamSelected: 0,
    },
    {
      team1: {
        name: 'Australia2',
        flag: 'https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg',
      },
      team2: {
        name: 'India2',
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
      toss: 'India Choose to bat',
      teamSelected: 1,
    },
  ]);

  const [updatableData, setUpdatableData] = useState<{
    index: number;
    team: number;
  } | null>(null);

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
  const boxRef = useRef(null);

  const setTeam = (team: number, index: number) => {
    const temp = { ...props[index!] };
    if (temp.teamSelected !== 0) {
      return 0;
    }
    setUpdatableData({ index, team });
  };

  const updateData = () => {
    const temp = { ...props[updatableData?.index!] };
    if (temp.teamSelected !== 0) {
      return 0;
    }
    temp.teamSelected = updatableData?.team as number;
    const allMatches = [...props];
    allMatches[updatableData?.index!] = temp;
    setProps(allMatches);
    setUpdatableData(null);
  };

  const touchStartEvent: TouchEventHandler<HTMLDivElement> = (e) => {
    console.log('Start: ', e);
    setStart(e.changedTouches[0].clientX);
  };
  const touchEndEvent: TouchEventHandler<HTMLDivElement> = (e) => {
    console.log('End: ', e);
    const end = e.changedTouches[0].clientX;
    if (end - start < 10 && end - start > -10) {
      return;
    }
    if (end > start) {
      decreaseIndex();
    } else {
      increaseIndex();
    }
  };
  const touchMoveEvent: TouchEventHandler<HTMLDivElement> = (e) => {
    console.log('Move: ', e);
  };

  const selectedTeam =
    updatableData?.team! === 1
      ? props[updatableData?.index!].team1.name
      : updatableData?.team! === 2
      ? props[updatableData?.index!].team2.name
      : null;
  return (
    <>
      {updatableData && (
        <Overlay>
          <div className={classes.Notification}>
            <h1>{`Would you like to set ${selectedTeam} as the winning Team`}</h1>
            <div className={classes.ButtonContainer}>
              <button onClick={updateData}>Yes</button>{' '}
              <button
                onClick={() => {
                  setUpdatableData(null);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Overlay>
      )}
      <div
        className={classes.Box}
        ref={boxRef}
        onTouchStart={touchStartEvent}
        onTouchEnd={touchEndEvent}
        onTouchMove={touchMoveEvent}
      >
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
          <LiveMatchCard
            {...props[index]}
            updateSelected={setTeam}
            index={index}
          />
          <span className={classes.Arrow} onClick={increaseIndex}>
            <SkipNextIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default LiveMatchList;
