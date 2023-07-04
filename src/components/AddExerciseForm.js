import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addExercise } from "../reducers/Exercises";


function AddExerciseForm(props) {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises.value);
    const { setIsOverlayOpen } = props;
    const [page, setPage] = useState(0);
    const initialFormValues = { name: "", image: "", description: "", calories_per_minute: 0 };
    const [formData, setFormData] = useState(initialFormValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOverlayOpen(false);

        const id = uuid();
        let uniqueId = id.slice(0, 8);

        const newExercise = {
            id: uniqueId,
            ...formData
        }
        dispatch(addExercise(newExercise));

        const oldExercises = [...exercises];
        oldExercises.push(newExercise);
        localStorage.setItem('exercises', JSON.stringify(oldExercises));

        setFormData(initialFormValues);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="progressbar">
                    <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                    </div>
                </div>
                <label className="block">
                    <span className="block text-sm font-medium">Name</span>
                    <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                        placeholder="Select" type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </label>
                <label className="mt-4 block">
                    <span className="block text-sm font-medium">Description</span>
                    <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                        placeholder="Description" type="text" required onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </label>
                <label className="mt-4 block">
                    <span className="block text-sm font-medium">Image Url</span>
                    <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                        placeholder="https://" type="url" required onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                </label>
                <label className="mt-4 block">
                    <span className="block text-sm font-medium">Calories</span>
                    <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                        placeholder="0" type="number" required onChange={(e) => setFormData({ ...formData, calories_per_minute: e.target.value })}
                    />
                </label>
                <button className="mt-4 h-12 w-full bg-primary-color text-white rounded-md font-medium text-sm" type="submit">ADD EXERCISE</button>
            </form>
        </>
    )

}

export default AddExerciseForm;