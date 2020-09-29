import React from "react";

import "./Banner.scss";

export default function Banner() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <h1 className="home__title">
          <span>HE</span>
          <br />
          LLO<span className="home__dot"></span>
        </h1>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-link">
            <i class="bx bx-up-arrow-alt">
              <span className="blink">Scroll Down</span>
            </i>
          </a>
        </div>
        <img
          src="https://scontent.fbom11-1.fna.fbcdn.net/v/t1.0-9/49394417_1992767914111790_4394119390577033216_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Ctqv4VcbiikAX_NZ007&_nc_ht=scontent.fbom11-1.fna&oh=baa029766d8997982ba8309c043dd5e0&oe=5F968FD6"
          alt="img-1"
          className="home__img"
        />
      </div>
    </section>
  );
}
