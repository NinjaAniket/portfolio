import React from "react";
import "./Skills.scss";
export default function Skills() {
  return (
    <div className="skills section" id="skills">
      <h2 className="section-title">SKILLS</h2>

      <div className="skills__container bd-grid">
        <div className="skills__box">
          <h3 className="skills__subtitle">Web</h3>
          <span className="skills__name">React</span>
          <span className="skills__name">Javascript(es6+)</span>
          <span className="skills__name">Redux</span>

          <span className="skills__name">Material UI</span>
          <span className="skills__name">Bootstrap</span>
          <span className="skills__name">SCSS</span>

          <h3 className="skills__subtitle">Mobile Frameworks</h3>
          <span className="skills__name">React Native</span>
          <span className="skills__name">Redux</span>

          <span className="skills__name">Native Base</span>
          <span className="skills__name">React Native Elements </span>
          <span className="skills__name">React Native Paper </span>
        </div>
        <div className="skills__img">
          <img src={require("../../img/design.jpg")} alt="img-design" />
        </div>
      </div>
    </div>
  );
}
