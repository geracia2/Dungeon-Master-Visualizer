import { createSlice } from "@reduxjs/toolkit";

const sketchFabSlice = createSlice({
  name: "sketchFabData",
  initialState: null,
  reducers: {
    setSketchFabData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSketchFabData } = sketchFabSlice.actions;

export default sketchFabSlice.reducer;
