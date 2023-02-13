import React from "react";

function CallToAction() {
  return (
    <div
      // style={{backgroundImage : "url(" + "images/bg/call-to-action-bg.jpg" + ")"}}
      className="tm-section call-to-action-area tm-padding-section"
      // data-bgimage="images/bg/call-to-action-bg.jpg"
      data-overlay="8"
    >
      <div className="container">
        <div className="tm-cta">
          <div className="tm-cta-content">
            <h3>Meet The Doctor</h3>
            <h2>For your convenience, you can book your appointment</h2>
          </div>
          <div className="tm-cta-button">
            <a href="#" className="tm-button tm-button-white">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
