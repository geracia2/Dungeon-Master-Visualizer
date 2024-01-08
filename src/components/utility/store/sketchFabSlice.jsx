import { createSlice } from "@reduxjs/toolkit";

// for local storage establish a stored state,
// get from local, if it is not null
// if it is not null, stringify it
// if null, return an empty array
const storedModel =
  localStorage.getItem("storedModel") != null
    ? JSON.parse(localStorage.getItem("storedModel"))
    : null;
// const storedModel = JSON.parse(localStorage.getItem("storedModel"))

// const initialState = [];
const initialState = storedModel;
console.log(storedModel);
const SketchFabModelsSlice = createSlice({
  name: "SketchFabModels",
  // set initState to local state
  initialState,
  reducers: {
    Set_Model: (state, action) => {
      console.info("You clicked Set.");
      // console.log(action.payload);
      state = action.payload;

      // to set local model we do the above expression
      // the resulting state gets stored in a key of "storedModel"
      // and state should be updated as "storedModel"
      localStorage.setItem("storedModel", JSON.stringify(action.payload));
      console.log(storedModel);
      // when manipulating state with expressions
      // or outside of a mutating method like .push()
      // you need to return state
      return state;
    },
    Add_Model: (state, action) => {
      let item = action.payload;
      //   console.info("You clicked Add.");
      // spread when working with arrays to begin.
      // return [...state, item];
      // push is better for this instance
      // console.log(action.payload);

      state.push(item);
    },
    Remove_Model: (state, action) => {
      // since we only intend to have 1 model we are not using arrays, but could later
      // let deleteModel = state.filter((item) => item.id !== action.payload);
      // return deleteModel;
      console.info("You clicked Delete.");
      state = null;
      localStorage.setItem("storedModel", JSON.stringify(state));
      console.log(storedModel);
      return state;
    },
  },
});

// final export of reducer, this also holds the state
export default SketchFabModelsSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { Set_Model, Add_Model, Remove_Model } =
  SketchFabModelsSlice.actions;
