import { useState } from "react";
import { Link } from "react-router-dom";
// mui
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
// components
import SearchBar from "../feature/SearchBar";



export default function FabLib() {
  // token for SketchFab, but may not need it
  const sfKey = import.meta.env.VITE_KEY_SF;

  let [input, setInput] = useState("");
  let [sfData, setSFData] = useState(null);

  const section = 'Models and Environments'

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
      setSFData(data.results.models);
    } catch (error) {
      console.warn(error);
    }
  }

  // Search bar API request
  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page with a form submission
    const url = `https://api.sketchfab.com/v3/search?q=${input}`;
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
      setSFData(data.results.models);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <Box>
        <Typography
          variant="h6"
          color="secondary"
        >
          PRESETS
        </Typography>

      
     <ButtonGroup
        color="secondary"
        size="small"
        aria-label="asdf"
      >
        <Button onClick={() => handlePreset("DragonBorn")}>DragonBorn</Button>
        <Button onClick={() => handlePreset("Elf")}>Elf</Button>
        <Button onClick={() => handlePreset("Gnome")}>Gnome</Button>
        <Button onClick={() => handlePreset("Goblin")}>Goblin</Button>
      </ButtonGroup>

      <SearchBar section={section} handleSubmit={handleSubmit} input={input} handleChange={handleChange} />

      {sfData && ( // truthy value, checking to see if you have data before rendering
        <div>
          {sfData.map((model, i) => (
            <div key={model.uid}>
              <Link to={`/fabLib/${model.uid}`}>
                <img
                  src={model.thumbnails.images[0].url}
                  alt={model.name}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
