import { createSlice } from "@reduxjs/toolkit";
import ExerciseList from "../components/ExerciseList";

export const exerciseSlice = createSlice({
    name: "exercises",
    initialState: { value: ExerciseList },
    reducers: {
        addExercise: (state, action) => {
            state.value.push(action.payload);
        },
        receivedExercises: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { addExercise, receivedExercises } = exerciseSlice.actions;
export default exerciseSlice.reducer;