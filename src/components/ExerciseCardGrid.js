
import { FiMoreHorizontal } from "react-icons/fi";

function ExerciseCardGrid(props) {
    const { name, image, description, id, addExerciseToWorkoutLog } = props;

    return (
        <>
            <div className="rounded-lg h-56 w-96 relative">
                <img
                    src={image}
                    className="rounded-lg w-full h-full object-cover absolute"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/8 p-5 text-white">
                    <div className="flex justify-between w-full gap-2">
                        <div>
                            <p className="font-bold text-lg">
                                {name}
                            </p>
                            <p className="text-base font-medium truncate flex flex-col w-72">
                                {description}
                            </p>
                        </div>
                        <div className="flex items-end justify-center">
                            <button onClick={() => addExerciseToWorkoutLog(id)}>
                                <FiMoreHorizontal size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExerciseCardGrid;