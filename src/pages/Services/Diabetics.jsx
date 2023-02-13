import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

const breadCrumb = {
  backgroundImage: "images/bg/breadcrumb-bg.jpg",
  heading: "Acupuncture for Diabetics",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "diabetics",
};

function Quote(props) {
  return (
    <blockquote>
      <p>{props.text}</p>
    </blockquote>
  );
}

function Diabetics() {
  return (
    <div id="wrapper" className="wrapper">
      <Breadcrumb data={breadCrumb} />
      <main className="main-content">
        <div className="tm-section service-details-area bg-white tm-padding-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="tm-service-details sticky-sidebar">
                  <img
                    className="tm-service-details-image"
                    src="images/others/service-details.jpg"
                    alt="service details image"
                  />
                  <h2>Acupuncture For Diabetics</h2>
                  <p>
                  Studies show that acupuncture may benefit people with diabetes by lowering blood sugar levels and easing neuropathy symptoms and other diabetic complications.
                  </p>
                  <p>
                  Similar to how Western medical approaches to treating type 1 and type 2 diabetes differ, so do the suggested acupuncture practices. Within the scope of diabetes, these two conditions differ from one another. Various approaches are suggested depending on the type of diabetes symptoms you want to address. Acupuncture procedures can aid with nerve discomfort, metabolism, organ function, and weight loss. The wrist-ankle treatment is one of the more thoroughly researched acupuncture methods for treating diabetic neuropathy. Deep nerve stimulation at the wrist and ankle is part of the treatment.
                  </p>

                  {/* <Quote
                    text="Nulla omnis nulla rerum. Et architecto dolorem unde. In non
      molestiae vel autem iste. Architecto et eum beatae facilis. Illum
      aut non consequuntur reprehenderit velit sequi quia."
                  />

                  <ul className="stylish-list">
                    <li>
                      <i className="fa fa-hand-o-right"></i> Eum dolor atque
                      quisquam qui voluptate necessitatibus tempore.
                    </li>
                    <li>
                      <i className="fa fa-hand-o-right"></i> Alias quidem non
                      explicabo delectus totam dolores odit.
                    </li>
                    <li>
                      <i className="fa fa-hand-o-right"></i> Et laboriosam magni
                      animi dignissimos.
                    </li>
                    <li>
                      <i className="fa fa-hand-o-right"></i> Adipisci dolorem
                      minus quas voluptate sapiente velit unde veritatis.
                    </li>
                    <li>
                      <i className="fa fa-hand-o-right"></i> Perferendis nihil
                      veritatis.
                    </li>
                    <li>
                      <i className="fa fa-hand-o-right"></i> Et reiciendis iure
                      blanditiis quas sed dolore.
                    </li>
                  </ul> */}

                  <div id="service-acc" className="tm-accordion pt-2">
                    <div className="card">
                      <div className="card-header" id="service-acc-heading1">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#service-acc-collapse1"
                            aria-expanded="true"
                            aria-controls="service-acc-collapse1"
                          >
                            What acupuncture sites are used to treat diabetes?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="service-acc-collapse1"
                        className="collapse show"
                        aria-labelledby="service-acc-heading1"
                        data-parent="#service-acc"
                      >
                        <div className="card-body">
                          <p>
                          The diabetes acupressure point is situated in the hand, inside the wrist, between the big toe and second toe, below the knees on both sides, and at the top of the calves on both legs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="service-acc-heading2">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#service-acc-collapse2"
                            aria-expanded="false"
                            aria-controls="service-acc-collapse2"
                          >
                            How does acupuncture reduce blood sugar?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="service-acc-collapse2"
                        className="collapse"
                        aria-labelledby="service-acc-heading2"
                        data-parent="#service-acc"
                      >
                        <div className="card-body">
                          <p>
                          The benefits of acupuncture are thought to lower blood sugar levels via reducing cortisol levels, a stress hormone that stimulates the liver to produce glucose, and by lowering blood levels of free fatty acids, which are thought to improve insulin sensitivity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="service-acc-heading3">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#service-acc-collapse3"
                            aria-expanded="false"
                            aria-controls="service-acc-collapse3"
                          >
                            Acupuncture can harm nerves, but how?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="service-acc-collapse3"
                        className="collapse"
                        aria-labelledby="service-acc-heading3"
                        data-parent="#service-acc"
                      >
                        <div className="card-body">
                          <p>
                          A detailed literature study reveals cases of pneumothorax, cardiac tamponade, spinal epidural hemorrhage, abdominal visceral injury, and injury to the median and fibular nerves as consequences of dry needling and acupuncture.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="sticky-sidebar">
                  <div className="widgets widgets-blog">
                    <div className="single-widget widget-serviceitems">
                      <h5 className="widget-title">Services</h5>
                      <ul>
                        <li>Financial Analysis</li>
                        <li>Business Consulting</li>
                        <li>Corporate Finance</li>
                        <li>Financial Planning</li>
                        <li>Business Growth</li>
                        <li>Wealth Management</li>
                      </ul>
                    </div>

                    <div className="single-widget widget-contact">
                      <h5 className="widget-title">Get In Touch</h5>
                      <ul>
                        <li>
                          <b>Address :</b>Shop no 2. Plot No 4,5,6,Sai Sthan
                          CHS, Sector 29, Nerul (E)
                        </li>
                        <li>
                          <b>Phone :</b>
                          <a href="tel:+91 86680 18708">+91 86680 18708</a>|
                          <a href="tel:+91 88282 19119">+91 88282 19119</a>
                        </li>
                        <li>
                          <b>Email :</b>
                          <a href="mailto:abdullah@yaraaccupunturist.com">
                            abdullah@yaraaccupunturist.com
                          </a>
                        </li>
                      </ul>
                      <ul className="widget-contact-social">
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Diabetics;
