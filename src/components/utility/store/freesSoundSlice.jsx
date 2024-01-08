import { createSlice } from "@reduxjs/toolkit";

const FreeSoundTrackSlice = createSlice({
  name: "FreeSoundTracks",
  initialState: [],
  reducers: {
    Add_Track: (state, action) => {
      let item = action.payload;
      // spread when working with arrays to begin.
      // return [...state, item];
      // push is better for this instance
      console.log(action.payload);

      state.push(item);
    },
    Remove_Track: (state, action) => {
      let deleteTrack = state.filter((item) => item.id !== action.payload);
      return deleteTrack;
    },
  },
});

// final export of reducer, this also holds the state
export default FreeSoundTrackSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { 
  Set_Track, 
  Add_Track, 
  Remove_Track, 
} = FreeSoundTrackSlice.actions;
