import { createSlice } from "@reduxjs/toolkit";

//
// const [state, setState] = useState(initial)

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
      // payload is the added argument coming back from a dispatch
      let deleteTrack = state.filter((item) => item.id !== action.payload);
      console.log('delete')
      console.log(deleteTrack)
      return deleteTrack;
    },
  },
});

// final export of reducer, this also holds the state
export default FreeSoundTrackSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { Set_Track, Remove_Track, Add_Track } =
  FreeSoundTrackSlice.actions;
