import { createAsyncThunk } from "@reduxjs/toolkit";

import { createUser, logInUser, logOutUser, refreshUser } from "services/api";
// token api utilities;
import { setAuthHeader, clearAuthHeader } from "services/api";


export const createUserThunkOperation = createAsyncThunk("auth/createUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await createUser(credentials);
            console.log(response)
            setAuthHeader(response.token);
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })
//////////////////////////////////

export const logInUserThunkOperation = createAsyncThunk("auth/logInUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await logInUser(credentials);
            setAuthHeader(response.token);
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logOutThunkOperation = createAsyncThunk("auth/logOut",
    async (_, thunkAPI) => {
        try {
            const response = await logOutUser();
            clearAuthHeader();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
}
)
/////////////////////////////////

export const refreshUserThunkOperation = createAsyncThunk("auth/refreshUser",
    async (_, { rejectWithValue, getState }) => {
            const state = getState();
            const token = state.auth.token;
        if (!token) { return rejectWithValue('no token for refreshingUser') };

        setAuthHeader(token);
        try {
           
            const response = await refreshUser();
            console.log(response)
            return response;
            // not sure if we need to get a new token
            // setAuthHeader(response.token);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)