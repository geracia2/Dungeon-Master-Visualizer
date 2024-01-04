import { configureStore } from "@reduxjs/toolkit";

// import stateReducer from "./stateSlice";
import sketchFabReducer from './sketchFabSlice'
import FreeSoundTracksReducer from './freesSoundSlice'


export const store = configureStore({
    reducer: {
        // state: stateReducer,
        sketchFabData: sketchFabReducer,
        FreeSoundTracks: FreeSoundTracksReducer,
        // ... other state operations,
    }
})