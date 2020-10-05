import React from "react";
import Header from "./components/header/Header";
import "./App.scss";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Accordian from "./components/accordian/Accordian";

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
