import React, { useState } from "react";
import "./Navbar.scss";
import "./Footer.sass";
import Logo1 from "./styles/lobby wall paper_lotus flower.png";
import Logo2 from "./styles/BLACK LOTUS_small light box sign Transp.png";
import Shantyana from "./styles/lobby wall paper_lotus flower.png";
import BarqLin from "./styles/barq/Line.jpg";
import BarqWaht from "./styles/barq/WhatsApp.jpg";
import BarqInst from "./styles/barq/IG.jpg";
import BarqWech from "./styles/barq/Wechat.jpg";
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
    <Footer />
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
        <p className="about-ser-text">Showroom</p>
      </div>
      <div className="about-ser">
        <img src={Shantyana} alt="React Logo" className="about-logo-big" />
        <p className="about-ser-text">NURU</p>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="footer-sub">
      <div className="f-s-left">
        <h2 className="footer-sub-title">Contacts</h2>
        <h3 className="footer-sub-title gold">
          5 minutes walk from Phrom Phong BTS station exit 5.
        </h3>

        <div className="footer-contact"></div>
      </div>
      <div className="f-s-rigt">
        <h2 className="footer-sub-title">We are open every day</h2>
        <h3 className="footer-sub-title gold">From 11:00 to 00:00</h3>
      </div>
    </div>

    <div className="footer-barq-wrap">
      <p className="footer-extra-text">
        Follow us on social media for the latest pictures and promotions!
      </p>
      <div className="footer-barq-icons">
        <div className="about-servises">
          <div className="about-ser">
            <img src={BarqLin} alt="React Logo" className="about-logo-big " />
            <p className="about-ser-text">LINE </p>
          </div>
          <div className="about-ser">
            <img src={BarqWech} alt="React Logo" className="about-logo-big" />
            <p className="about-ser-text">WECHAT</p>
          </div>
          <div className="about-ser">
            <img src={BarqInst} alt="React Logo" className="about-logo-big" />
            <p className="about-ser-text">INSTAGRAM</p>
          </div>
          <div className="about-ser">
            <img src={BarqWaht} alt="React Logo" className="about-logo-big" />
            <p className="about-ser-text">WHATSAPP</p>
          </div>
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
        <a to="#" className="nav-book-btm">
          Book now
        </a>
        {/* <a href="tel:+1234567890" className="contact">
          📞 +1 234 567 890
        </a>
        <a href="mailto:info@massageenvy.com" className="contact">
          ✉️ info@massageenvy.com
        </a> */}
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
    <>
      {" "}
      <Navbar />
      <Home />
    </>
  );
};

export default App;
