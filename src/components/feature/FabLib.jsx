import { useState } from "react";
import { Link } from "react-router-dom";

export default function FabLib() {
  const sfKey = import.meta.env.VITE_KEY_SF;

  let [input, setInput] = useState("");
  let [sfData, setSFData] = useState(null);

  // update the text input
  function handleChange(e) {
    setInput(e.target.value);
  }

  async function handlePreset1() {
    try {
      const response = await fetch(
        `https://api.sketchfab.com/v3/search?q=Dragonborn`
      );
      const data = await response.json();
      console.log(data);
      // SF data is deeply nested {results:{models:[...]}}
      setSFData(data.results.models);
    } catch (error) {
      console.log(error);
    }
  }

  // make a request to API onClick
  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page with a form submission
    // https://www.omdbapi.com/?apikey=14ac4897&t={input}
    try {
      // get data
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=14ac4897&t=${input}`
      );
      // transform data
      const data = await response.json();
      // store data and re-render
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>FabLib</div>
      {/* form that runs handleSubmit when a button is pressed */}
      <button onClick={handlePreset1}>DragonBorn</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Submit</button>

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
      </form>
    </>
  );
}
