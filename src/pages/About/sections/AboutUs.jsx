import React from "react";
import FunFacts from "./FunFacts";

function AboutUs() {
  return (
    <div className="tm-section about-us-area bg-white tm-padding-section">
      <span className="bg-shape-2">
        <img src="images/icons/bg-shape-3.png" alt="bg shape 3" />
      </span>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="about-content about-content-2">
              <h2>Who we are</h2>
              <p>
              Yara Acupuncturist is committed to providing the regional population with top-notch health treatment. Although growing into a large clinic was never our intention, we have learned to appreciate how much more pleasurable it is to work with a beautiful group of skilled professionals. 
              </p>
              <p>
              Since Yora is a place where we can treat patients with the same emphasis on kindness and respect, all of our acupuncturists, who have been in the field for some time, have found a place to call home. We all pursue our interests and talents, yet we work well together because we enjoy sharing knowledge and working together. Being close to one other improves us all!
              </p>
              <p>
              Patients' ambition for actual health and other factors are primarily to blame for the changing face of medicine. Finding the underlying cause of the disease is now the aim of both patients and healthcare practitioners, as separating and masking symptoms is becoming less acceptable in healing. This is precisely how acupuncture functions, addressing the issue from the inside out and fostering long-lasting wellness through natural means. Using the age-old art and science of Chinese medicine, Yora assists patients in regaining health and balance.
              </p>

              {/* <div className="about-contentbottom">
                <a href="#" className="tm-callbutton">
                  <span className="tm-callbutton-icon">
                    <i className="zmdi zmdi-phone-in-talk"></i>
                  </span>
                  <h3>1-800-915-6270 </h3>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="about-videobox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 398 358"
              >
                <defs>
                  <pattern
                    id="attachedImage1"
                    height="100%"
                    width="100%"
                    patternContentUnits="objectBoundingBox"
                  >
                    <image
                      xlinkHref="images/heroslider/heroslider-image-1.jpg"
                      preserveAspectRatio="none"
                      width="1"
                      height="1"
                    />
                  </pattern>
                </defs>
                <path
                  opacity="0.102"
                  fill="rgb(0, 117, 183)"
                  d="M82.843,22.613 C175.233,-23.488 239.443,6.649 290.825,61.522 C342.208,116.395 387.664,123.712 393.707,208.984 C399.750,294.254 313.624,341.741 274.739,347.672 C235.855,353.603 189.875,346.162 138.910,347.419 C63.098,349.289 33.144,322.675 18.231,290.376 C-2.864,244.685 19.343,229.351 6.068,175.158 C-9.838,110.222 10.571,58.677 82.843,22.613 Z"
                />
                <path
                  fill="url(#attachedImage1)"
                  d="M152.967,0.590 C250.043,-6.027 295.075,43.373 320.013,109.616 C344.951,175.858 381.888,198.656 356.382,274.898 C330.877,351.140 238.755,361.226 202.759,352.311 C166.763,343.397 129.414,320.302 84.587,302.958 C17.905,277.158 1.427,243.209 0.097,209.764 C-1.784,162.451 23.084,157.167 31.080,105.300 C40.661,43.151 77.029,5.768 152.967,0.590 Z"
                />
                <path
                  fill="rgba(0,0,0,0.1)"
                  d="M152.967,0.590 C250.043,-6.027 295.075,43.373 320.013,109.616 C344.951,175.858 381.888,198.656 356.382,274.898 C330.877,351.140 238.755,361.226 202.759,352.311 C166.763,343.397 129.414,320.302 84.587,302.958 C17.905,277.158 1.427,243.209 0.097,209.764 C-1.784,162.451 23.084,157.167 31.080,105.300 C40.661,43.151 77.029,5.768 152.967,0.590 Z"
                />
              </svg>
              <div className="tm-videobutton">
                <a
                  href="https://www.youtube.com/watch?v=Sv511KEiIJQ"
                  data-fancybox
                >
                  <span>
                    <i className="flaticon-play-button"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FunFacts />
    </div>
  );
}

export default AboutUs;
