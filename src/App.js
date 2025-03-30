import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.scss";
import "./Footer.sass";
import Logo1 from "./styles/lobby wall paper_lotus flower.png";

const Home = () => (
  <div className="home">
    <h1 className="text-4xl font-bold text-gray-800">
      Welcome to Massage Envy
    </h1>
    <p className="text-lg text-gray-600 mt-4">
      Experience relaxation like never before.
    </p>
    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">
      Book Now
    </button>

    <Footer />
  </div>
);

// const About = () => (
//   <div className="min-h-screen bg-gray-100 text-center p-10">
//     <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//     <p className="text-lg text-gray-600 mt-4">
//       Discover our mission and values.
//     </p>
//   </div>
// );

const Footer = () => (
  <div className="footer">
    <h1 className="footer-title"> Black Lotus SPA</h1>
    <div className="footer-sub">
      <div className="f-s-left">
        <h2 className="footer-sub-title">Contacts</h2>
        <p className="footer-text">2154 Royal Ln. Dallas, TX. 75229</p>

        <div className="footer-contact">
          <a href="tel:+1234567890" className="contact">
            📞 +1 234 567 890
          </a>
          <a href="mailto:info@massageenvy.com" className="contact">
            ✉️ info@massageenvy.com
          </a>
        </div>
      </div>
      <div className="f-s-rigt">
        <h2 className="footer-sub-title">Hours</h2>
        <div className="">
          <h3>SPA & SAUNA</h3>
          <p className="footer-text">8AM - 12AM</p>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [language, setLanguage] = useState("English");

  // const languages = [
  //   { name: "English", flag: "🇬🇧" },
  //   { name: "Русский", flag: "🇷🇺" },
  //   { name: "ไทย", flag: "🇹🇭" },
  //   { name: "Español", flag: "🇪🇸" },
  // ];

  // const toggleMenu = () => setMenuOpen(!menuOpen);
  // const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo1} alt="React Logo" className="nav-logo-big" />
      </div>
      <div className="navbar-right">
        <a href="tel:+1234567890" className="contact">
          📞 +1 234 567 890
        </a>
        <a href="mailto:info@massageenvy.com" className="contact">
          ✉️ info@massageenvy.com
        </a>
      </div>
      {/* <div className="burger-menu" onClick={toggleMenu}>
        ☰
      </div> */}
      {/* <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={closeMenu}>
          ✖
        </button>
        <select
          className="language-selector"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            closeMenu();
          }}
        >
          {languages.map((lang) => (
            <option key={lang.name} value={lang.name}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div> */}
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
