import { createSlice } from "@reduxjs/toolkit";

import { createUserThunkOperation } from "./authOperations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder
        .addCase(createUserThunkOperation.pending, (state, action) => state)
        .addCase(createUserThunkOperation.fulfilled, (state, action) => {

            // if fulfilled, we get from a server object with user info and TOKEN which we wwant to attach to all common headers using axios;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(createUserThunkOperation.rejected, (state, action) => state)
});

export const authReducer = authSlice.reducer;