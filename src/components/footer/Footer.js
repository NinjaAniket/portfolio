import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__data">
          <h2 className="footer__title">Aniket Nagapure</h2>

          <p className="footer__text">Built with Love & React.</p>
        </div>
        <div className="footer__data">
          <h2 className="footer__title">EXPLORE</h2>
          <ul>
            <li>
              <a href="" id="home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="" id="home" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="" id="home" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="" id="home" className="footer__link">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">Follow</h2>
          <a
            href="https://github.com/NinjaAniket"
            target="_blank"
            className="footer__social"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCdRbFtfBUJGwWMaTFfFsxTg"
            target="_blank"
            className="footer__social"
          >
            <i class="bx bxl-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
