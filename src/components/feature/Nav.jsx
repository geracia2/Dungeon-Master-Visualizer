import React from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//mui
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Grid, Container, Badge, Typography } from "@mui/material";

export default function Nav() {
  const soundTrack = useSelector((state) => state.FreeSoundTracks);
  const sfModel = useSelector((state) => state.SketchFabModels);

  return (
    <>
      <Box sx={{ p: 5, display: 'flex', justifyContent: 'center', }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="medium"
          aria-label="nav"
        >
        <Link to={"/"}><Button>Home</Button></Link>
        <Link to={"/fabLib"}><Badge badgeContent={sfModel.name} color="secondary"><Button>Models</Button></Badge></Link>
        <Link to={"/soundLib"}><Badge badgeContent={soundTrack.length} color="secondary"><Typography variant="body1" color="initial">Sounds</Typography></Badge></Link>
        <Link to={"/scene"}><Button>Your Scene</Button></Link>
        <Link to={"/about"}><Button>About</Button></Link>
        </ButtonGroup>
      </Box>
    </>
  );
}
