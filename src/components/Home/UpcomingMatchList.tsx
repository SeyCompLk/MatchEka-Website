import React from "react";
import VersusTile from "./VersusTile";

const UpcomingMatches: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 px-2 shadow-lg h-screen w-full">
      <div className="text-right text-xxs xsm:text-xs text-gray-400">
        *All times are in Sri Lankan(GMT+5.30)
      </div>
      <div className="mb-2">
        <h1 className="font-bold text-xl xsm:text-2xl pl-5">UPCOMING</h1>
        <p className="text-xs gfold:text-sm font-semibold text-gray-400 pl-5">
          Click on a Match to Choose a Team
        </p>
      </div>
      <div className="block mt-10 relative overflow-y-scroll overflow-x-visible h-5/6 rounded-3xl px-2 sm:px-4 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400">
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
        <VersusTile />
      </div>
    </div>
  );
};

export default UpcomingMatches;
