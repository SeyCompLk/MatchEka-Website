import React from "react";
import UpcomingMatches from "../components/Home/UpcomingMatchList";
import AddSlide,{Card} from "../components/Home/AddSlide";

const Home:React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-3 m-5">
                <div className="col-start-1 w-full">
                    <UpcomingMatches/>
                </div>
                <div className="col-start-2 col-span-2 w-full mx-5">
                    <div className="w-full row-start-1 h-3/6">
                        <div className="h-full pb-5 pl-5 pr-5">
                            <AddSlide/>
                        </div>
                    </div>
                    <div className="w-full row-start-2 h-3/6">
                        <div className="h-full pt-5 pl-5 pr-5">
                            <AddSlide/>
                        </div>
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