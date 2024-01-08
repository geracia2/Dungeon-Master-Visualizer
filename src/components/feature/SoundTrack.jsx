import React from "react";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// mui audio player
import { AudioCard } from "material-ui-player";
// mui
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
//redux
import { useDispatch, useSelector } from "react-redux";
import { Remove_Track, Add_Track } from "../utility/store/freesSoundSlice";

export default function SoundTrack({ fsTrack }) {
  // enable dispatch, connect redux state
  const dispatch = useDispatch();
  const soundTrack = useSelector((state) => state.FreeSoundTracks);
  console.log(soundTrack);

  //mui interactions
  const handleAdd = () => {
    dispatch(Add_Track(fsTrack));
    console.info("You clicked Add.");
    console.log(soundTrack);
  };

  const handleDelete = () => {
    dispatch(Remove_Track(fsTrack.id));
    console.info("You clicked Delete.");
  };

  return (
    <>
      {/* {console.log(soundTrack)} */}
      {fsTrack && (
        <>
          <Stack direction="row" spacing={1}>
            <Chip label="Add to Scene" onClick={handleAdd} icon={<AddIcon />} />
            <Chip
              label="Remove From Scene"
              onClick={handleDelete}
              icon={<DeleteIcon />}
              variant="outlined"
            />
          </Stack>
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
            {fsTrack.tags.map((tag, i) => (
              <span key={i}>{tag}, </span>
            ))}
          </>
          <img src={fsTrack.images.waveform_bw_l} alt="Waveform" />
          <audio controls loop src={fsTrack["previews"]["preview-hq-mp3"]}>
            {/* audio doesn't update source with a render so apply it directly to element */}
            <source
              src={fsTrack["previews"]["preview-hq-mp3"]}
              type="audio/mpeg"
            />
          </audio>
          {/* <AudioCard
                src={fsTrack["previews"]["preview-hq-mp3"]}
                loop="true"
                thickness="thin"
                mute="true"
              /> */}
        </>
      )}
    </>
  );
}
