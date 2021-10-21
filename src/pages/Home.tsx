import React,{useState} from "react";
import UpcomingMatches from "../components/Home/UpcomingMatchList";
import AddSlide from "../components/Home/AddSlide";
import LiveMatchList,{LiveMatchTile} from "../components/Home/LiveMatchList";

const Home:React.FC = () => {

    const [isLive, setIsLive] = useState<boolean>(true);
    const [btnColors, setButtonColors] = useState<Array<string>>(['lightblue','white']);

    return (
        <div>
            <div className="hidden lg:grid grid-cols-3 m-5 ">
                <div className="col-start-1 w-full h-screen">
                    <UpcomingMatches/>
                </div>
                <div className="relative col-start-2 col-span-2 w-full mx-5 h-screen">
                    <div className="h-2/6 pl-2 pr-2 pb-2">
                        <div className="bg-white h-full rounded-lg">
                            <AddSlide/>
                        </div>
                    </div>
                    <div className="h-4/6 pt-2 pl-2 pr-2">
                        <LiveMatchList/>
                    </div>
                </div>
            </div>
            <div className="lg:hidden grid grid-rows-6 h-screen w-full mt-5">
                <div className="w-full h-full row-start-1 row-span-2 px-2 py-3">
                    <AddSlide/>
                </div>
                <div className="row-start-3 row-span-4 grid grid-rows-6 h-screen pt-2">
                    <div id='lu-btn' className="w-full row-start-1 flex justify-center items-end">
                        <div className="bg-blue-600 rounded-3xl w-6/12 grid grid-cols-2 overflow-hidden h-11">
                            <button id='live-btn' onClick={()=>{setIsLive(!isLive);setButtonColors(['white', btnColors[0]]); const btn = document.getElementById('lu-btn');btn?.scrollIntoView({behavior:"smooth"})}} style={{backgroundColor: btnColors[0]}} className="flex justify-center flex-shrink-0 items-center object-fill font-semibold border-r-2 border-black w-full h-full bg-white">Live</button>
                            <button id='upcoming-btn' onClick={()=>{setIsLive(!isLive);setButtonColors([btnColors[1], 'light-blue'])}} style={{backgroundColor: btnColors[1]}} className="flex justify-center items-center object-fill font-semibold  border-black w-full h-full bg-blue-500">Upcoming</button>
                        </div>
                    </div>
                    <div className="w-full row-start-2 row-span-5 px-2 py-3">
                        <div className="p-2 w-full h-full">
                            {isLive ? <div className="h-full"><AddSlide/><AddSlide/></div> : <div className="h-full"><LiveMatchList/></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

/*
                        <div className="h-3/6 p-2 overflow-y-scroll">
                            <div className="bg-yellow-300 rounded-lg contents">
                                <LiveMatchList/>
                            </div>
                        </div>
*/

/*
                        <div className="w-full h-3/6">
                            <div className="h-full pb-5 pl-5 pr-5">
                                <AddSlide/>
                            </div>
                        </div>
                        <div className="w-full h-5/6">
                            <div className="h-full pt-5 pl-5 pr-5">
                                <AddSlide/>
                            </div>
                        </div>
 */