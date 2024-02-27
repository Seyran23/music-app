import React from "react";
import Navbar from "../components/Navbar";
import Trial from "../components/Trial";
import Partners from "../components/Partners";
import WhyUs from "../components/WhyUs";
import Music from "../components/Music";
import Sugesstions from "../components/Sugesstions";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar activePage="about" />
      <Trial />
      <Partners />
      <WhyUs />
      <Music />
      <Sugesstions />
      <Footer backgroundCycle={true} />
    </>
  );
};

export default About;
