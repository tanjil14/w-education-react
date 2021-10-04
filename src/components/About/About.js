import React from "react";
import img from "../../images/about-us.png";
import "./About.css";
const About = () => {
  return (
    <section className="about mt-28 flex flex-col md:flex-row md:justify-between items-center">
      <div className="content flex items-center">
        <h2 className="text-4xl md:text-6xl">
          We share knowledge with <br />
          the world
        </h2>
      </div>
      <img className="" src={img} alt="" />
    </section>
  );
};

export default About;
