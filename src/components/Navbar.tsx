import React from "react";

interface Props{
  imgSrc: string;
};

const NavBar:React.FC<Props> = ({imgSrc}) => {
  return (
    <nav className="w-full justify-between inline-flex p-5 shadow-md rounded-xl items-center bg-white">
      <div className="inline-flex">
        <img className="rounded-2xl w-16" src={imgSrc} alt="Logo"/>
        <h2 className="flex text-4xl font-bold ml-4 items-center">Match Eka</h2>
      </div>
      <div className="flex">
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

