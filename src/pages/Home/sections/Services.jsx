import React from "react";
import Service from "../components/Service";

function Services(props) {

  const services = props.data;
  console.log(props);

  return (
    <div className="tm-section services-area tm-padding-section bg-white">
      <span className="bg-shape-left">
        <img src="/testyora/images/icons/bg-shape-1.png" alt="background shape" />
      </span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10 col-12">
            <div className="tm-section-title text-center">
              <h2>Our Services</h2>
              <p>{props.subHeading} </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-30-reverse">
            {services.map(service=>{
                return <Service key={service.id} heading={service.heading} content={service.content} icon={service.icon} backicon={service.backicon} link={service.link}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default Services;
