import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        error: null,
        loading: false,
    },
    reducers: {
        signinStart: (state) => {
            state.loading = true;
        },

        signinSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signinFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { signinStart, signinSuccess, signinFailure } = userSlice.actions;

export default userSlice.reducer;