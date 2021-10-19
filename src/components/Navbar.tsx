import React from "react";

interface Props{
  imgSrc: string;
};

export const NavBar:React.FC<Props> = ({imgSrc}) => {
  return (
    <nav className="w-full justify-between inline-flex p-5 shadow-md rounded-xl items-center bg-white">
      <h2 className="flex text-4xl font-bold ml-4">Match Eka</h2>
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
/*
<nav className="bg-white shadow-md p-4 rounded-md my-2 inline-flex w-full items-end">
      <h2 className="flex md:flex">Match Eka</h2>
      <div className="">
        <ul className="">
          <li>Home</li>
          <li>Rewards</li>
          <li>Leaderboard</li>
          <li>Previous Matches</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
*/
