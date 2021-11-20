import React, { useCallback, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Matches from '../data/models/match.model';
import UpcomingMatches from '../components/Home/UpcomingMatchList';
import AdSlide from '../components/Home/AdSlide';
import LiveMatchList from '../components/Home/LiveMatchList';
import Chat from './Chat';
import classes from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [liveMatches, setLiveMatches] = useState<any>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<any>([]);

  const fetchData = useCallback(() => {
    setLiveMatches(Matches.getPlayingmatches());
    setUpcomingMatches(Matches.getUpcomingMatches());
  }, []);
  const [isLive, setIsLive] = useState<boolean>(true);
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [fetchData]);

  console.log(liveMatches);
  console.log(upcomingMatches);
  return (
    <div className={classes.Container}>
      {!isLive && (
        <div
          className={`${classes.LeftContainer} ${classes.Hidden}`}
          data-testid="resp-upcoming-tile"
        >
          <UpcomingMatches />
          <div className={classes.LeftAdvertisement}>
            <AdSlide />
          </div>
        </div>
      )}
      <div className={classes.LeftContainer}>
        <UpcomingMatches />
        <div className={classes.LeftAdvertisement}>
          <AdSlide />
        </div>
      </div>

      {isLive && (
        <div className={classes.RightContainer} data-testid="resp-live-tile">
          <div className={classes.RightAdvertisement}>
            <AdSlide />
          </div>
          <LiveMatchList />
        </div>
      )}
      <div className={classes.Paginator}>
        <span
          onClick={() => {
            setIsLive(true);
          }}
        >
          Live
        </span>
        <span>|</span>
        <span
          data-testid="upcoming-btn"
          onClick={() => {
            setIsLive(false);
          }}
        >
          Upcoming
        </span>
      </div>
      <div className={classes.MobileAd}>
        <AdSlide />
      </div>
    </div>
  );
};

const HomeRoutes = () => {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </>
  );
};

export default HomeRoutes;
