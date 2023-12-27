import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function FabLib() {
  const sfKey = import.meta.env.VITE_KEY_SF;

  let [input, setInput] = useState("");
  // !! move sketchfab data to Redux store
  let [sfData, setSFData] = useState(null);

  // update the text input
  function handleChange(e) {
    setInput(e.target.value);
  }

  async function handlePreset(param) {
    try {
      const response = await fetch(
        `https://api.sketchfab.com/v3/search?q=${param}`
      );
      const data = await response.json();
      console.log(data);
      // SF data is deeply nested {results:{models:[...]}}
      setSFData(data.results.models);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page with a form submission
    try {
      const response = await fetch(
        `https://api.sketchfab.com/v3/search?q=${input}`
      );
      const data = await response.json();
      console.log(data);
      // SF data is deeply nested {results:{models:[...]}}
      setSFData(data.results.models);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>SketchFab models</div>

      <ButtonGroup
        variant="text"
        color="secondary"
        size="small"
        aria-label="asdf"
      >
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
                  style={{ maxWidth: "200px" }}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
