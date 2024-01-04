import React from "react";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// mui audio player
import { AudioCard } from "material-ui-player";

export default function SoundTrack({ fsTrack }) {
  return (
    <>
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
            {fsTrack.tags.map((tag, i) => (
              <span key={i}>{tag}, </span>
            ))}
          </>
          <img src={fsTrack.images.waveform_bw_l} alt="Waveform" />
          <audio controls loop>
            <source
              src={fsTrack["previews"]["preview-hq-mp3"]}
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
    </>
  );
}
