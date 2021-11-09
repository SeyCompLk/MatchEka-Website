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
  const [btnColors, setButtonColors] = useState<Array<string>>([
    'lightblue',
    'white',
  ]);

  const toogleBtn = () => {
    setIsLive(!isLive);
    setButtonColors(['white', btnColors[0]]);
    const btn = document.getElementById('lu-btn');
    btn?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={classes.Container}>
      <div className={classes.LeftContainer}>
        <UpcomingMatches />
        <div className={classes.LeftAdvertisement}>
          <AdSlide />
        </div>
      </div>
      <div className={classes.RightContainer}>
        <div className={classes.RightAdvertisement}>
          <AdSlide />
        </div>
        <LiveMatchList />
      </div>
    </div>
  );
};

export default Home;
