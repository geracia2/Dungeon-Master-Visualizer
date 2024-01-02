import { configureStore } from "@reduxjs/toolkit";

// import stateReducer from "./stateSlice";
import sketchFabReducer from './sketchFabSlice'


export const store = configureStore({
    reducer: {
        // state: stateReducer,
        sketchFabData: sketchFabReducer,
        // ... other state operations,
    }
})