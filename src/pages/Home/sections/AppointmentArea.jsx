import React from "react";
import AppointmentDetailCard from "../components/AppointmentDetailCard";
import AppointmentForm from "../components/AppointmentForm"

function AppointmentArea() {
  return (
    <div className="tm-section appointment-information-area tm-padding-section bg-white">
      <span className="bg-shape-2">
        <img src="/testyora/images/icons/bg-shape-3.png" alt="background shape" />
      </span>
      <div className="container">
        <div className="row mt-50-reverse">
            <AppointmentDetailCard/>
            <AppointmentForm/>
        </div>
      </div>
    </div>
  );
}

export default AppointmentArea;
