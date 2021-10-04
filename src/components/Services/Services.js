import React from "react";
import useServices from "../Hook/useServises";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services] = useServices();

  return (
    <section className="services mt-28">
      <div className="box-container display: grid;">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
