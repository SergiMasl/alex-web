import Logo1 from "../styles/lobby wall paper_lotus flower.png";
import { Link } from "react-router-dom";

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
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo1} alt="React Logo" className="nav-logo-big" />
          </Link>
        </div>
        <div className="navbar-center">
          <p className="temp-annons">
            Welcome offer: 300฿ discount on your first booking!
          </p>
        </div>
        <div className="navbar-right">
          <Link to="/contact" className="nav-book-btm">
            Contacts
          </Link>
          <Link to="/services" className="nav-book-btm">
            Book Now!
          </Link>

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
      <div className="promo-mini">
        <p className="temp-annons-mini">
          Welcome offer: 300฿ discount on your first booking!
        </p>
      </div>
    </div>
  );
};

export default Navbar;
