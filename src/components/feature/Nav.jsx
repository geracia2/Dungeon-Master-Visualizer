import React from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box } from '@mui/material';

export default function Nav() {
  return (
      <Box>
      <ButtonGroup variant="contained" color="primary" size="large" aria-label="nav">
        <Link to={"/"}><Button>Home</Button></Link>
        <Link to={"/fabLib"}><Button>Models</Button></Link>
        <Link to={"/soundLib"}><Button>Sounds</Button></Link>
        <Link to={"/scene"}><Button>Your Scene</Button></Link>
        <Link to={"/about"}><Button>About</Button></Link>
      </ButtonGroup>
      </Box>
  );
}
