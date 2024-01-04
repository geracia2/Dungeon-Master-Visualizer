import { useState } from "react";
//components
import SearchBar from "../feature/SearchBar";
import SoundPresets from "../feature/SoundPresets";
import SoundList from "../feature/SoundList";
import SoundTrack from "../feature/SoundTrack";



export default function SoundLib() {
  // token for FreeSound
  const fsKey = import.meta.env.VITE_KEY_FS;
  
  const [fsListData, setFSListData] = useState(null);
  const [fsTrack, setFSTrack] = useState(null);
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
      // console.log(data);
      setFSTrack(data);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <>
      <SearchBar
        section={section}
        handleSubmit={handleSubmit}
        input={input}
        handleChange={(e) => setInput(e.target.value)}
      />
      <SoundPresets handlePreset={handlePreset} />
      <SoundTrack fsTrack={fsTrack} />
      <SoundList fsListData={fsListData} handleTrack={handleTrack} />
    </>
  );
}
