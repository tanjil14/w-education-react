import React from "react";
import useServices from "../Hook/useServises";
import Service from "../Service/Service";
import "./Home.css";
const Home = () => {
  const [services] = useServices();
  return (
    <>
      <div className="home flex items-center justify-center"></div>
      <section className="service-home my-12">
        <h1 className="heading text-center text-6xl">
          our <span className="inline-block">services</span>
        </h1>
        <div className="box-container grid ">
          {services.map(
            (service) =>
              service.category && <Service service={service} key={service.id} />
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
