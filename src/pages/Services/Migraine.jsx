import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

const breadCrumb = {
  backgroundImage: "/testyora/images/bg/breadcrumb-bg.jpg",
  heading: "Acupuncture for Migraine",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "migraine",
};

function Quote(props) {
  return (
    <blockquote>
      <p>{props.text}</p>
    </blockquote>
  );
}

function Migraine() {
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
                  <h2>Acupuncture For Migraine</h2>
                  <p>
                  Patients may find it challenging to control their terrible migraine headaches without prescription medicine. The pain linked to migraines may be lessened with acupuncture.
                  </p>
                  <p>
                  Traditional Chinese medicine includes acupuncture, which involves the insertion of single-use stainless steel needles into particular body locations. Acupuncture can be used in or in addition to conventional medical care.
                  </p>
                  <p>
                  One of the reasons individuals go to acupuncturists is to relieve migraines. According to a 2016 Cochrane analysis, 50% of patients who receive acupuncture report they have decreased their need for painkillers due to the sessions. There is evidence that acupuncture may lessen the frequency of migraine headaches or prevent them from occurring. The best chances of success are for those who combine acupuncture with other therapies.
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
                            How soon does acupuncture start to relieve migraines?
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
                          Five to eight weeks after starting treatment, the acupuncture groups reported marginal improvements in the frequency of their headaches. Compared to the fake acupuncture receivers, all acupuncture groups reported significant improvements by weeks 13 to 16.
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
                            Where is the migraine pressure point?
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
                          The area between the bases of your thumb and index finger is the most crucial pressure spot to be aware of for migraine treatment.
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
                            How frequently should migraine sufferers get acupuncture?
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
                          Two treatments per week for two weeks, one treatment per week for eight weeks, and then maintenance treatments once every other week were advised in a clinical evaluation of acupuncture for cluster headaches.
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

export default Migraine;
