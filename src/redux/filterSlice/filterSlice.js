import { createSlice } from "@reduxjs/toolkit";




export const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        addingFilterValue(state, action) {
            // return is required
            
            return action.payload;
        },
    },
});

export const { addingFilterValue } = filterSlice.actions;