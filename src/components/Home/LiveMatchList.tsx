import React from 'react';
import SAF from './SA.jpg';
import SLF from './SL.jpg';
import CHAT_ICO from '../../assets/icons/chat-ico.png';
import GROUP_ICO from '../../assets/icons/group-ico.png';

export const LiveMatchTile: React.FC = () => {
  return (
    <div className="relative bg-gray-200 rounded-xl m-4 p-3 pl-6">
      <div className="relative hidden lg:flex w-full">
        <div className="grid grid-cols-3 w-full">
          <div className="grid grid-rows-2 w-full">
            <div className="flex justify-between items-center">
              <div className="block border-2 border-green-500 rounded-xl p-2 bg-green-200">
                <img
                  src={SLF}
                  alt="Sri Lanka"
                  className="h-6 w-8 rounded-md lgs:w-16 lgs:h-10 xsm:w-24 xsm:h-16 gfold:h-8 gfold:w-14 gfold:rounded-xl"
                />
                <p className="flex justify-center text-xs xsm:text-sm lgs:text-xs 2xl:text-base font-medium">
                  Sri Lanka
                </p>
              </div>
              <div className="block">
                <div className="text-base xl:text-lg font-medium flex justify-center">
                  46 / 3
                </div>
                <div className="text-sm font-normal flex justify-center">
                  (12.3)
                </div>
              </div>
            </div>
            <div className="block w-full mt-3 mb-2">
              <div className="font-normal mb-1">SL Batting</div>
              <div className="block w-full">
                <div className="flex justify-between w-11/12 ml-2">
                  <div className="text-sm xl:text-base font-light italic">
                    K.Sangakkara
                  </div>
                  <div className="text-sm xl:text-base">
                    <span className="font-medium">46</span>
                    <sub className="ml-1">(12.3)</sub>
                  </div>
                </div>
                <div className="flex justify-between w-11/12 ml-2">
                  <div className="text-sm xl:text-base font-light italic">
                    M.Jayawardhana
                  </div>
                  <div className="text-sm xl:text-base">
                    <span className="font-medium">46</span>
                    <sub className="ml-1">(12.3)</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <div className="relative grid grid-rows-2 w-full">
              <div className="relative h-full flex items-center justify-center w-full font-medium text-base xl:text-lg">
                SL Choose to Bat
              </div>
              <div className="relative grid grid-rows-2 w-full">
                <div className="reltive block w-full">
                  <div className="text-gray-500 mb-1">This Over</div>
                  <div className="relative w-full grid grid-cols-6 pl-2 pr-2">
                    <svg
                      width="100%"
                      height="30"
                      className="flex justify-center"
                    >
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#000"
                        cx="50%"
                        cy="50%"
                        r="5"
                      />
                    </svg>
                    <svg width="100%" height="30">
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className="font-bold"
                      >
                        4
                      </text>
                    </svg>
                    <svg
                      width="100%"
                      height="30"
                      className="flex justify-center"
                    >
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        className="font-bold text-sm"
                      >
                        W
                      </text>
                    </svg>
                    <svg
                      width="100%"
                      height="30"
                      className="flex justify-center"
                    >
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#000"
                        cx="50%"
                        cy="50%"
                        r="5"
                      />
                    </svg>
                    <svg
                      width="100%"
                      height="30"
                      className="flex justify-center"
                    >
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#000"
                        cx="50%"
                        cy="50%"
                        r="5"
                      />
                    </svg>
                    <svg
                      width="100%"
                      height="30"
                      className="flex justify-center"
                    >
                      <circle
                        strokeWidth="1px"
                        stroke="#000"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="10"
                      />
                      <circle
                        strokeWidth="1px"
                        stroke="#fff"
                        fill="#fff"
                        cx="50%"
                        cy="50%"
                        r="5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full m-2">
                  <div className="grid grid-cols-2">
                    <div className="flex rounded-3xl bg-blue-800 items-center justify-center px-4 py-2 m-1 text-white">
                      <img
                        src={CHAT_ICO}
                        alt="CHAT_ICO"
                        className="w-5/12 xl:w-8 h-auto mr-2"
                      />
                      <span className="text-sm xl:text-base 2xl:text-lg">
                        Chat
                      </span>
                    </div>
                    <div className="flex rounded-3xl bg-blue-800 items-center justify-center px-4 py-2 m-1 text-white">
                      <img
                        src={GROUP_ICO}
                        alt="TEAM_ICO"
                        className="w-5/12 xl:w-8 h-auto mr-2"
                      />
                      <span className="text-sm xl:text-base 2xl:text-lg">
                        Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 w-full">
            <div className="flex justify-between items-center">
              <div className="block">
                <div className="text-base xl:text-lg font-medium flex justify-center">
                  Yet to Bat
                </div>
                <div className="text-sm font-normal flex justify-center">
                  (12.3)
                </div>
              </div>
              <div className="block border-2 border-green-500 rounded-xl p-2 bg-green-200">
                <img
                  src={SAF}
                  alt="South Africa"
                  className="h-6 w-8 rounded-md lgs:w-16 lgs:h-10 xsm:w-24 xsm:h-16 gfold:h-8 gfold:w-14 gfold:rounded-xl"
                />
                <p className="flex justify-center text-xs xsm:text-sm lgs:text-xs 2xl:text-base font-medium">
                  South Africa
                </p>
              </div>
            </div>
            <div className="block w-full mt-3 mb-2">
              <div className="text-sm xl:text-base font-normal mb-1">
                SA Bowling
              </div>
              <div className="block w-full">
                <div className="flex justify-between w-11/12 ml-2">
                  <div className="text-sm xl:text-base font-light italic">
                    K.Rabada
                  </div>
                  <div className="text-sm xl:text-base">
                    <span className="font-medium">46</span>
                    <sub className="ml-1">(12.3)</sub>
                  </div>
                </div>
                <div className="flex justify-between w-11/12 ml-2">
                  <div className="text-sm xl:text-base font-light italic">
                    W.Mulder
                  </div>
                  <div className="text-sm xl:text-base">
                    <span className="font-medium">46</span>
                    <sub className="ml-1">(12.3)</sub>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}

      <div className="flex lg:hidden">
        <div className="grid grid-cols-3"></div>
      </div>
    </div>
  );
};

