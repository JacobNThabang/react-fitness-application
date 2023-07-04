import "./index.css"
import { RiAddFill } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import Exercises from "./components/Exercises";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import WorkoutLog from "./components/WorkoutLog";
import AddExerciseForm from "./components/AddExerciseForm";
import Overlay from "./components/Overlay";

function App() {
  const [exercisesOpen, setIsExercisesOpen] = useState(true);
  const [layoutIsGrid, setLayoutIsGrid] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const workoutsInfo = JSON.parse(localStorage.getItem('workouts'));
    if (localStorage.getItem('workouts')) {
      setWorkouts(workoutsInfo);
    }
  }, []);

  const deleteWorkout = (id) => {
    let newWorkouts = [...workouts];
    newWorkouts = newWorkouts.filter(exercise =>
      exercise.id !== id
    );

    setWorkouts(newWorkouts);
    localStorage.setItem('workouts', JSON.stringify(newWorkouts));
  }

  const editWorkout = (id, time) => {
    let index = workouts.map((workout) => {
      return workout.id
    }).indexOf(id);

    workouts[index].time = time;
    setWorkouts(workouts);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  const resetLog = () => {
    setWorkouts([]);
    localStorage.setItem('workouts', JSON.stringify([]));
  }

  return (
    <>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>
        <AddExerciseForm setIsOverlayOpen={setIsOverlayOpen} />
      </Overlay>
      <div className="flex flex-row w-full h-screen bg-primary-bg">
        <div className="w-64 h-auto bg-white">
          <SideBar isExercisesOpen={exercisesOpen} setIsExercisesOpen={setIsExercisesOpen} />
        </div>
        <div className="flex flex-col h-auto w-full p-10">
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-3xl">{exercisesOpen ? "Exercises" : "Workout Log"}</h1>
            {exercisesOpen ?
              <button className="bg-primary-color rounded-full text-white p-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)]" onClick={() => setIsOverlayOpen(true)}>
                <RiAddFill size={30} />
              </button>
              :
              null}
          </div>
          <div className="flex justify-between w-full mt-14">
            <label className="relative block w-96">
              <span className="sr-only">Search</span>
              <input
                className="block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                placeholder="Search..." type="text" name="search"
              />
            </label>
            {
              exercisesOpen ?
                <div className="flex flex-row gap-8">
                  <button className={`${layoutIsGrid ? "text-primary-color" : "text-light-grey"}`} onClick={() => setLayoutIsGrid(true)}>
                    <TfiLayoutGrid2 size={35} />
                  </button>
                  <button className={`${layoutIsGrid ? "text-light-grey" : "text-primary-color"}`} onClick={() => setLayoutIsGrid(false)}>
                    <BsListUl size={35} />
                  </button>
                </div>
                : null
            }
          </div>
          {exercisesOpen
            ?
            <Exercises layoutIsGrid={layoutIsGrid} workouts={workouts} setWorkouts={setWorkouts} />
            :
            <WorkoutLog workouts={workouts} deleteWorkout={deleteWorkout} resetLog={resetLog} editWorkout={editWorkout} />
          }
        </div>
      </div>
    </>
  )
}

export default App;
