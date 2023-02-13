import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

const breadCrumb = {
  backgroundImage: "/testyora/images/bg/breadcrumb-bg.jpg",
  heading: "Acupuncture for Autism children",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "autism",
};

function Quote(props) {
  return (
    <blockquote>
      <p>{props.text}</p>
    </blockquote>
  );
}

function Autism() {
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
                    src="/testyora/images/others/service-details.jpg"
                    alt="service details image"
                  />
                  <h2>Acupuncture for Autism children</h2>
                  <p>
                    Autism spectrum disorder and developmental disability are
                    both brought on by differences in the brain (ASD). It can be
                    challenging for someone with ASD to engage in repetitive or
                    constrained hobbies or interests, as well as social
                    interaction and communication. ASD sufferers may also move,
                    pay attention, or learn in unconventional ways.
                  </p>
                  <p>
                    Your child's autism symptoms may improve with acupuncture
                    therapy. To target specific nerves or pressure points,
                    needles are placed into the skin during acupuncture
                    treatment. In terms of verbal communication, social skills,
                    behavioral issues, food sensitivity, and noise sensitivity,
                    research has shown that acupuncture is an excellent
                    treatment for kids with ASD.
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
                            Does acupuncture help autistic people?
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
                          Acupuncture is a successful treatment for verbal communication, social skills, behavioral issues, food sensitivity, and noise sensitivity in kids with autism spectrum disorder (ASD).
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
                            Can acupuncture treat autism?
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
                          TCM has been utilized in the clinical care of ASD, particularly in mainland China, where studies have indicated that it may be effective.
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
                            Can a child with autism lead an everyday life?
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
                          An autistic youngster may never learn to speak or make eye contact if their condition is severe. However, many kids with autism and other ASDs can lead very typical lives.
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

export default Autism;
