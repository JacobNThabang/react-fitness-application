import { useEffect, useState } from "react";

function WorkoutLog(props) {
    // const {workouts} = props;
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const workoutsInfo = JSON.parse(localStorage.getItem('workouts'));

        if(localStorage.getItem('workouts')){
            setWorkouts(workoutsInfo);
        }
    }, []);

    if (!workouts || workouts.length === 0) {
        return (
            <div className="px-4 py-8">
                <p className="text-3xl text-center text-gray">
                    Could not find any workouts, use the add button above to log more workouts!
                </p>
            </div>
        )
    }
    
    return (
        <>
            <div className="mt-10 flex flex-col gap-2">
                {workouts.map((workout) => {
                    return (
                        <div className="h-[101px]">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <div className="w-[100px] h-[84px] flex items-center justify-center px-4">
                                        <img
                                            src={workout.image}
                                            className="rounded-lg h-full"
                                            alt=""
                                        />
                                    </div>
                                    <p className="font-bold text-lg">
                                        {workout.name}
                                    </p>
                                    <p className="pl-4 text-base text-secondary-text-color">
                                        {workout.description}
                                    </p> 
                                </div> 
                                <div className="workoutButtons flex flex-row items-center justify-between">
                                    <button>
                                        <p className="edit-text-color">
                                            Edit Time Spent
                                        </p> 
                                    </button>
                                    <button>
                                        <p className="-text-color">
                                            Delete Exercise
                                        </p> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
        
    );
};

export default WorkoutLog;