import BarqLin from "../styles/barq/Line.png";
import BarqWaht from "../styles/barq/WhatsApp.jpg";
import BarqInst from "../styles/barq/IG.jpg";
import BarqWech from "../styles/barq/Wechat.jpg";
import MapImg from "../styles/Map.png";

const Contact = () => (
  <div className="container">
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
        <div className="footer-barq-icons footer-barq-icons">
          <div className="about-servises about-servises2">
            <div className="about-ser">
              <div className="about-logo-wrap">
                <img
                  src={BarqInst}
                  alt="React Logo"
                  className="about-logo-big"
                />
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
