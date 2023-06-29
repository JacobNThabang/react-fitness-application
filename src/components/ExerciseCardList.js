import { FiMoreHorizontal } from "react-icons/fi";


function ExerciseCardList(props) {
    const { name, image, description, id, addExerciseToWorkoutLog } = props;

    return (
        <>
            <div className="h-[75px]">
                <div className="flex justify-between w-full">
                    <div className="flex justify-center items-center flex-row gap-4">
                        <div className="w-24 h-16 flex items-center justify-center px-4">
                            <img
                                src={image}
                                className="rounded-lg h-full"
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-lg">
                            {name}
                        </p>
                        <p className="pl-4 text-base text-secondary-text-color">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => addExerciseToWorkoutLog(id)}>
                            <FiMoreHorizontal size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExerciseCardList;