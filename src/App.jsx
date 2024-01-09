import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Footer from "./components/feature/Footer";
import TopAppBar from "./components/feature/TopAppBar";

import SoundLib from "./components/pages/SoundLib";
import FabLib from "./components/pages/FabLib";
import Home from "./components/pages/Home";
import Scene from "./components/pages/Scene";
import About from "./components/pages/About";
import Nav from "./components/feature/Nav";

export default function App() {
  return (
    <>
      <Box
      // maxWidth={false}
        sx={{
          backgroundImage: "url(/art/backgroundPaper.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100vw",
          height: "100vh",
          // border:'solid red'
        }}
      >
        <TopAppBar />
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fabLib" element={<FabLib />} />
          <Route path="/soundLib" element={<SoundLib />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Box>
    </>
  );
}
