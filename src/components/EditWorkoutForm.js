import { useState } from "react";


function EditWorkoutForm(props) {
    const { editData, setIsEditingWorkout, editWorkout } = props;
    const [page, setPage] = useState(0);
    const [timeLogged, setTimeLogged] = useState(editData.time);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditingWorkout(false);
        editWorkout(editData.id, timeLogged);
        setTimeLogged(editData.time);
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="progressbar">
                    <div style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                    </div>
                </div>
                <label className="block">
                    <span className="block text-sm font-medium">Insert time spent</span>
                    <input className="mt-1 block bg-white w-full border rounded-md py-2 pl-9 pr-3 shadow-sm"
                        defaultValue={editData.time} type="number" required onChange={(e) => setTimeLogged(e.target.value)}
                    />
                </label>
                <button className="mt-4 h-12 w-full bg-primary-color text-white rounded-md font-medium text-sm" type="submit">SAVE</button>
            </form>
        </>
    )

}

export default EditWorkoutForm;