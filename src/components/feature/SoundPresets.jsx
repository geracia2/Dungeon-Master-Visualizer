import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function SoundPresets({ handlePreset }) {
  return (
    <>
    <Box sx={{ p: 5, display: 'flex', justifyContent: 'center', }}>
      {/* <Typography variant="h6" color="secondary">
        PRESETS
      </Typography> */}
      <ButtonGroup color="secondary" size="small" aria-label="">
        <Button onClick={() => handlePreset("Dungeon+atmosphere+rpg")}>Dungeon</Button>
        <Button onClick={() => handlePreset("game+battle+loop")}>Battle</Button>
        <Button onClick={() => handlePreset("fantasy+background+music+rpg+loop")}>Atmosphere</Button>
        <Button onClick={() => handlePreset("village+music+rpg")}>Village</Button>
      </ButtonGroup>
      </Box>
    </>
  );
}
