// mui
import { Box } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// mui audio player
import { AudioCard } from "material-ui-player";
// components
import SearchBar from "../feature/SearchBar";
import SoundPresets from "../feature/SoundPresets";
import { useState } from "react";


export default function SoundLib() {
  // token for FreeSound
  const fsKey = import.meta.env.VITE_KEY_FS;

  const [fsListData, setFSListData] = useState(null);
  const [fsTrack, setfsTrack] = useState(null);
  const [input, setInput] = useState("");

  const section = "Music and Sounds";

  // Preset API requests -> List
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
      setFSListData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  // Search bar API request -> List
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
      // dispatch here
      setFSListData(data.results);
    } catch (error) {
      console.warn(error);
    }
  }

  // Selected fsTrack API requests -> Solo fsTrack
  async function handlefsTrack(param) {
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
      // dispatch here
      setfsTrack(data);
    } catch (error) {
      console.warn(error);
    }
  }

  // update the text input
  // function handleChange(e) {
  //   setInput(e.target.value);
  // }
  return (
    <>
      <SoundPresets handlePreset={handlePreset} />

      <SearchBar
        section={section}
        handleSubmit={handleSubmit}
        input={input}
        // handleChange={handleChange}
        handleChange={(e) => setInput(e.target.value)}
      />

      {fsTrack && (
        <>
          <Typography variant="h6" color="initial">
            {fsTrack.name}
            <a
              href={`https://freesound.org/people/${fsTrack.username}/sounds/${fsTrack.id}/`}
            >
              <OpenInNewRoundedIcon
                aria-label="Link to FreeSond"
                color="secondary"
              />
            </a>
          </Typography>
          <p>{fsTrack.description}</p>
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
      {fsListData && ( // conditional if state is not [false, 0, '', null, undefined, NaN]
        <div>
          {fsListData.map((track, i) => (
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
