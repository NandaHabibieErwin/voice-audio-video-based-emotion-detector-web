import logo from "./logo.svg";
import "./App.css";
import AudioPlayer from "./audioplayer";
import Header from "./header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Architecture from "./Architecture";
import Team from "./Team";
import Data from "./data";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <div id="Home">
        <HeroSection />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Architecture">
        <Architecture />
      </div>
      <div id="Team">
        <Team />
      </div>
      <div id="Data">
        <Data />
      </div>
      <div id="Predict">
        <AudioPlayer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
