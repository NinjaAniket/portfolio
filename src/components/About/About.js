import React from "react";
import "./about.scss";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img
            src="https://scontent.fbom11-1.fna.fbcdn.net/v/t1.0-9/49394417_1992767914111790_4394119390577033216_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Ctqv4VcbiikAX_NZ007&_nc_ht=scontent.fbom11-1.fna&oh=baa029766d8997982ba8309c043dd5e0&oe=5F968FD6"
            alt=""
          />
        </div>
        <div>
          <h2 className="about__subtitle">I' am Aniket Nagapure</h2>
          <span className="about__profession">
            Passionate React/React Native developer
          </span>
          <p className="about__text">
            With 2.5+ years of Experience in building SPA web app and Mobile
            Apps with React & React Native Framework .
          </p>
          <p className="about__text">
            I run a Youtube channel in free time called ReactNinja where I build
            projects with React.
          </p>

          <div className="about__social">
            <a
              href="https://www.linkedin.com/in/aniketnagapure/"
              target="_blank"
              without
              rel="noopener noreferrer"
              className="about__social-icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/NinjaAniket"
              target="_blank"
              without
              rel="noopener noreferrer"
              className="about__social-icon"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCdRbFtfBUJGwWMaTFfFsxTg"
              target="_blank"
              without
              rel="noopener noreferrer"
              className="about__social-icon"
            >
              <i class="bx bxl-youtube"></i>
            </a>
            <a
              href="https://twitter.com/ireactninja"
              target="_blank"
              without
              rel="noopener noreferrer"
              className="about__social-icon"
            >
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
