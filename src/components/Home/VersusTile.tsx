import React from "react";
import SAF from './SA.jpg';
import SLF from './SL.jpg';

const VersusTile: React.FC = () => {
  return (
    <div className="relative">
      <div className="hidden xl:inline-flex relative justify-between h-30 w-full p-4 xl:p-4 2xl:p-6 my-2 bg-gray-100 shadow-lg rounded-xl">
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
          <div className="text-xs 2xl:text-sm pt-3 italic font-light">√ Team</div>
        </div>
      </div>

      {                                                                                             }

      <div className="grid grid-cols-12 grid-rows-2 relative xl:hidden m-1 bg-gray-200 rounded-xl p-4 pt-6">

          <div className="col-start-1 col-span-5 row-start-1">
            <div className="flex justify-center">
              <div className="flex flex-wrap content-center">
                <div className="content-center items-start">
                  <div className="flex justify-center">
                    <img src={SLF} alt="Sri Lanka" className="h-6 w-8 rounded-md lgs:w-16 lgs:h-10 xsm:w-24 xsm:h-16 gfold:h-8 gfold:w-14 gfold:rounded-xl" />
                  </div>
                  <p className="flex justify-center text-xs xsm:text-sm lgs:text-xs 2xl:text-base font-medium">Sri Lanka</p>
                </div>  
              </div>
            </div>
          </div>

          <div className="flex justify-center items-end gfold:items-center font-semibold col-start-6 text-sm xsm:text-base xsm:pl-3 ">VS</div>

          <div className="col-start-7 col-span-6 row-start-1">
            <div className="flex justify-center">
              <div className="flex flex-wrap content-center">
                <div className="content-center items-start">
                  <div className="flex justify-center">
                    <img src={SAF} alt="South Africa" className="h-6 w-8 rounded-md lgs:w-16 lgs:h-10 xsm:w-24 xsm:h-16 gfold:h-8 gfold:w-14 gfold:rounded-xl" />
                  </div>
                  <p className="flex justify-center text-xs xsm:text-sm lgs:text-xs 2xl:text-base font-medium">South Africa</p>
                </div>  
              </div>
            </div>
          </div>

          <div className="col-start-1 col-span-12 row-start-2 font-semibold mt-2">
            <div className="grid grid-cols-12 grid-rows-2">
              <div className="row-start-1 col-start-1 col-span-12 block font-medium text-xs sm:text-base lg:text-sm">
                <div className="flex justify-center">SUNDAY, OCTOBER 20</div>
                <div className="flex justify-center text-gray-600">7PM</div>        
              </div>
              <div className="row-start-2 col-start-1 col-span-12">
                <div className="flex justify-end items-center italic font-light text-xs sm:text-base lg:text-sm">
                    √ Team
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default VersusTile;
