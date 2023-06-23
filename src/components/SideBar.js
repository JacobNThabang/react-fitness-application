import {FiChevronDown} from "react-icons/fi"; 
import {MdHome}  from "react-icons/md"; 
import {BiCalendarAlt} from "react-icons/bi";

function SideBar() {


    return (
        <>
            <div className="w-56 h-12 mr-3">
                <div className="flex w-full justify-between gap-8">
                    <div className="flex flex-row gap-3">
                        <div className="flex justify-center items-center rounded-full text-white bg-primary-color h-14 w-14">
                            <p className="font-bold text-base">LG</p>
                        </div>
                        <div>
                            <p className="text-xl font-medium">Lizelle</p>
                            <p className="text-base">Cape Town</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-chev-color">
                        <button>
                            <div className="text-chev-color flex items-center justify-center">
                                <FiChevronDown size={24} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-14">
                <button className="flex flex-row items-center gap-4 h-[58px]">
                    <div className="bg-primary-color text-white rounded-sm h-7 w-7 flex items-center justify-center">
                        <MdHome size={20} />
                    </div>
                    <p className="text-sm font-bold text-primary-color">Exercises</p>
                </button>
                <button className="flex flex-row items-center gap-4 h-[58px]">
                    <div className="bg-secondary-button-bg text-white rounded-sm h-7 w-7 flex items-center justify-center">
                        <BiCalendarAlt size={20} />
                    </div>
                    <p className="text-sm text-light-black font-normal opacity-50">Workout Log</p>
                </button>
            </div>
        </>
    )
}

export default SideBar;