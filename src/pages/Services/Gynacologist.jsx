import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

const breadCrumb = {
  backgroundImage: "images/bg/breadcrumb-bg.jpg",
  heading: "Pcos & Pcod Treatment (Gynecologist)",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "gynecologist",
};

function Quote(props) {
    return (
      <blockquote>
      <p>
        {props.text}
      </p>
    </blockquote>
    )
  }
  

function Gynacologist() {
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
                  <h2>Pcos & Pcod Treatment</h2>
                  <p>
                  Since women with PCOS do not anticipate the negative consequences of pharmaceutical therapies, acupuncture is a safe and efficient treatment for PCOS. Acupuncture therapy may help PCOS by improving blood flow to the ovaries, decreasing ovarian volume and the number of cysts, reducing cortisol levels, helping with weight loss and anorexia, controlling hyperglycemia by improving insulin sensitivity and lowering blood glucose and insulin levels, and many other possible mechanisms. To clarify the true impact of acupuncture on PCOS, however, well-designed, randomized controlled trials are required.
                  </p>
                  <p>
                  With a tried-and-true method that is mild, safe, and free of hormone medicines or difficult diets, we have assisted hundreds of people restoring regular cycles and balancing their hormones.
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
                            How long does acupuncture take to treat PCOS?
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
                          And within 6 to 12 weeks, most patients have noticeable improvements, such as the resumption of regular periods and a decline in acne and other potential PCOS symptoms.
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
                            Is acupuncture effective for balancing hormones?
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
                          Because acupuncture targets the underlying source of the problem and takes the entire person into account rather than just focusing on symptom management, it is excellent for treating hormone imbalances. Through qi (chi), a person's vital force, acupuncture attempts to bring the body's systems back into equilibrium
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
                            Can ovarian cysts be removed with acupuncture?
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
                          In Chinese medicine, Ovarian cysts are frequently viewed as an accumulation of moisture and stagnation in the pelvic region. They can be effectively treated with acupuncture, Chinese herbs, vitamins, and dietary changes.
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
                      <li><b>Address :</b>Shop no 2. Plot No 4,5,6,Sai Sthan CHS, Sector 29, Nerul (E)</li>
                      <li><b>Phone :</b><a href="tel:+91 86680 18708">+91 86680 18708</a>|<a href="tel:+91 88282 19119">+91 88282 19119</a></li>
                      <li><b>Email :</b><a href="mailto:abdullah@yaraaccupunturist.com">abdullah@yaraaccupunturist.com</a></li> 
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

export default Gynacologist;
