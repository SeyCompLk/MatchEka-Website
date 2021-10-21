import React, { useEffect, useState } from 'react';
import UpcomingMatches from '../components/Home/UpcomingMatchList';
import AddSlide from '../components/Home/AddSlide';
import LiveMatchList from '../components/Home/LiveMatchList';

const Home: React.FC = () => {
  const [matches, setMatches] = useState([]);
  const upcomingMatches = matches.filter((match: any) => !match.isLive);

  const fetchData = async () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/user/matches`;
    const response = await fetch(url);
    const data = await response.json();
    setMatches(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className="hidden 2xl:grid 2xl:grid-cols-3 2xl:m-5">
        <div className="2xl:col-start-1 2xl:w-full">
          <UpcomingMatches matches={upcomingMatches} />
        </div>
        <div className="2xl:col-start-2 2xl:col-span-2 2xl:w-full 2xl:mx-5">
          <div className="row-start-2 col-start-2 2xl:w-full 2xl:row-start-1 2xl:h-3/6">
            <div className="2xl:h-full 2xl:pb-5 2xl:pl-5 2xl:pr-5">
              <AddSlide />
            </div>
          </div>
          <div className="2xl:w-full 2xl:row-start-2 2xl:h-3/6">
            <div className="2xl:h-full 2xl:pt-5 2xl:pl-5 2xl:pr-5">
              <LiveMatchList />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid grid-rows-2">
        <div className="row-start-1">
          <AddSlide />
        </div>
        <div className="row-start-2">
          <AddSlide />
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
<div>
            <div className="w-full flex">
                <div className="inline-block">
                    <UpcomingMatches/>
                </div>
                <div className="inline-block">
                    <div className="w-full h-3/6">
                        <AddSlide/>
                    </div>
                    <div className="w-full h-3/6">
                        <AddSlide/>
                    </div>
                </div>
            </div>
        </div>
 */
