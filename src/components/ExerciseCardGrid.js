
import { FiMoreHorizontal } from "react-icons/fi";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";

function ExerciseCardGrid(props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const {name, image, description, id} = props;
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        time: "",
    });
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const workoutsInfo = JSON.parse(localStorage.getItem('workouts'));

        if(localStorage.getItem('workouts')){
            setWorkouts(workoutsInfo);
        }
    }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
        setIsOverlayOpen(!isOverlayOpen);
        workouts.push({...formData, image, description, id});
        console.log(workouts);
        // Persist state
        localStorage.setItem('workouts', JSON.stringify(workouts));
      }

    return (

        <>
            <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen) }>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="progressbar">
                            <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                            </div>
                        </div>
                        <label className="block">
                            <span className="block text-sm font-medium">Choose exercise</span>
                            <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                                placeholder="Search..." type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </label>
                        <label className="mt-4 block">
                            <span className="block text-sm font-medium">Add time spent</span>
                            <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                                placeholder="0" type="number" required onChange={(e) => setFormData({...formData, time: e.target.value})}
                            />
                        </label>
                        <button className="mt-4 h-12 w-full bg-primary-color text-white rounded-md font-medium text-sm" type="submit">ADD EXERCISE</button>
                    </form>
                </div>
            </Overlay>
            <div className="rounded-lg h-56 w-96 relative">
                <img
                    src={image}
                    className="rounded-lg w-full h-full object-cover absolute"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/8 p-5 text-white">
                    <div className="flex flex-row justify-between gap-2">
                        <div>
                            <p className="font-bold text-lg">
                                {name}
                            </p>
                            <p className="text-base font-medium truncate flex flex-col w-72">
                                {description}
                            </p>
                        </div> 
                        <div className="flex items-end justify-center">
                            <button onClick={() => setIsOverlayOpen(true)}>
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