import React from "react";
import img from "../../images/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found flex items-center justify-center text-center p-42">
      <div className="content">
        <img className="border-none" src={img} alt="" />
        <h5 className="text-red-600 font-bold text-4xl">
          Opps! Page Not Found.
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
