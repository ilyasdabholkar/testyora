import React from "react";

function HeaderTopArea() {
  return (
    <div className="header-toparea">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-sm-6 col-12">
            <div className="header-topinfo">
              <ul>
                <li>
                  Email us :{" "}
                  <a href="mailto://contact@example.com">contact@example.com</a>
                </li>
                <li>
                  Call us : <a href="tel://+1-800-915-6270">1-800-915-6270</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-12">
            <div className="header-topbutton">
              <a href="#" className="tm-button tm-button-white">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTopArea;
