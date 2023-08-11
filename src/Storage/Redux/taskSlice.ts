import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    task: [],
};

export const taskSlice = createSlice({
    name: "Task",
    initialState: initialState,
    reducers: {
        setTask: (state, action) => {
          state.task = action.payload;
        },
    },
});

export const { setTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;