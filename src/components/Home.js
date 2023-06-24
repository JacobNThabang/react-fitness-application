import { RiAddFill } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import ExerciseList from "./ExerciseList";
import Exercises from "./Exercises";
import SideBar from "./SideBar";
import { useState } from "react";

function Home() {
    const [exercisesOpen, setIsExercisesOpen] = useState(true);
    const [layoutIsGrid, setLayoutIsGrid] = useState(true);

    return(
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="w-64 h-auto">
                    <SideBar isExercisesOpen={exercisesOpen} setIsExercisesOpen={setIsExercisesOpen}/>
                </div>
                <div className="flex flex-col h-auto w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="font-bold text-3xl">Exercises</h1>
                        <button className="bg-primary-color rounded-full text-white p-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]">
                            <RiAddFill size={30} />
                        </button>
                    </div>
                    <div className="flex justify-between w-full mt-14">
                        <label className="relative block w-96">
                            <span className="sr-only">Search</span>
                            <input 
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Search..." type="text" name="search"
                            />
                        </label>
                        <div className="flex flex-row gap-8">
                            <button className={`${layoutIsGrid ? "text-primary-color" : "text-light-grey"}`} onClick={() => setLayoutIsGrid(true)}>
                                <TfiLayoutGrid2 size={35} />
                            </button>
                            <button className={`${layoutIsGrid ? "text-light-grey" : "text-primary-color"}`} onClick={() => setLayoutIsGrid(false)}>
                                <BsListUl size={35} />
                            </button>
                        </div>
                    </div>
                    {exercisesOpen 
                        ? 
                        <Exercises exercises={ExerciseList} layoutIsGrid={layoutIsGrid} />
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Home;