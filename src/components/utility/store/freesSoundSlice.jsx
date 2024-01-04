import { createSlice } from "@reduxjs/toolkit";

//
// const [state, setState] = useState(initial)

const freeSoundSlice = createSlice({
  name: "freeSoundData",
  initialState: null,
  reducers: {
    freeSoundData: (state, action) => {
      // payload is the added argument coming back from a dispatch
      state = action.payload;
      return state;
    },
    freeSoundData: (state, action) => {
      // payload is the added argument coming back from a dispatch
      state = action.payload;
      return state;
    },
  },
});

// final export of reducer, this also holds the state
export default freeSoundSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { setFreeSoundData } = freeSoundSlice.actions;
