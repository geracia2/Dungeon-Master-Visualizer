import "./App.css";
import { Routes, Route } from "react-router-dom";

import GetAllAPIData from "./components/utility/api_services";

import SoundLib from "./components/pages/SoundLib";
import FabLib from "./components/pages/FabLib";
import FabSolo from "./components/feature/FabSolo";
import Home from './components/pages/Home'
import Nav from "./components/feature/Nav";
import Scene from "./components/pages/Scene";
import Footer from "./components/feature/Footer";
import About from "./components/pages/About";

export default function App() {
  
  return (
    <>
      {/* {GetAllAPIData} */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fabLib" element={<FabLib />} />
        <Route path="/soundLib" element={<SoundLib />} />
        <Route path="/fabLib/:id" element={<FabSolo />} />
        <Route path="/scene" element={<Scene />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
