import React, { useEffect, useState } from 'react';
import UpcomingMatches from '../components/Home/UpcomingMatchList';
import AdSlide from '../components/Home/AdSlide';
import LiveMatchList from '../components/Home/LiveMatchList';
import classes from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [matches, setMatches] = useState([]);
  const upcomingMatches = matches.filter((match: any) => !match.isLive);

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/user/matches`;
    const response = await fetch(url);
    const data = await response.json();
    setMatches(data);
  };
  const [isLive, setIsLive] = useState<boolean>(true);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={classes.Container}>
      {!isLive && (
        <div className={`${classes.LeftContainer} ${classes.Hidden}`}>
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
        <div className={classes.RightContainer}>
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

export default Home;