const LiveMatchList: React.FC = () => {
  return (
    <div className="lg:h-full">
      <div className="relative rounded-2xl bg-white w-full h-full p-5">
        <div className="relative w-full pt-3 pl-3 inline-flex justify-between">
          <h1 className="text-2xl">
            🔴<span className="font-bold pl-2"> LIVE MATCHES</span>
          </h1>
          <h6 className="text-gray-500 text-lg">
            Select a Team to Vote and Confirm
          </h6>
        </div>
        <div className="relative mt-10 block p-3 overflow-y-scroll h-5/6 rounded-3xl px-4 pr-6 pb-1 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400">
          <LiveMatchTile />
          <LiveMatchTile />
          <LiveMatchTile />
          <LiveMatchTile />
          <LiveMatchTile />
        </div>
      </div>
      <div className="lg:hidden rounded-2xl bg-white w-full h-full p-10">
        <div className="w-full">
          <h1 className="col-start-1 text-lg">
            <span className="text-lg">🔴</span>{' '}
            <span className="font-bold"> Live Matches</span>
          </h1>
          <h6 className="col-start-2 text-gray-500 text-lg">
            Select a Team to Vote and Confirm
          </h6>
        </div>
        <LiveMatchTile />
      </div>
    </div>
  );
};

export default LiveMatchList;

/*

<svg className="relative" width="100%" height="30">
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="10%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="10%" cy="15" r="5"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="25%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="25%" cy="15" r="5"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="40%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="40%" cy="15" r="5"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="55%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="55%" cy="15" r="5"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="70%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="70%" cy="15" r="5"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#fff" cx="85%" cy="15" r="10"/>
                        <circle strokeWidth="1px" stroke="#000" fill="#000" cx="85%" cy="15" r="5"/>
                      </svg>

*/

/*

<div className="rounded-2xl bg-gray-200 w-full h-full p-3 m-2">
        <div className="grid grid-cols-7">
          <div className="col-start-1 col-span-2 flex justify-between p-3 px-5 lg:p-2 lg:px-3">
            <div className="flex flex-wrap content-center">
              <div className="content-center items-start">
                <div className="flex justify-center">
                  <img
                    src={SLF}
                    alt="Sri Lanka"
                    className="h-10 w-18 rounded-xl"
                  />
                </div>
                <p className="flex justify-center font-medium">Sri Lanka</p>
              </div>
            </div>
            <h3 className="flex flex-wrap content-center mx-5 font-bold text-2xl italic">VS</h3>
            <div className="flex flex-wrap content-center">
              <div className="content-center items-start">
                <div className="flex justify-center">
                  <img src={SAF} alt="SA" className="h-10 w-18 rounded-md" />
                </div>
                <p className="flex justify-center font-medium">S.Africa</p>
              </div>
            </div>
          </div>
          <div className="flex col-start-3 items-center font-medium justify-center">
            <span className="font-light xl:text-lg 2xl:text-xl italic mr-3">Player</span>
            <span className="xl:text-lg 2xl:text-xl">25</span>{" "}
            <sub className="text-sm font-extralight">(12)</sub>
          </div>
          <div className="flex col-start-4 items-center font-medium justify-center">
            <span className="font-light xl:text-lg 2xl:text-xl italic mr-3">Player</span>
            <span className="xl:text-lg 2xl:text-xl">25</span>{" "}
            <sub className="text-sm font-extralight">(12)</sub>
          </div>
          <div className="flex col-start-5 items-center font-medium justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-start-1 mr-2 text-xl">46/6</div>
              <div className="col-start-2 ml-2 text-xl">12.3</div>
            </div>
          </div>
          <div className="flex col-start-6 col-span-2 justify-around">
            <div className="grid grid-rows-2">
              <div className="row-start-1 flex rounded-3xl bg-blue-800 items-center justify-center px-4 py-2 my-1 text-white">
                <img src={CHAT_ICO} alt="CHAT_ICO" className="mr-2" />
                <span className="text-sm">Match Chat</span>
              </div>
              <div className="row-start-2 flex rounded-3xl bg-blue-800 items-center justify-center px-4 py-2 my-1 text-white">
                <img src={GROUP_ICO} alt="TEAM_ICO" className="mr-2" />
                <span className="text-sm">My Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

 */
