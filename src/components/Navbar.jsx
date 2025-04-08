import Logo1 from "../styles/lobby wall paper_lotus flower.png";
import { useState } from "react";
import Promo from "./Promo";

const Navbar = () => {
  const [showBlockA, setShowBlockA] = useState(true);
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
    <div className="navbar-container">
      <Promo setShowBlockA={setShowBlockA} showBlockA={showBlockA} />
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home">
            <img src={Logo1} alt="React Logo" className="nav-logo-big" />
          </a>
        </div>

        <div className="navbar-right">
          <a href="#contacts" className="nav-book-btm">
            Contacts
          </a>
          <a href="#services" className="nav-book-btm">
            Book Now!
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
    </div>
  );
};

export default Navbar;
