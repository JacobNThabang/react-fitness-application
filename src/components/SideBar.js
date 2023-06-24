import {FiChevronDown} from "react-icons/fi"; 
import {MdHome}  from "react-icons/md"; 
import {BiCalendarAlt} from "react-icons/bi";

function SideBar(props) {
    const {isExercisesOpen, setIsExercisesOpen} = props;


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
            <div className="sidebar flex flex-col mt-14">
                <button onClick={() => setIsExercisesOpen(true)}>
                <div className={`icon ${isExercisesOpen ? "bg-primary-color" : "bg-secondary-button-bg"} text-white rounded-sm`}>
                        <MdHome size={20} />
                    </div>
                    <p className={`${isExercisesOpen ? "text-primary-color font-bold" : "text-light-black opacity-50"}`}>Exercises</p>
                </button>
                <button onClick={() => setIsExercisesOpen(false)}>
                    <div className={`icon ${isExercisesOpen ? "bg-secondary-button-bg" : "bg-primary-color"} text-white rounded-sm`}>
                        <BiCalendarAlt size={20} />
                    </div>
                    <p className={`${isExercisesOpen ? "text-light-black opacity-50" : "text-primary-color font-bold"}`}>Workout Log</p>
                </button>
            </div>
        </>
    )
}

export default SideBar;