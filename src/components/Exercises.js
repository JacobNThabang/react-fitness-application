import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useSelector } from "react-redux";
import ExerciseCardGrid from "./ExerciseCardGrid";
import ExerciseCardList from "./ExerciseCardList";
import AddWorkOutForm from "./AddWorkoutForm";
import Overlay from "./Overlay";

import { receivedExercises } from "../reducers/Exercises";
import { receivedWorkouts } from "../reducers/Workouts";


function Exercises(props) {
    const dispatch = useDispatch();
    const { layoutIsGrid } = props;
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [exerciseData, setExerciseData] = useState({ name: "", id: "" });
    const exercises = useSelector((state) => state.exercises.value);
    const workouts = useSelector((state) => state.workouts.value);

    useEffect(() => {
        const exercisesInfo = JSON.parse(localStorage.getItem('exercises'));
        const workoutsInfo = JSON.parse(localStorage.getItem('workouts'));

        if (localStorage.getItem('exercises')) {
            dispatch(receivedExercises(exercisesInfo));
        }

        if (localStorage.getItem('workouts')) {
            dispatch(receivedWorkouts(workoutsInfo));
        }
    }, [dispatch]);

    if (!exercises || exercises.length === 0) {
        return (
            <div className="px-4 py-8">
                <p className="text-3xl text-center text-gray">
                    Could not find any exercises, sorry!
                </p>
            </div>
        )
    }

    const openAddExerciseToWorkoutLog = (id) => {
        const index = exercises.map((exercise) => {
            return exercise.id;
        }).indexOf(id);

        const exercise = exercises[index];
        setExerciseData({ ...exercise });
        setIsOverlayOpen(!isOverlayOpen);
    }

    const addExerciseToWorkoutLog = (id, formData) => {
        const index = exercises.map((exercise) => {
            return exercise.id;
        }).indexOf(id);

        const exercise = exercises[index];
        const workout = { ...exercise, ...formData, date_logged: moment(new Date()).format("DD/MM/YYYY") };

        dispatch(receivedWorkouts([...workouts, workout]));

        const prevWorkouts = [...workouts];
        prevWorkouts.push(workout);

        localStorage.setItem('workouts', JSON.stringify(prevWorkouts));
    }

    return (
        <>
            <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>
                <AddWorkOutForm exercise={exerciseData} addExerciseToWorkoutLog={addExerciseToWorkoutLog} setIsOverlayOpen={setIsOverlayOpen} />
            </Overlay>
            {layoutIsGrid
                ?
                <div className="mt-10 grid grid-cols-3 gap-4">
                    {exercises.map((exercise) => {
                        return <ExerciseCardGrid image={exercise.image} name={exercise.name} description={exercise.description} id={exercise.id} key={exercise.id} addExerciseToWorkoutLog={openAddExerciseToWorkoutLog} />
                    })}
                </div>
                :
                <div className="mt-10 flex flex-col gap-2">
                    {exercises.map((exercise) => {
                        return <ExerciseCardList image={exercise.image} name={exercise.name} description={exercise.description} id={exercise.id} key={exercise.id} addExerciseToWorkoutLog={openAddExerciseToWorkoutLog} />
                    })}
                </div>
            }
        </>

    );
}

export default Exercises;