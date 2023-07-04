import { useState } from "react";


function AddWorkOutForm(props) {
    const { exercise, addExerciseToWorkoutLog, setIsOverlayOpen } = props;
    const [page, setPage] = useState(0);
    const initialFormValues = { name: exercise.name, time: "" };
    const [formData, setFormData] = useState(initialFormValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsOverlayOpen(false);
        addExerciseToWorkoutLog(exercise.id, formData);
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
                    <span className="block text-sm font-medium">Choose exercise</span>
                    <input className="mt-1 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm"
                        defaultValue={formData.name} type="text" required disabled
                    />
                </label>
                <label className="mt-4 block">
                    <span className="block text-sm font-medium">Add time spent</span>
                    <input className="mt-1 block bg-white w-full border border-prinmary-color rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary-color focus:ring-primary-color focus:ring-1 sm:text-sm"
                        placeholder="0" type="number" required onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                </label>
                <button className="mt-4 h-12 w-full bg-primary-color text-white rounded-md font-medium text-sm" type="submit">ADD EXERCISE</button>
            </form>
        </>
    )

}

export default AddWorkOutForm;