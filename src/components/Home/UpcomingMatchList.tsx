import React from "react";
import VersusTile from "./VersusTile";

const UpcomingMatches: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-lg h-full w-full">
      <div className="text-right text-xs text-gray-400">
        *All times are in Sri Lankan(GMT+5.30)
      </div>
      <div className="mb-5">
        <h1 className="font-bold text-2xl">UPCOMING</h1>
        <p className="text-sm font-semibold text-gray-400">
          Click on a Match to Choose a Team
        </p>
      </div>
      <div className="overflow-y-scroll">
        <VersusTile />
        <br />
        <VersusTile />
        <br />
        <VersusTile />
        <br />
        <VersusTile />
        <br />
        <VersusTile />
        <br />
        <VersusTile />
      </div>
    </div>
  );
};

export default UpcomingMatches;
