import React from 'react';

const LeaderboardUser: React.FC<{
  playerPos: number;
  playerName: string;
  points: number;
}> = ({ points, playerName, playerPos }) => {
  return (
    <div className="cursor-pointer inline-flex justify-between items-center w-full rounded-2xl text-white px-0 border p-1 hover:p-2 font-normal hover:font-medium shadow-sm hover:shadow-2xl border-transparent hover:border-white">
      <div className="inline-flex w-full justify-start">
        <div className="mr-4">{playerPos}</div>
        <div>{playerName}</div>
      </div>
      <div className="inline-flex w-full justify-end">
        <div className="mr-4">{points}</div>
        <div>Points</div>
      </div>
    </div>
  );
};

const competitorsEx = [
  { name: 'Nimal', pos: 1, points: 450 },
  { name: 'Kamal', pos: 2, points: 432 },
  { name: 'Sunil', pos: 3, points: 45 },
  { name: 'Wimal', pos: 4, points: 45 },
  { name: 'Mahinda', pos: 5, points: 45 },
  { name: 'Namal', pos: 6, points: 45 },
  { name: 'Gotabaya', pos: 7, points: 45 },
  { name: 'Basil', pos: 8, points: 45 },
  { name: 'Karu', pos: 9, points: 45 },
  { name: 'Sajith', pos: 10, points: 45 },
  { name: 'Anura', pos: 11, points: 45 },
  { name: 'Piyasena', pos: 12, points: 45 },
  { name: 'Rohitha', pos: 13, points: 45 },
  { name: 'Thattaya', pos: 14, points: 45 },
];

const winnersEx = [
  { name: 'Nimsara', pos: 1, points: 500 },
  { name: 'Chamindu', pos: 2, points: 450 },
  { name: 'Pambaya', pos: 3, points: 300 },
];

const Leaderboard = () => {
  //const {competitors, prevWinners} = props;
  const competitors = competitorsEx;
  const prevWinners = winnersEx;
  const prevMonth = 'October',
    prevWeek = 'Week 4',
    currMonth = 'November',
    currWeek = 'Week 1';

  return (
    <div className="relative w-full h-full">
      {/* DESKTOP VIEW */}

      <div className="relative hidden lg:block w-full h-screen">
        <div className="grid grid-rows-6 w-full h-full">
          <div className="row-start-1 w-full h-full p-4 px-6">
            <div className="h-full w-full rounded-lg shadow-lg bg-white flex justify-center items-center text-3xl font-bold">
              LEADERBOARDS
            </div>
          </div>
          <div className="row-start-2 row-span-5 h-full w-full p-4 px-6">
            <div className="h-full w-full flex justify-center items-center">
              <div className="h-full w-full grid grid-rows-1 min-h-screen">
                <div className="h-full w-full flex items-center justify-around min-h-screen">
                  <div className="flex justify-center items-center m-4 relative h-full w-full">
                    <div className="h-4/6 w-full rounded-2xl bg-red-600 m-4">
                      <div className="grid grid-rows-6 h-full w-full p-4">
                        <div className="row-start-1 flex justify-center items-center text-white font-bold text-xl">
                          THIS WEEK LEADERBOARD
                        </div>
                        <div className="row-start-2 row-span-5 flex justify-center items-start h-full w-full">
                          <div className="relative block w-full h-full">
                            <div className="w-full p-2">
                              <div className="inline-flex justify-between items-center w-full h-full rounded-2xl bg-white px-7 py-2">
                                <div className="font-semibold text-red-600">
                                  {currMonth}
                                </div>
                                <div className="font-semibold text-red-600">
                                  {currWeek}
                                </div>
                              </div>
                            </div>
                            <div className="block w-full overflow-y-scroll px-6 h-4/6 mt-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white">
                              {competitors.map((competitor) => {
                                return (
                                  <LeaderboardUser
                                    playerName={competitor.name}
                                    points={competitor.points}
                                    playerPos={competitor.pos}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center h-full w-full">
                    <div className="relative block h-4/6 w-full">
                      <div className="relative bg-blue-500 rounded-2xl w-full h-4/6">
                        <div className="grid grid-rows-6 h-full w-full p-4">
                          <div className="row-start-1 row-span-2 flex justify-center items-center text-white font-bold text-xl">
                            PREVIOUS WEEK WINNERS
                          </div>
                          <div className="row-start-3 row-span-4 -top-5">
                            <div className="relative block w-full h-full">
                              <div className="w-full p-2">
                                <div className="inline-flex justify-between items-center w-full h-full rounded-2xl bg-white px-7 py-2">
                                  <div className="font-semibold text-blue-500">
                                    {prevMonth}
                                  </div>
                                  <div className="font-semibold text-blue-500">
                                    {prevWeek}
                                  </div>
                                </div>
                              </div>
                              <div className="block w-full overflow-y-scroll px-6 h-full scrollbar-none mt-5">
                                {prevWinners.map((winner) => {
                                  return (
                                    <div className="mx-0">
                                      <LeaderboardUser
                                        playerName={winner.name}
                                        points={winner.points}
                                        playerPos={winner.pos}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="ldb-adds"
                        className="relative h-2/6 inline-flex justify-around w-full m-2"
                      >
                        <div className="w-3/6 rounded-2xl bg-white shadow-lg my-5 mx-2 flex justify-center items-center">
                          Add
                        </div>
                        <div className="w-3/6 rounded-2xl bg-white shadow-lg my-5 mx-2 flex justify-center items-center">
                          Add
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}

      <div className="flex lg:hidden">Leaderboard - Mobile</div>
    </div>
  );
};

export default Leaderboard;
