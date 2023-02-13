import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

import ContactUsArea from "./sections/ContactUsArea";
import Breadcrumb from "../../common/Breadcrumb";

const breadCrumb = {
  backgroundImage: "/testyora/images/bg/breadcrumb-bg.jpg",
  heading: "Contact Us",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "Contact",
};

export default function Contact() {
  return (
    <div id="wrapper" className="wrapper">
      <Breadcrumb data={breadCrumb} />
      <main className="main-content">
        <ContactUsArea />
      </main>
      <Footer />
    </div>
  );
}
