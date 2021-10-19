import React from "react";
import SAF from './SA.jpg';
import SLF from './SL.jpg';

const VersusTile: React.FC = () => {
  return (
    <div className="relative inline-flex justify-between h-30 w-full p-6 my-2 bg-gray-100 shadow-lg rounded-xl">
      <div className="flex justify-between">
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img src={SLF} alt="Sri Lanka" className="h-10 w-18 rounded-xl" />
            </div>
            <p className="flex justify-center font-medium">Sri Lanka</p>
          </div>
        </div>
        <h3 className="flex flex-wrap content-center mx-5 font-bold">VS</h3>
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img src={SAF} alt="SA" className="h-10 w-18 rounded-md" />
            </div>
            <p  className="flex justify-center font-medium">S.Africa</p>
          </div>
        </div>
      </div>
      <div className="mr-4 ml-3">
        <div className="text-sm font-bold">SUNDAY, OCTOBER 20</div>
        <div className="font-semibold">7 PM</div>
        <div className="pt-3">Team</div>
      </div>
    </div>
  );
};

export default VersusTile;
