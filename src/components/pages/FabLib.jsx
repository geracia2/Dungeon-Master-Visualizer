import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FabLib() {
  // token for SketchFab, but may not need it
  const sfKey = import.meta.env.VITE_KEY_SF;

  let [input, setInput] = useState("");
  // !! move sketchfab data to Redux store
  let [sfData, setSFData] = useState(null);

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
    <>
     <ButtonGroup
        variant="text"
        color="secondary"
        size="small"
        aria-label="asdf"
      >
        <Typography
          style={{ placeContent: "center", padding: "2px" }}
          variant="button"
          color="secondary"
        >
          Presets -
        </Typography>
        <Button onClick={() => handlePreset("DragonBorn")}>DragonBorn</Button>
        <Button onClick={() => handlePreset("Elf")}>Elf</Button>
        <Button onClick={() => handlePreset("Gnome")}>Gnome</Button>
        <Button onClick={() => handlePreset("Goblin")}>Goblin</Button>
      </ButtonGroup>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Submit</button>
      </form>

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
    </>
  );
}
