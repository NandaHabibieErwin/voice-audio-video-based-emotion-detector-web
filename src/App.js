import React from "react";
import "./App.css";
import AudioPlayer from "./audioplayer";
import Header from "./header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Architecture from "./Architecture";
import Team from "./Team";
import Data from "./data";
import Footer from "./footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Element name="Home" className="element">
        <HeroSection />
      </Element>
      <Element name="AboutMe" className="element">
        <AboutMe />
      </Element>
      <Element name="Architecture" className="element">
        <Architecture />
      </Element>
      <Element name="Team" className="element">
        <Team />
      </Element>
      <Element name="Data" className="element">
        <Data />
      </Element>
      <Element name="Predict" className="element">
        <AudioPlayer />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
