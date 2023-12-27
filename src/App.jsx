import "./App.css";
import { Routes, Route } from "react-router-dom";

import GetAllAPIData from "./components/utility/api_services";

import SoundLib from "./components/feature/SoundLib";
import FabLib from "./components/feature/FabLib";
import FabSolo from "./components/feature/FabSolo";
import Home from './components/pages/Home'
import Nav from "./components/feature/Nav";
import Footer from "./components/feature/Footer";

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
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
