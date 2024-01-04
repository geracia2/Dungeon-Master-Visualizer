import { createSlice } from "@reduxjs/toolkit";

//
// const [state, setState] = useState(initial)

const FreeSoundTrackSlice = createSlice({
  name: "FreeSoundTracks",
  initialState: null,
  reducers: {
    Add_Track: (state, action) => {
      let item = {
        text: action.payload,
        id: crypto.randomUUID() 
      };
      return state = [...state, item];
    },
    Remove_Track: (state, action) => {
      // payload is the added argument coming back from a dispatch
      state = action.payload;
      return state;
    },
  },
});

// final export of reducer, this also holds the state
export default FreeSoundTrackSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { Remove_Track, Add_Track } = FreeSoundTrackSlice.actions;
