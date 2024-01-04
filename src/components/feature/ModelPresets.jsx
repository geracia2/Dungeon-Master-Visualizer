import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ModelPresets({handlePreset}) {
  return (
    <>
    {/* <Typography variant="h6" color="secondary">
        PRESETS
      </Typography> */}
      <ButtonGroup color="secondary" size="small" aria-label="asdf">
        <Button onClick={() => handlePreset("DragonBorn")}>DragonBorn</Button>
        <Button onClick={() => handlePreset("Elf")}>Elf</Button>
        <Button onClick={() => handlePreset("Gnome")}>Gnome</Button>
        <Button onClick={() => handlePreset("Goblin")}>Goblin</Button>
      </ButtonGroup>
    </>
  )
}
