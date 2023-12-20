import { configureStore } from "@reduxjs/toolkit";
import sketchFabReducer from './sketchFabSlice'
// import stateReducer from "./stateSlice";


export const store = configureStore({
    reducer: {
        // state: stateReducer,
        sketchFabData: sketchFabReducer,
        // ... other state operations,
    }
})