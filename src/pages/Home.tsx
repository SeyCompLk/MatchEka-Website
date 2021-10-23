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
    <div>
      <div>
        <div>
          <div className="hidden lg:grid grid-cols-3 m-5 ">
            <div className="col-start-1 w-full h-screen">
              <UpcomingMatches matches={upcomingMatches} />
            </div>
            <div className="relative col-start-2 col-span-2 w-full mx-5 h-screen">
              <div className="h-2/6 pl-2 pr-2 pb-2">
                <div className="bg-white h-full rounded-lg">
                  <AddSlide />
                </div>
              </div>
              <div className="h-4/6 pt-2 pl-2 pr-2">
                <LiveMatchList />
              </div>
            </div>
          </div>
          <div className="lg:hidden grid grid-rows-6 h-screen w-full mt-5">
            <div className="w-full h-full row-start-1 row-span-2 px-2 py-3">
              <AddSlide />
            </div>
            <div className="row-start-3 row-span-4 grid grid-rows-6 h-screen pt-2">
              <div
                id="lu-btn"
                className="relative grid grid-rows-6 pt-3 h-full"
              >
                <div className="relative w-full row-start-1 row-span-2 flex justify-center items-center mt-3 h-full">
                  <div className="relative bg-blue-600 rounded-3xl w-8/12 xsm:w-6/12 grid grid-cols-2 overflow-hidden h-8 mb-2">
                    <button
                      id="live-btn"
                      onClick={toogleBtn}
                      style={{ backgroundColor: btnColors[0] }}
                      className="flex justify-center flex-shrink-0 items-center object-fill font-semibold border-r-2 border-black w-full h-full bg-white text-sm xsm:text-base"
                    >
                      Live
                    </button>
                    <button
                      id="upcoming-btn"
                      onClick={() => {
                        setIsLive(!isLive);
                        setButtonColors([btnColors[1], 'light-blue']);
                      }}
                      style={{ backgroundColor: btnColors[1] }}
                      className="flex justify-center items-center object-fill font-semibold  border-black w-full h-full bg-blue-500 text-sm xsm:text-base"
                    >
                      Upcoming
                    </button>
                  </div>
                </div>
                <div className="w-full row-start-3 row-span-4 px-2 py-3">
                  <div className="relative p-2 w-full h-full">
                    {isLive ? (
                      <div className="relative h-full">
                        <UpcomingMatches matches={upcomingMatches} />
                      </div>
                    ) : (
                      <div className="h-full">
                        <LiveMatchList />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:w-full 2xl:row-start-2 2xl:h-3/6">
          <div className="2xl:h-full 2xl:pt-5 2xl:pl-5 2xl:pr-5">
            <LiveMatchList />
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
                        <div className="h-3/6 p-2 overflow-y-scroll">
                            <div className="bg-yellow-300 rounded-lg contents">
                                <LiveMatchList/>
                            </div>
                        </div>
*/

/*
                        <div className="w-full h-3/6">
                            <div className="h-full pb-5 pl-5 pr-5">
                                <AddSlide/>
                            </div>
                        </div>
                        <div className="w-full h-5/6">
                            <div className="h-full pt-5 pl-5 pr-5">
                                <AddSlide/>
                            </div>
                        </div>
 */
