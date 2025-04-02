import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./Navbar.scss";
import "./Footer.sass";
import Logo2 from "./styles/BLACK LOTUS_small light box sign Transp XS.png";
import Shantyana from "./styles/lobby wall paper_lotus flower.png";

const Home = () => (
  <div className="home">
    <div className="home-logo-wrap">
      <img src={Logo2} alt="React Logo" className="home-logo-big" />
    </div>
    <div className="home-text-wrap">
      {/* <div className="home-sub-text">
        <p className="home-text-gold">1111111</p>
        <p className="home-text-gold">fdsds</p>
        <p className="home-text-gold">fsdf23fdsf</p>
      </div>
      <div className="home-sub-text-design"></div>
      <div className="home-sub-text">
        <p className="home-text-gold">2222</p>
        <p className="home-text-gold">fdsf32</p>
        <p className="home-text-gold">fsdfvdfvdfvfdswe</p>
      </div> */}
    </div>
    <About />
  </div>
);

const About = () => (
  <div className="about-servis-wrap">
    <h1 className="about-servises-title">Our Services</h1>
    <div className="about-servises">
      <div className="about-ser">
        <img src={Shantyana} alt="React Logo" className="about-logo-big" />
        <p className="about-ser-text">Jacuzzi Room </p>
      </div>
      <div className="about-ser">
        <img src={Shantyana} alt="React Logo" className="about-logo-big" />
        <p className="about-ser-text">2Girls</p>
      </div>
      <div className="about-ser">
        <img src={Shantyana} alt="React Logo" className="about-logo-big" />
        <p className="about-ser-text">Shower Room</p>
      </div>
      <div className="about-ser">
        <img src={Shantyana} alt="React Logo" className="about-logo-big" />
        <p className="about-ser-text">NURU</p>
      </div>
    </div>
  </div>
);

const NoPage = () => {
  return <></>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alex-web" element={<Home />} />

        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
