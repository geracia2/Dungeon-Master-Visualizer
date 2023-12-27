import React from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <div>
      <ButtonGroup variant="contained" color="primary" aria-label="nav">
        <Link to={"/"}><Button>Home</Button></Link>
        <Link to={"/fabLib"}><Button>SketchFab</Button></Link>
        <Link to={"/soundLib"}><Button>FreeSound</Button></Link>
        <Link to={"/about"}><Button>About</Button></Link>
      </ButtonGroup>
    </div>
  );
}
