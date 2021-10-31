import React, { ChangeEventHandler, useState } from 'react';
import { MatchOverviewProps } from '../../types';
import classes from './Overview.module.css';

const Overview = (props: MatchOverviewProps) => {
  const [score, setScore] = useState<number>(0);
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const runsArr: number[] = [1, 2, 3, 4, 5, 6];

  const scoreChangehandler = (runs: number) => {
    setScore(runs);
    console.log(score);
    console.log(isRotated);
  };

  const batsmanRoatateHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsRotated(e.target.checked);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.Update}>
        <div>
          <h3>Runs</h3>
          <ul>
            {runsArr.map((run) => {
              return (
                <li
                  onClick={() => {
                    scoreChangehandler(run);
                  }}
                >
                  {run}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <label htmlFor="isrot">Is rotated</label>{' '}
          <input id="isrot" type="checkbox" onChange={batsmanRoatateHandler} />
        </div>
        <div>
          <label>Other</label>
          <div>
            <label>Is legal</label>{' '}
            <input
              id="isrot"
              type="checkbox"
              onChange={batsmanRoatateHandler}
            />
          </div>
          <div>
            <label>Is out</label>{' '}
            <input
              id="isrot"
              type="checkbox"
              onChange={batsmanRoatateHandler}
            />
          </div>
        </div>
      </div>
      <div className={classes.Score}></div>
    </div>
  );
};

export default Overview;
