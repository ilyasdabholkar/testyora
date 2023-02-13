import React from "react";

function AboutUs(props) {
  return (
    <div className="tm-section about-us-area bg-grey">
      <div
        className="about-image"
        style={{
          backgroundImage: "url(" + props.data.backgroundImg + ")",
        }}
        data-bgimage={props.data.backgroundImg}
        data-overlay="1"
      >
        <div className="tm-videobutton">
          <a data-fancybox href="https://www.youtube.com/watch?v=Sv511KEiIJQ">
            <span>
              <i className="flaticon-play-button"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="about-content tm-padding-section">
              <h2 className="color-theme">
                {/* <span>
                  <span className="color-theme">Positive Effects</span> of
                </span>
                <br /> */}
                {props.data.heading}
              </h2>
              <p>{props.data.paragraph1}</p>
              <p>{props.data.paragraph2}</p>
              <h4>{props.data.paragraph3.heading}</h4>
              <ol>
                {props.data.paragraph3.steps.map((item) => {
                  return <li key={item.id}>{item.text}</li>;
                })}
              </ol>
              <div className="about-contentbottom">
                <a href="about-us.html" className="tm-button">
                  Read more
                </a>
                <a href="tel:+18009156270" className="tm-callbutton">
                  <span className="tm-callbutton-icon">
                    <i className="zmdi zmdi-phone-in-talk"></i>
                  </span>
                  <h3>1-800-915-6270</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
