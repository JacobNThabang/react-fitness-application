
import ExerciseCardGrid from "./ExerciseCardGrid";
import ExerciseCardList from "./ExerciseCardList";

function Exercises(props) {
    const {exercises, layoutIsGrid} = props;

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
        <>
            {layoutIsGrid 
            ?
            <div className="mt-10 grid grid-cols-3 gap-4">
                {exercises.map((exercise) => {
                    return <ExerciseCardGrid image={exercise.image} name={exercise.name} description={exercise.description} id={exercise.id} key={exercise.id} />
                })}
            </div> 
            :
            <div className="mt-10 flex flex-col gap-2">
                {exercises.map((exercise) => {
                    return <ExerciseCardList image={exercise.image} name={exercise.name} description={exercise.description} key={exercise.id} />
                })}
            </div> 
            }
        </>
        
    );
}

export default Exercises;