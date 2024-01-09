import { useState } from "react";
import SearchBar from "../feature/SearchBar";
import ModelPresets from "../feature/ModelPresets";
import ModelList from "../feature/ModelList";
import Typography from '@mui/material/Typography'

export default function FabLib() {
  // token for SketchFab, but may not need it
  const sfKey = import.meta.env.VITE_KEY_SF;

  let [input, setInput] = useState("");
  let [sfData, setSFData] = useState(null);

  const section = "Models and Environments";

  // update the text input
  function handleChange(e) {
    setInput(e.target.value);
  }

  // Preset API requests
  async function handlePreset(param) {
    const url = `https://api.sketchfab.com/v3/search?q=${param}`;
    const options = {
      method: "GET", // GET, POST, PUT, DELETE
      headers: {
        // dependant on api
        Authorization: "Token YOUR_API_KEY",
      },
    };
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // SF data is deeply nested {results:{models:[...]}}
      setSFData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  // Search bar API request
  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page with a form submission
    const url = `https://api.sketchfab.com/v3/search?q=${input}&restricted=false`;
    const options = {
      method: "GET", // GET, POST, PUT, DELETE
      headers: {
        // dependant on api
        Authorization: "Token YOUR_API_KEY",
      },
    };
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // SF data is deeply nested {results:{models:[...]}}
      setSFData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <>
    <Typography variant="h4" align="center" color="secondary"sx={{p:8}}>Search for models and add them to your scene.</Typography>
      <SearchBar
        section={section}
        handleSubmit={handleSubmit}
        input={input}
        handleChange={(e) => setInput(e.target.value)}
      />
      <ModelPresets handlePreset={handlePreset} />
      <ModelList sfData={sfData} />
    </>
  );
}
