import React from "react";

import "./App.scss";

import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import Accordian from "./components/accordian/accordian";

export default function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Accordian />
        <Footer />
      </div>
    </>
  );
}
