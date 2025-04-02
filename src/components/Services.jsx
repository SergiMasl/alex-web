import React from "react";
import BarqLin from "../styles/barq/Line.jpg";
import BarqWaht from "../styles/barq/WhatsApp.jpg";
import BarqWech from "../styles/barq/Wechat.jpg";

export default function Services() {
  const About = () => (
    <div className="about-servis-wrap margin-topp">
      <div className="footer-barq-wrap">
        <p className="footer-extra-text">Book Now!</p>
        <div className="footer-barq-icons">
          <div className="about-servises">
            <div className="about-ser">
              <div className="about-logo-wrap">
                <img
                  src={BarqLin}
                  alt="React Logo"
                  className="about-logo-big "
                />
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
                <img
                  src={BarqWech}
                  alt="React Logo"
                  className="about-logo-big"
                />
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
                <img
                  src={BarqWaht}
                  alt="React Logo"
                  className="about-logo-big"
                />
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
  return (
    <div className="container">
      <About />
    </div>
  );
}
