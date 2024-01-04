import React from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//mui
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import Badge from '@mui/material/Badge';



export default function Nav() {
  const soundTrack = useSelector((state) => state.FreeSoundTracks);
  
  return (
      <Box>
      <ButtonGroup variant="contained" color="primary" size="large" aria-label="nav">
        <Link to={"/"}><Button>Home</Button></Link>
        <Link to={"/fabLib"}><Button>Models</Button></Link>
        <Link to={"/soundLib"}><Badge badgeContent={soundTrack.length} color="secondary"><Button>Sounds</Button></Badge></Link>
        <Link to={"/scene"}><Button>Your Scene</Button></Link>
        <Link to={"/about"}><Button>About</Button></Link>
      </ButtonGroup>
      </Box>
  );
}
