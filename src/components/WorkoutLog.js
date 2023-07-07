import { useState } from "react";
import { CgClose } from "react-icons/cg";
import EditWorkoutForm from "./EditWorkoutForm";
import { useDispatch, useSelector } from "react-redux";

import { receivedWorkouts } from "../reducers/Workouts";

function WorkoutLog(props) {
    const dispatch = useDispatch();
    const { deleteWorkout, editWorkout } = props;
    const [isEditingWorkout, setIsEditingWorkout] = useState(false);
    const [editData, setEditData] = useState({ time: 0, id: null });
    const workouts = useSelector((state) => state.workouts.value);

    const openEditTimeLogged = (id, time) => {
        setEditData({ time, id });
        setIsEditingWorkout(!isEditingWorkout);
    }

    const resetLog = () => {
        dispatch(receivedWorkouts([]));
        localStorage.setItem('workouts', JSON.stringify([]));
    }

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
            {isEditingWorkout ?
                <div className="edit-overlay_container">
                    <div className="flex flex-col justify-between gap-5">
                        <div className="overlay_header">
                            <p className="text-xl font-bold leading-8">Edit time spent</p>
                            <button className="overlay_close" onClick={() => setIsEditingWorkout(false)}>
                                <CgClose size={30} />
                            </button>
                        </div>
                        <EditWorkoutForm editData={editData} setIsEditingWorkout={setIsEditingWorkout} editWorkout={editWorkout} />
                    </div>
                </div>

                : null
            }
            <div className="mt-10 flex flex-col gap-2">
                {workouts.map((workout) => {
                    return (
                        <div className="h-[101px] bg-white flex items-center rounded-lg pr-7" key={workout.id}>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <div className="w-[100px] h-[84px] flex items-center justify-center px-4">
                                        <img
                                            src={workout.image}
                                            className="rounded-lg h-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between gap-2">
                                        <p className="font-bold text-lg">
                                            {workout.name}
                                        </p>
                                        <p className="text-base text-secondary-text-color w-64 truncate">
                                            {workout.description}
                                        </p>
                                        <div className="text-workoutlog-details flex items-center gap-3">
                                            <span className="font-bold text-sm">{workout.date_logged} </span>
                                            <span className="text-xs"> | </span>
                                            <span className="font-bold text-sm">{workout.time} hours spent </span>
                                            <span className="text-xs"> | </span>
                                            <span className="font-bold text-sm"> {workout.calories_per_minute} calories burned</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="workoutButtons flex flex-row items-center justify-between gap-4">
                                    <button className="flex items-center justify-center" onClick={() => openEditTimeLogged(workout.id, workout.time)}>
                                        <p className="buttonText text-edit-text-color">
                                            Edit Time Spent
                                        </p>
                                    </button>
                                    <button className="flex items-center justify-center" onClick={() => deleteWorkout(workout.id)}>
                                        <p className="buttonText text-delete-text-color">
                                            Delete Exercise
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-7 ml-auto rounded-sm w-fit bg-primary-color">
                <button className="resetLog px-5 py-1" onClick={() => resetLog()}>
                    Reset Log
                </button>
            </div>
        </>

    );
};

export default WorkoutLog;