import logo from './logo.svg';
import './App.css';
import AudioPlayer from './audioplayer';
import Header from './header';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Architecture from './Architecture';
import Team from './Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div>
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
        <div>
          <Team />
        </div>
        <div id="Predict">
          <AudioPlayer />
        </div>

      </div>

  );
}

export default App;
