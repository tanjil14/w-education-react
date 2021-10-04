import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header  fixed -inset-x-0 top-0 z-50 flex items-center justify-between py-8 px-36 shadow-myBox">
      <Link to="/" className="logo text-gray-900 text-4xl font-bold ">
        webful<span className="text-yellow-500">Education</span>
      </Link>
      {/* navigation menu start */}
      <nav class="navbar ">
        <Link className="link text-3xl uppercase cursor-pointer" to="/home">
          home
        </Link>
        <Link className="link text-3xl uppercase cursor-pointer" to="/services">
          services
        </Link>
        <Link className="link text-3xl uppercase cursor-pointer" to="/gallery">
          gallery
        </Link>
        <Link className="link text-3xl uppercase cursor-pointer" to="/about">
          about
        </Link>
      </nav>
      {/* navigation menu end   */}

      <div className="icons hidden">
        <div id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default Header;
