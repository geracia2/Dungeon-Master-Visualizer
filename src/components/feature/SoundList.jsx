import React from "react";
import Button from "@mui/material/Button";

export default function SoundList({ fsListData, handleTrack }) {
  return (
    <>
      {fsListData && ( // conditional if state is not [false, 0, '', null, undefined, NaN]
        <div>
          {fsListData.map((tracks, i) => (
            <div key={tracks.id}>
              <Button variant="text" color="primary">
                <p onClick={() => handleTrack(tracks.id)}>{tracks.name}</p>
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
