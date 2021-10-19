import React from "react";
import UpcomingMatches from "../components/Home/UpcomingMatchList";
import AddSlide,{Card} from "../components/Home/AddSlide";

const Home:React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-3 mt-2 mb-2">
                <div className="col-start-1 w-full m-5">
                    <UpcomingMatches/>
                </div>
                <div className="col-start-2 col-span-2 p-10">
                    <div className="w-full row-start-1 h-3/6">
                        <AddSlide/>
                    </div>
                    <div className="w-full row-start-2 h-3/6">
                        <AddSlide/>
                    </div>
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