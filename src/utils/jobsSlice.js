import { createSlice } from "@reduxjs/toolkit";



const jobsSlice = createSlice({
    name:"jobs",
    initialState:{
       jobs:null
    },
    reducers:{
        addJobs:(state,action) => {
            state.jobs = action.payload;
        },
    }
})


export const {addJobs} = jobsSlice.actions;
export default jobsSlice.reducer;