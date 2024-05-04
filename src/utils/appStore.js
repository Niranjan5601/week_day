


import { configureStore } from "@reduxjs/toolkit";

import jobReducer from "../utils/jobsSlice";


const appStore = configureStore(
    {
        reducer:{
            jobs:jobReducer,
        }
    }
)

export default appStore;