import React from "react";

function Feature(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-30">
      <div className="tm-feature text-center wow fadeInUp">
        <span className="tm-feature-icon">
          <i className={props.icon}></i>
        </span>
        <span className="tm-feature-backicon">
          <i className={props.backicon}></i>
        </span>
        <h5>{props.heading}</h5>
        <p>
         {props.content}
        </p>
      </div>
    </div>
  );
}

export default Feature;
