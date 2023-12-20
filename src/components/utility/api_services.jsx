import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setSketchFabData } from "../utility/store/sketchFabSlice";

export default function GetAllAPIData() {
  const sketchURL = "https://free-nba.p.rapidapi.com/teams?page=0";
  //   const soundURL = "https://free-nba.p.rapidapi.com/teams?page=0";

  const dispatch = useDispatch();

  // fetch first api from sketchFab
  async function fetchData() {
    try {
      const response = await fetch(sketchURL);
      const result = await response.json();

      console.log(result);
      // set data
      dispatch(setSketchFabData(result));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    //   second data
  }, []);
}
