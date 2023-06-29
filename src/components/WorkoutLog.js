function WorkoutLog(props) {
    const { workouts, deleteWorkout } = props;

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
                                            <span className="font-bold text-sm"> {workout.calories_per_minute} 000 calories burned</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="workoutButtons flex flex-row items-center justify-between gap-4">
                                    <button className="flex items-center justify-center">
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
        </>

    );
};

export default WorkoutLog;