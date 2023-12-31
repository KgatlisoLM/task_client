import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
    status: [],
};

export const statusSlice = createSlice({
    name: "Status",
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {
          state.status = action.payload;
        },
    },
});

export const { setStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;