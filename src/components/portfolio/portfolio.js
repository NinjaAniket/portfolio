import React from "react";

import "./portfolio.scss";

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
                  href="https://ecommerce-react-redux.netlify.app/"
                  className="portfolio__link-name"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/NinjaAniket/react-redux-ecom"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
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
                without
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/NinjaAniket/twitter-clone-react"
                target="_blank"
                className="portfolio__link-name"
                without
                rel="noopener noreferrer"
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
                href="https://shoe-landing-page.netlify.app/"
                className="portfolio__link-name"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/NinjaAniket/ecom-responsive-landing-page"
                target="_blank"
                without
                rel="noopener noreferrer"
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
                without
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
