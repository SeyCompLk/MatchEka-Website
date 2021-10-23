import React from 'react';
import { versusTileProps } from '../../types';

const VersusTile = (props: versusTileProps) => {
  return (
    <div
      className="relative inline-flex justify-between h-30 w-full p-6 my-2 bg-gray-100 shadow-lg rounded-xl"
      style={{ display: 'block' }}
    >
      <div className="flex justify-between">
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img
                src={props.team1Image}
                alt={props.team1}
                className="h-10 w-18 rounded-xl"
              />
            </div>
            <p className="flex justify-center font-medium">{props.team1}</p>
          </div>
        </div>
        <h3 className="flex flex-wrap content-center mx-5 font-bold">VS</h3>
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img
                src={props.team2Image}
                alt={props.team2}
                className="h-10 w-18 rounded-md"
              />
            </div>
            <p className="flex justify-center font-medium">{props.team2}</p>
          </div>
        </div>
        <div className="xl:mr-2 2xl:mr-4 ml-3">
          <div className="text-xs 2xl:text-sm font-bold">
            SUNDAY, OCTOBER 20
          </div>
          <div className="text-xs 2xl:text-sm font-semibold">7 PM</div>
          <div className="text-xs 2xl:text-sm pt-3 italic font-light">
            √ Team
          </div>
        </div>
      </div>
      <div className="mr-4 ml-3">
        <div className="text-sm font-bold">{props.date}</div>
        <div className="font-semibold">{props.time}</div>
        <div className="pt-3">Team</div>
      </div>
    </div>
  );
};

export default VersusTile;
