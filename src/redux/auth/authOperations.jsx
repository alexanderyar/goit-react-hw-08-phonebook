import { createAsyncThunk } from "@reduxjs/toolkit";

import { createUser, logInUser, logOutUser, refreshUser } from "services/api";

import toast, { Toaster } from 'react-hot-toast';

// token api utilities;
import { setAuthHeader, clearAuthHeader } from "services/api";


export const createUserThunkOperation = createAsyncThunk("auth/createUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await createUser(credentials);
            setAuthHeader(response.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })