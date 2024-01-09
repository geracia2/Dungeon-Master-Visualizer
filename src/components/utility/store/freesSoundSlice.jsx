import { createSlice } from "@reduxjs/toolkit";

const storedSound =
  localStorage.getItem("storedSound") != null
    ? JSON.parse(localStorage.getItem("storedSound"))
    : [];

    
const initialState = storedSound;

const FreeSoundTrackSlice = createSlice({
  name: "FreeSoundTracks",
  initialState,
  reducers: {
    Add_Track: (state, action) => {
      console.log(action.payload);
      // state === null ? state = [] : null
      let item = action.payload;
      state.push(item);
      localStorage.setItem("storedSound", JSON.stringify(state));
    },

    Remove_Track: (state, action) => {
      let deleteTrack = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("storedSound", JSON.stringify(state));
      return deleteTrack;
    },
  },
});

export default FreeSoundTrackSlice.reducer;

export const { Set_Track, Add_Track, Remove_Track } =
  FreeSoundTrackSlice.actions;
