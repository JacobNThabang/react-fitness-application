import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
    name: "workouts",
    initialState: { value: [] },
    reducers: {
        addWorkout: (state, action) => {
            state.value.push(action.payload);
        },
        receivedWorkouts: (state, action) => {
            state.value = action.payload
        },
        editWorkout: (state, action) => {
            let index = state.value.map((workout) => {
                return workout.id
            }).indexOf(action.payload.id);

            state.value[index].time = action.payload.time;
        },
    }
});

export const { addWorkout, receivedWorkouts, editWorkout, resetLog } = workoutSlice.actions;
export default workoutSlice.reducer;