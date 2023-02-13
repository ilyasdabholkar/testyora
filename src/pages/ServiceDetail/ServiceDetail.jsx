import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";
import DetailLeft from "./sections/DetailLeft";
import DetailRight from "./sections/DetailRight";

const breadCrumb = {
  backgroundImage: "images/bg/breadcrumb-bg.jpg",
  heading: "Service Detail",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "Service Detail",
};

function ServiceDetail() {
  return (
    <div id="wrapper" className="wrapper">
      <Breadcrumb data={breadCrumb} />
      <main className="main-content">
        <div className="tm-section service-details-area bg-white tm-padding-section">
          <div className="container">
            <div className="row">
                <DetailLeft/>
                <DetailRight/>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServiceDetail;
