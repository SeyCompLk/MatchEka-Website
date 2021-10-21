import React from "react";
import SAF from './SA.jpg';
import SLF from './SL.jpg';

const VersusTile: React.FC = () => {
  return (
    <div className="relative inline-flex justify-between h-30 w-full p-4 xl:p-4 2xl:p-6 my-2 bg-gray-100 shadow-lg rounded-xl">
      <div className="flex justify-between">
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img src={SLF} alt="Sri Lanka" className="h-10 w-18 rounded-xl" />
            </div>
            <p className="flex justify-center text-xs xl:text-sm 2xl:text-base font-medium">Sri Lanka</p>
          </div>
        </div>
        <h3 className="flex flex-wrap content-center lg:text-sm xl:text-base 2xl:text-lg lg:mx-1 xl:mx-3 2xl:mx-5 font-bold">VS</h3>
        <div className="flex flex-wrap content-center">
          <div className="content-center items-start">
            <div className="flex justify-center">
              <img src={SAF} alt="SA" className="h-10 w-18 rounded-md" />
            </div>
            <p  className="flex justify-center text-xs xl:text-sm 2xl:text-base font-medium">S.Africa</p>
          </div>
        </div>
      </div>
      <div className="xl:mr-2 2xl:mr-4 ml-3">
        <div className="text-xs 2xl:text-sm font-bold">SUNDAY, OCTOBER 20</div>
        <div className="text-xs 2xl:text-sm font-semibold">7 PM</div>
        <div className="text-xs 2xl:text-sm pt-3">Team</div>
      </div>
    </div>
  );
};

export default VersusTile;
