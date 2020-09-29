import React from "react";

import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio__container bd-grid">
        <div className="portfolio__card-container">
          <div className="portfolio__img">
            <img src={require("../../img/pr-1.png")} alt="" />

            <div className="portfolio__link">
              <div className="portfolio__card">
                <p>Ecommerce Website Built with React/Redux</p>
                <a
                  href="https://jovial-gates-1df974.netlify.app/"
                  className="portfolio__link-name"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/NinjaAniket/react-redux-ecom"
                  target="_blank"
                  className="portfolio__link-name"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__img">
          <img src={require("../../img/pr-2.png")} alt="" />

          <div className="portfolio__link">
            <div className="portfolio__card">
              <p>Twitter Clone Built with React & Firebase</p>
              <a
                href="https://twitter-clone-b7d28.web.app/"
                className="portfolio__link-name"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/NinjaAniket/twitter-clone-react"
                target="_blank"
                className="portfolio__link-name"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio__img">
          <img src={require("../../img/pr-3.png")} alt="" />

          <div className="portfolio__link">
            <div className="portfolio__card">
              <p>Responsive Landing page with grid & Flexbox</p>
              <a
                href="https://vigorous-yonath-743af2.netlify.app/"
                className="portfolio__link-name"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/NinjaAniket/ecom-responsive-landing-page"
                target="_blank"
                className="portfolio__link-name"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio__img">
          <img src={require("../../img/pr-4.png")} alt="" />

          <div className="portfolio__link">
            <div className="portfolio__card">
              <p>
                UI shades Built with React - get different shades of color on
                one click
              </p>
              <a
                href="https://www.uishades.com/"
                className="portfolio__link-name"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        {/* 
        <div className="portfolio__img">
          <img src={require("../../img/pr-5.png")} alt="" />

          <div className="portfolio__link">
            <div className="portfolio__card">
              <p>Client Project: Dashboard that tracks</p>
              <a
                href="https://www.uishades.com/"
                className="portfolio__link-name"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
