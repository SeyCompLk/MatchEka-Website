import React from "react";
import SAF from "./SA.jpg";
import SLF from "./SL.jpg";
import CHAT_ICO from "../../assets/icons/chat-ico.png";
import GROUP_ICO from "../../assets/icons/group-ico.png";

const LiveMatchTile: React.FC = () => {
  return (
    <div>
      <div className="rounded-2xl bg-gray-200 w-full h-full p-3">
        <div className="grid grid-cols-7">
          <div className="col-start-1 col-span-2 flex justify-between p-3 px-5">
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
            <span className="font-light text-xl italic mr-3">Player</span>
            <span className="text-xl">25</span>{" "}
            <sub className="text-sm font-extralight">(12)</sub>
          </div>
          <div className="flex col-start-4 items-center font-medium justify-center">
            <span className="font-light text-xl italic mr-3">Player</span>
            <span className="text-xl">25</span>{" "}
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
                <img src={CHAT_ICO} className="mr-2" />
                <span className="text-sm">Match Chat</span>
              </div>
              <div className="row-start-2 flex rounded-3xl bg-blue-800 items-center justify-center px-4 py-2 my-1 text-white">
                <img src={GROUP_ICO} className="mr-2" />
                <span className="text-sm">My Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveMatchList: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white w-full h-full p-10">
      <div className="w-full inline-flex justify-between">
        <h1 className="col-start-1 text-3xl">
          🔴<span className="font-bold"> Live Matches</span>
        </h1>
        <h6 className="col-start-2 text-gray-500 text-lg">
          Select a Team to Vote and Confirm
        </h6>
      </div>
      <LiveMatchTile />
    </div>
  );
};

export default LiveMatchList;
