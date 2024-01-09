import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

export default function ModelPresets({ handlePreset }) {
  return (
    <>
      <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
        {/* <Typography variant="h6" color="secondary">
        PRESETS
      </Typography> */}
        <ButtonGroup color="secondary" size="small" aria-label="asdf">
          <Button onClick={() => handlePreset("DragonBorn")}>DragonBorn</Button>
          <Button onClick={() => handlePreset("Elf")}>Elf</Button>
          <Button onClick={() => handlePreset("Gnome")}>Gnome</Button>
          <Button onClick={() => handlePreset("Goblin")}>Goblin</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
