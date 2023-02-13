import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

const breadCrumb = {
  backgroundImage: "images/bg/breadcrumb-bg.jpg",
  heading: "Acupuncture for Thyroid",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "thyroid",
};

function Quote(props) {
  return (
    <blockquote>
      <p>{props.text}</p>
    </blockquote>
  );
}

function Thyroid() {
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
                  <h2>Acupuncture For Thyroid</h2>
                  <p>
                  With over 42 million individuals in India suffering from thyroid disease, it is swiftly becoming one of the most widespread health issues. In India, one in ten persons suffers from thyroid conditions like hyperthyroidism, hypothyroidism, and thyroid cancer; more than 60% of these cases go untreated.
                  </p>
                  <p>
                  It can affect people of all ages, but because it is frequently inherited from family members and brought on by iodine deficiency, women are more likely to be affected. Eastern therapies like acupuncture can manage thyroid disorders well, whereas traditional therapies frequently emphasize medicines and surgery. Even though acupuncture has various uses, it is particularly successful in the safe and organic treatment of all kinds of hormone imbalances.
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
                            Does acupuncture benefit the thyroid?
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
                          All thyroid diseases can be safely and effectively treated with acupuncture as an adjunctive therapy. The TCM method can help treat the symptoms of excessive thyroid hormone production by reestablishing equilibrium at the heart of the issue.
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
                            Where is the thyroid acupuncture point?
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
                          Crossing points, yuan-source points, and five-shu points were the most often used particular acupoints for acupuncture treatment of hyperthyroidism.
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
                            What advantages does acupuncture provide for hypothyroidism?
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
                          Acupuncture can help manage thyroid issues by restoring hormonal balance, regulating energy levels, calming emotions, and managing sleep, emotional, and menstruation issues.
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

export default Thyroid;
