import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { title, description,img } = service;
  return (
    <div className="box text-center py-12 px-8">
      <img className="border-none h-80" src={img} alt="" />
      <h3>{title}</h3>
      <p className="py-4 px-0 text-2xl">{description}</p>
      <Link to="#" className="btn">
        read more
      </Link>
    </div>
  );
};

export default Service;
