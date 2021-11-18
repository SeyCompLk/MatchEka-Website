import React from 'react';
import classes from '../styles/Rewards.module.css';
import Image1 from '../assets/images/SingleUpcomingTile.png';
import Image2 from '../assets/images/SingleUpcomingTileGreen.png';
import Image3 from '../assets/images/TeamSelectionTile.png';

const Rewards = () => {
  return (
    <div className={classes.Body}>
      <div className={classes.LeftBar}>
        <div>
          <h1 className={classes.Heading}>Points</h1>
          <p className={classes.MethodHeading}>
            Earn rewards by winning points
          </p>
          <p className={classes.MethodHeading}>
            The leaderboard will show real-time position
          </p>
          <p className={classes.MethodHeading}>
            There are two ways to obtain points:{' '}
          </p>
        </div>
        <div className={classes.Methods}>
          <div className={classes.FirstContainer}>
            <p className={classes.MethodHeading}>Method1</p>
            <p className={classes.MethodStep}>
              Click on any Upcoming Match and Select the 2 squads with 22
              players who you think will play the match.
            </p>
            <p className={classes.MethodStep}>
              The more players you selected correct, the more points you will
              get.
            </p>
            <p className={classes.MethodStep}>
              The Squad selection will be unavailable 30 minutes before the
              match starting time.
            </p>
            <div className={classes.ImageContainer}>
              <img
                src={Image1}
                alt="not-selected"
                className={classes.TeamImage}
              />
              <img src={Image2} alt="selected" className={classes.TeamImage} />
            </div>
          </div>
          <div className={classes.SecondContainer}>
            <div className={classes.MethodTwo}>
              <p className={classes.MethodHeading}>Method2</p>
              <p className={classes.MethodStep}>
                Vote to a Team while the match is Live.
              </p>
              <p className={classes.MethodStep}>
                The Earlier you vote, the more points you get.
              </p>
              <p className={classes.MethodHeading}>
                Point Calculation = Number of players correctly guessed X 10 X
                (Time match starts - Time now)
              </p>
            </div>
            <img
              src={Image3}
              alt="Team selection"
              className={classes.SquadImage}
            />
          </div>
        </div>
      </div>
      <div className={classes.RightBar}></div>
    </div>
  );
};

export default Rewards;
