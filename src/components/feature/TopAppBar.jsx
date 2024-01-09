import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
// import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

export default function TopAppBar() {
  const soundTrack = useSelector((state) => state.FreeSoundTracks);
  const sfModel = useSelector((state) => state.SketchFabModels);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     right: '50%',
  //     top: '98%',
  //   },
  // }));

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(138deg, rgba(242,246,253,1) 29%, rgba(102,196,217,1) 100%)",
      }}
    >
      <Toolbar>
        {/* ----------Small view BreakPoint------------ */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, gap: 5 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { sm: "block", md: "none" },
            }}
          >
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Typography sx={{ color: "primary.main", px: 6, py: 2 }}>
                Home
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/fabLib"}>
              {/* <StyledBadge
                badgeContent={sfModel && ""}
                color="secondary"
                size="small"
              > */}
                <Typography sx={{ color: "primary.main", px: 6, py: 2 }}>
                  Models
                </Typography>
              {/* </StyledBadge> */}
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/soundLib"}>
              {/* <StyledBadge
                badgeContent={soundTrack.length}
                color="secondary"
                size="small"
              > */}
                <Typography sx={{ color: "primary.main", px: 6, py: 2 }}>
                  Sounds
                </Typography>
              {/* </StyledBadge> */}
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/scene"}>
              <Typography sx={{ color: "primary.main", px: 6, py: 2 }}>
                Your Scene
              </Typography>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to={"/about"}>
              <Typography sx={{ color: "primary.main", px: 6, py: 2 }}>
                About
              </Typography>
            </Link> */}
          </Menu>
          <img
            src="/art/DMVLogoSm.svg"
            alt="Dungeon Master Visualizer logo"
            style={{
              maxHeight: "50px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          />
        </Box>

        {/* ----------Medium view BreakPoint---------- */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <img
            src="/art/DMVLogoSm.svg"
            alt="Dungeon Master Visualizer logo"
            style={{
              alignSelf: "center",
              maxHeight: "50px",
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button
              sx={{ color: "primary.main", py: 8, px: 5, display: "block" }}
            >
              Home
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/fabLib"}>
            {/* <StyledBadge badgeContent={sfModel && ""} color="secondary"> */}
              <Button
                sx={{ color: "primary.main", py: 8, px: 5, display: "block" }}
              >
                Models
              </Button>
            {/* </StyledBadge> */}
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/soundLib"}>
            {/* <StyledBadge  badgeContent={soundTrack.length} color="secondary"> */}
              <Button
                sx={{ color: "primary.main", py: 8, px: 5, display: "block" }}
              >
                Sounds
              </Button>
            {/* </StyledBadge> */}
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/scene"}>
            <Button
              sx={{ color: "primary.main", py: 8, px: 5, display: "block" }}
            >
              Scene
            </Button>
          </Link>
          {/* <Link style={{ textDecoration: "none" }} to={"/about"}>
            <Button
              sx={{ color: "primary.main", py: 8, px: 5, display: "block" }}
            >
              About
            </Button>
          </Link> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
