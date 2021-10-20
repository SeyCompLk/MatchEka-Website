import React from "react";
import UpcomingMatches from "../components/Home/UpcomingMatchList";
import AddSlide from "../components/Home/AddSlide";
import LiveMatchList from "../components/Home/LiveMatchList";

const Home:React.FC = () => {

    return (
        <div>
            <div className="hidden lg:grid lg:grid-cols-3 lg:m-5">
                <div className="lg:col-start-1 lg:w-full">
                    <UpcomingMatches/>
                </div>
                <div className="lg:col-start-2 lg:col-span-2 lg:w-full lg:mx-5">
                    <div className="row-start-2 col-start-2 lg:w-full lg:row-start-1 lg:h-3/6">
                        <div className="lg:h-full lg:pb-5 lg:pl-5 lg:pr-5">
                            <AddSlide/>
                        </div>
                    </div>
                    <div className="lg:w-full lg:row-start-2 lg:h-3/6">
                        <div className="lg:h-full lg:pt-5 lg:pl-5 lg:pr-5">
                            <LiveMatchList/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden grid grid-flow-row auto-rows-max h-screen w-full mt-5">
                <div className="w-full row-start-1 row-span-2 px-2 py-3">
                    <AddSlide/>
                </div>
                <br/>
                <div className="w-full row-start-3 flex justify-center items-end">
                    <div className="bg-blue-600 rounded-3xl w-6/12 grid grid-cols-2 overflow-hidden h-3/6">
                        <button className="flex justify-center items-center object-fill font-semibold border-r-2 border-black w-full h-full bg-white">Live</button>
                        <button className="flex justify-center items-center object-fill font-semibold  border-black w-full h-full bg-blue-500">Upcoming</button>
                    </div>
                </div>
                <div className="w-full row-start-4 row-span-3 px-2 py-3">
                    <AddSlide/>
                </div>
            </div>
        </div>
    );
}

export default Home;

/*
<div>
            <div className="w-full flex">
                <div className="inline-block">
                    <UpcomingMatches/>
                </div>
                <div className="inline-block">
                    <div className="w-full h-3/6">
                        <AddSlide/>
                    </div>
                    <div className="w-full h-3/6">
                        <AddSlide/>
                    </div>
                </div>
            </div>
        </div>
 */