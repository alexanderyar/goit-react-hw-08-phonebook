import { createSlice } from "@reduxjs/toolkit";

import { createUserThunkOperation, logInUserThunkOperation, logOutThunkOperation, refreshUserThunkOperation } from "./authOperations";

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
            ////////////////////////////////////

            .addCase(logInUserThunkOperation.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })

            /////////////////////////////////

            .addCase(logOutThunkOperation.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.isLoggedIn = false;
                state.token = null;
            })
            
            //////////////////////////////
            .addCase(refreshUserThunkOperation.fulfilled, (state, action) => {
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUserThunkOperation.pending, (state, action) => {
                state.isRefreshing = true;

            })
            .addCase(refreshUserThunkOperation.rejected, (state, action) => {
                state.isRefreshing = false;

            })
});

export const authReducer = authSlice.reducer;

// сделать лог ин