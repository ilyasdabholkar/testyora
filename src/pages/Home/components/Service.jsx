import React from "react";
import {Link} from "react-router-dom";

function Service(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-30">
      <div className="tm-service text-center wow fadeInUp">
        <div className="tm-service-inner">
          <span className="tm-service-icon">
            <i className={props.icon}></i>
          </span>
          <span className="tm-service-backicon">
            <i className={props.backicon}></i>
          </span>
          <h5>
            <Link to={`/${props.link}`}>{props.heading}</Link>
          </h5>
          <p>{props.content}</p>
          <Link to={`/${props.link}`}>
            <span className="tm-readmore"> Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
