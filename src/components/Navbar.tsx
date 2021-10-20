import React from "react";

interface Props{
  imgSrc: string;
};

const NavBar:React.FC<Props> = ({imgSrc}) => {
  return (
    <nav className="w-full lg:inline-flex p-1 sm:p-3 md:p-4 shadow-md rounded-xl lg:justify-between lg:items-center bg-white">
      <div className="grid grid-cols-3 lg:inline-flex lg:justify-start lg:w-auto">
          <div className="col-start-1 inline-flex items-center">
            <svg className="flex m-3 md:mr-5 lg:hidden md:w-10 md:h-10 md:ml-2 w-5 h-5 items-center justify-center text-gray-500 hover:text-green-600 "
					  		x-show="!showMenu"
					  		fill="none"
					  		stroke-linecap="round"
					  		stroke-linejoin="round"
					  		stroke-width="2"
					  		viewBox="0 0 24 24"
					  		stroke="currentColor"
					  >
					    <path d="M4 6h16M4 12h16M4 18h16"></path>
					  </svg>
            <img className="flex lg:hidden items-center flex-shrink-0 rounded-xl md:w-16 md:h-16 w-8 h-8 lg:w-14 lg:h-14" src={imgSrc} alt="Logo"/>
          </div>
          <div className="col-start-2 inline-flex justify-center">
            <img className="hidden lg:flex flex-shrink-0 rounded-2xl md:w-20 md:h-20 w-14 h-14 lg:w-14 lg:h-14" src={imgSrc} alt="Logo"/>
            <div className="flex ml-4 items-center justify-center">
              <h2 className="text-sm xsm:text-2xl sm:text-3xl md:text-4xl font-bold justify-center">Match Eka</h2>
            </div>
          </div>
          <div className="inline-flex col-start-3 justify-end items-center">
            <img src={imgSrc} alt="Profile Pic" className="lg:hidden flex rounded-full sm:h-12 md:h-14 h-8 border-4 border-gray-400"/>
          </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="inline-flex font-semibold items-center">
          <li className="navbar-link">Home</li>
          <li className="navbar-link">Rewards</li>
          <li className="navbar-link">Leaderboard</li>
          <li className="navbar-link">Previous Matches</li>
          <li className="navbar-link">About</li>
        </ul>
        <img src={imgSrc} alt="Profile Pic" className="rounded-full h-14 ml-8 border-4 border-gray-400"/>
      </div>
    </nav>
  );
};

export default NavBar;

