import {useEffect, useState} from "react";
import ExerciseCard from "./ExerciseCard";

function Exercises(props) {
    const {exercises} = props;

    if (!exercises || exercises.length === 0) {
        return (
            <div className="px-4 py-8">
                <p className="text-3xl text-center text-gray">
                    Could not find any exercises, sorry!
                </p>
            </div>
        )
    }
    
    return (
        <div className="mt-10 grid grid-cols-3 gap-4">
            {exercises.map((exercise) => {
                return <ExerciseCard image={exercise.image} name={exercise.name} description={exercise.description} key={exercise.id}/>
            })}
        </div>
    );
}

export default Exercises;