import React from "react";

function Testimonial(props) {
  return (
    <div className="tm-testimonial">
      <div className="tm-testimonial-author">
        <div className="tm-testimonial-authorimage">
          <img src={props.photo} alt="author image" />
        </div>
        <div className="tm-testimonial-authorinfo">
          <h5>{props.name}</h5>
          <h6>{props.profile}</h6>
        </div>
      </div>
      <div className="tm-testimonial-content">
        <p>
         {props.review}
        </p>
        <div className="tm-rating">
           
          <span className="active">
            <i className="zmdi zmdi-star"></i>
          </span>
          <span className="active">
            <i className="zmdi zmdi-star"></i>
          </span>
          <span className="active">
            <i className="zmdi zmdi-star"></i>
          </span>
          <span className="active">
            <i className="zmdi zmdi-star"></i>
          </span>
          <span className="active">
            <i className="zmdi zmdi-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
