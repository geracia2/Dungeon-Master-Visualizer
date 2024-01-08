import { configureStore } from "@reduxjs/toolkit";

// import stateReducer from "./stateSlice";
import FreeSoundTracksReducer from './freesSoundSlice'
import SketchFabModelsReducer from "./sketchFabSlice";

export const store = configureStore({
    reducer: {
        // state: stateReducer,
        SketchFabModels: SketchFabModelsReducer,
        FreeSoundTracks: FreeSoundTracksReducer,
        // ... other state operations,
    }
})