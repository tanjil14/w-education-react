import React from "react";
import img from "../../images/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="content">
        <img className="border-none" src={img} alt="" />
        <h5>Opps! Page Not Found.</h5>
      </div>
    </div>
  );
};

export default NotFound;
