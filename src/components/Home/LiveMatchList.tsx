import React, { useState, useRef, TouchEventHandler } from 'react';
import LiveMatchCard from './LiveMatchCard';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import classes from './styles/LiveMatchList.module.css';
import Overlay from '../UI/Overlay';
import { LiveMatchListardProps as LiveMatchListProps } from '../../types';

interface Props {
  matchData: LiveMatchListProps[];
  updatableData: {
    index: number;
    team: number;
  } | null;
  updateData: () => void;
  setTeam: (team: number, index: number) => void;
  setUpdatableData: React.Dispatch<
    React.SetStateAction<{
      index: number;
      team: number;
    } | null>
  >;
}

const LiveMatchList = ({
  matchData,
  updatableData,
  updateData,
  setUpdatableData,
  setTeam,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState<number>(0);

  const increaseIndex = () => {
    if (index === matchData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(matchData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const boxRef = useRef(null);

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
      ? matchData[updatableData?.index!].team1.name
      : updatableData?.team! === 2
      ? matchData[updatableData?.index!].team2.name
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
            {...matchData[index]}
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
