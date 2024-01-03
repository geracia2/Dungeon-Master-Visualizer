import { useState } from "react";
// mui
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Box } from "@mui/material";
// mui audio player
import { AudioCard } from "material-ui-player";
// components
import SearchBar from "../feature/SearchBar";

export default function SoundLib() {
  // token for FreeSound
  const fsKey = import.meta.env.VITE_KEY_FS;

  const [FSData, setFSData] = useState(null);
  const [track, setTrack] = useState(null);
  const [input, setInput] = useState("");

  const section = "Music and Sounds";

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
      <Typography variant="h6" color="secondary">
        PRESETS
      </Typography>
      <ButtonGroup color="secondary" size="small" aria-label="">
        <Button onClick={() => handlePreset("Dungeon+atmosphere+rpg")}>
          Dungeon
        </Button>
        <Button onClick={() => handlePreset("game+battle+loop")}>Battle</Button>
        <Button
          onClick={() => handlePreset("fantasy+background+music+rpg+loop")}
        >
          Atmosphere{" "}
        </Button>
        <Button onClick={() => handlePreset("village+music+rpg")}>
          Village
        </Button>
      </ButtonGroup>

      <SearchBar
        section={section}
        handleSubmit={handleSubmit}
        input={input}
        handleChange={handleChange}
      />

      {FSData && ( // truthy value, checking to see if you have data before rendering
        <div>
          {track && (
            <>
              <Typography variant="h6" color="initial">
                {track.name}
                <a
                  href={`https://freesound.org/people/${track.username}/sounds/${track.id}/`}
                >
                  <OpenInNewRoundedIcon
                    aria-label="Link to FreeSond"
                    color="secondary"
                  />
                </a>
              </Typography>
              <p>{track.description}</p>
              <>
                tags:{" "}
                {track.tags.map((tag, i) => (
                  <span key={i}>{tag}, </span>
                ))}
              </>
              <img src={track.images.waveform_bw_l} alt="Waveform" />
              <audio controls loop>
                <source
                  src={track["previews"]["preview-hq-mp3"]}
                  type="audio/mpeg"
                />
              </audio>
              {/* <AudioCard
                src={track["previews"]["preview-hq-mp3"]}
                loop="true"
                thickness="thin"
                mute="true"
              /> */}
            </>
          )}
          {FSData.map((track, i) => (
            <div key={track.id}>
              <Button variant="text" color="primary">
                <p onClick={() => handleTrack(track.id)}>{track.name}</p>
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
