import { configureStore } from "@reduxjs/toolkit";

// import stateReducer from "./stateSlice";
import sketchFabReducer from './sketchFabSlice'
import freeSoundReducer from './freesSoundSlice'


export const store = configureStore({
    reducer: {
        // state: stateReducer,
        sketchFabData: sketchFabReducer,
        freeSoundData: freeSoundReducer,
        // ... other state operations,
    }
})