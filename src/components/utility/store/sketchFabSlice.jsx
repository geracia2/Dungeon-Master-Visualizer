import { createSlice } from "@reduxjs/toolkit";

const SketchFabModelsSlice = createSlice({
  name: "SketchFabModels",
  initialState: 'test',
  reducers: {
    Set_Model: (state, action) => {
      console.info("You clicked Set.");
      console.log(state)
      console.log(action.payload)
      return state = action.payload
    },
    Add_Model: (state, action) => {
      let item = action.payload;
      //   console.info("You clicked Add.");
      // spread when working with arrays to begin.
      // return [...state, item];
      // push is better for this instance
      console.log(action.payload);

      state.push(item);
    },
    Remove_Model: (state, action) => {
      // since we only intend to have 1 model we are not using arrays, but could later
      // let deleteModel = state.filter((item) => item.id !== action.payload);
      // return deleteModel;
      console.info("You clicked Delete.");
      console.log(state)
      state = null;
      console.log(state)
      return state;

    },
  },
});

// final export of reducer, this also holds the state
export default SketchFabModelsSlice.reducer;

// named export of reducers, add more actions here too
// the actions object comes from reducer
export const { 
  Set_Model, 
  Add_Model, 
  Remove_Model, 
} = SketchFabModelsSlice.actions;
