import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home ">
      <div class="content">
        <h3>
          fresh and <span>organic</span> products for your
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus soluta iure corporis nihil ullam vel!
        </p>
        <Link to="#" className="btn">
          buy now
        </Link>
      </div>
    </div>
  );
};

export default Home;
