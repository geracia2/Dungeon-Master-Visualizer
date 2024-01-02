import { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SoundLib() {
  // token for FreeSound
  const fsKey = import.meta.env.VITE_KEY_FS;

  const [FSData, setFSData] = useState(null);
  const [track, setTrack] = useState(null);
  const [input, setInput] = useState(null);

  // Preset API requests
  async function handlePreset(param) {
    const url = `https://freesound.org/apiv2/search/text/?query=${param}`;
    const options = {
      headers: {
        Authorization: `Token ${fsKey}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setFSData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  // Search bar API request
  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page with a form submission
    const url = `https://freesound.org/apiv2/search/text/?query=${input}`;
    const options = {
      headers: {
        Authorization: `Token ${fsKey}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setFSData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  // Selected track API requests
  async function handleTrack(param) {
    const url = `https://freesound.org/apiv2/sounds/${param}/`;
    const options = {
      headers: {
        Authorization: `Token ${fsKey}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setTrack(data);
    } catch (error) {
      console.warn(error);
    }
  }

  // update the text input
  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div>SoundLib</div>
      {console.log(FSData)}

      <ButtonGroup
        variant="text"
        color="secondary"
        size="small"
        aria-label="asdf"
      >
        <Button onClick={() => handlePreset("Dungeon+atmosphere+rpg")}>
          Dungeon
        </Button>
        <Button onClick={() => handlePreset("game+battle+loop")}>Battle</Button>
        <Button
          onClick={() => handlePreset("fantasy+background+music+rpg+loop")}
        >
          Atmosphere
        </Button>
        <Button onClick={() => handlePreset("village+music+rpg")}>
          Village
        </Button>
      </ButtonGroup>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Submit</button>
      </form>

      {FSData && ( // truthy value, checking to see if you have data before rendering
        <div>
          {track && (
            <>
              <Typography variant="h6" color="initial">
                {track.name}
              </Typography>
              <p>{track.description}</p>
              <>
                tags:{" "}
                {track.tags.map((tag, i) => (
                  <span key={i}>{tag}, </span>
                ))}
              </>
              <img src={track.images.waveform_bw_l} alt="" />
              {console.log(track["previews"]["preview-hq-mp3"])}
              <audio controls autoplay>
                <source
                  src={track["previews"]["preview-hq-mp3"]}
                  type="audio/ogg"
                />
                Your browser does not support the audio element.
              </audio>
            </>
          )}
          {FSData.map((track, i) => (
            <div key={track.id}>
              <p onClick={() => handleTrack(track.id)}>{track.name}</p>
              <a
                href={`https://freesound.org/people/${track.username}/sounds/${track.id}/`}
              >
                Visit FreeSound Page
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
