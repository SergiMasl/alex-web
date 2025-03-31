import React, { useState } from "react";
import "./Navbar.scss";
import "./Footer.sass";
import Logo1 from "./styles/lobby wall paper_lotus flower.png";
import Logo2 from "./styles/BLACK LOTUS_small light box sign Transp XS.png";
import Shantyana from "./styles/lobby wall paper_lotus flower.png";
import BarqLin from "./styles/barq/Line.png";
import BarqWaht from "./styles/barq/WhatsApp.jpg";
import BarqInst from "./styles/barq/IG.jpg";
import BarqWech from "./styles/barq/Wechat.jpg";
import MapImg from "./styles/Map.png";
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
    <div className="contact-wrap">
      <h2>Location and Contact</h2>
    </div>
    <div className="footer-sub">
      <div className="f-s-left">
        <img src={MapImg} alt="React Logo" className="contact-map" />
      </div>
      <div className="f-s-rigt">
        <h2 className="footer-sub-title">We are open every day</h2>
        <h3 className="footer-sub-title gold">From 11:00 to 00:00</h3>
        <h2 className="footer-sub-title">Location</h2>
        <h3 className="footer-sub-title gold">
          5 minutes walk from Phrom Phong BTS station exit 5.
        </h3>
        <h3 className="footer-sub-title gold">
          25 5 Sukhumvit Rd, Khlong Tan, Khlong Toei, Bangkok 10110, Thailand
        </h3>
      </div>
    </div>

    <div className="footer-barq-wrap">
      <p className="footer-extra-text">
        Follow us on social media for the latest pictures and promotions!
      </p>
      <div className="footer-barq-icons">
        <div className="about-servises">
          <div className="about-ser">
            <div className="about-logo-wrap">
              <img src={BarqLin} alt="React Logo" className="about-logo-big " />
            </div>
            <a
              className="about-ser-text"
              href="https://line.me/ti/p/TnRcvDjKSq"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE
            </a>
          </div>
          <div className="about-ser">
            <div className="about-logo-wrap">
              <img src={BarqWech} alt="React Logo" className="about-logo-big" />
            </div>
            <a
              className="about-ser-text"
              href="https://u.wechat.com/kA-jpsAkJoZy5i1Sf--0tg0?s=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              WECHAT
            </a>
          </div>
          <div className="about-ser">
            <div className="about-logo-wrap">
              <img src={BarqInst} alt="React Logo" className="about-logo-big" />
            </div>
            <a
              className="about-ser-text"
              href="https://www.instagram.com/blacklotusbkk"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="about-ser">
            <div className="about-logo-wrap">
              <img src={BarqWaht} alt="React Logo" className="about-logo-big" />
            </div>
            <a
              className="about-ser-text"
              href="https://wa.me/qr/UVEYWWCD6SIND1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHATSAPP
            </a>
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
