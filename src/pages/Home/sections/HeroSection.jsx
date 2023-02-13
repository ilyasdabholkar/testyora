import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function HeroSection(props) {
  return (
    <Swiper
      pagination={{
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
      }}
      modules={[Pagination]}
      className="heroslider-area heroslider-slider heroslider-animated tm-slider-dots tm-slider-dots-left slick-initialized slick-slider slick-dotted"
      data-bgimage="/testyora/images/bg/bg-image-1.jpg"
      data-black-overlay="3"
      data-white-overlay="7"
      style={{
        backgroundImage: `url(${props.data.banner1.backgroundImg})`,
      }}
    >
      <SwiperSlide
        style={{
          minHeight: "calc(100vh - 143.45px)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1">
              <div className="heroslider-content">
                <h1>{props.data.banner1.heading}</h1>
                <h3>{props.data.banner1.subheading}</h3>
                <p>{props.data.banner1.description}</p>
                <Link to="/about">
                  <span className="tm-button" tabIndex="-1">
                    About Us
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-8 col-12 order-1 order-md-2">
              <div className="heroslider-image">
                <svg viewBox="0 0 665 645">
                  <defs>
                    <pattern
                      id="attachedImage1"
                      height="100%"
                      width="100%"
                      patternContentUnits="objectBoundingBox"
                    >
                      <image
                        xlinkHref={props.data.banner1.image}
                        preserveAspectRatio="none"
                        width="1"
                        height="1"
                      ></image>
                    </pattern>
                  </defs>
                  <path
                    fill="url(#attachedImage1)"
                    d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          minHeight: "calc(100vh - 143.45px)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-8 col-12">
              <div className="heroslider-image heroslider-image-left">
                <svg viewBox="0 0 665 645">
                  <defs>
                    <pattern
                      id="attachedImage2"
                      height="100%"
                      width="100%"
                      patternContentUnits="objectBoundingBox"
                    >
                      <image
                        xlinkHref={props.data.banner2.image}
                        preserveAspectRatio="none"
                        width="1"
                        height="1"
                      ></image>
                    </pattern>
                  </defs>
                  <path
                    fill="url(#attachedImage2)"
                    d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="heroslider-content">
                <h1>{props.data.banner2.heading}</h1>
                <h3>{props.data.banner2.subheading}</h3>
                <p>{props.data.banner2.description}</p>
                <Link to="/about">
                  <span className="tm-button" tabIndex="-1">
                    About Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          minHeight: "calc(100vh - 143.45px)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1">
              <div className="heroslider-content">
                <h1>{props.data.banner3.heading}</h1>
                <h3>{props.data.banner3.subheading}</h3>
                <p>{props.data.banner3.description}</p>
                <Link to="/about">
                  <span className="tm-button" tabIndex="-1">
                    About Us
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-8 col-12 order-1 order-md-2">
              <div className="heroslider-image">
                <svg viewBox="0 0 665 645">
                  <defs>
                    <pattern
                      id="attachedImage3"
                      height="100%"
                      width="100%"
                      patternContentUnits="objectBoundingBox"
                    >
                      <image
                        xlinkHref={props.data.banner3.image}
                        preserveAspectRatio="none"
                        width="1"
                        height="1"
                      ></image>
                    </pattern>
                  </defs>
                  <path
                    fill="url(#attachedImage3)"
                    d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    // <div
    //   className="heroslider-area"
    //   data-bgimage="images/bg/bg-image-1.jpg"
    //   data-black-overlay="3"
    //   style={{ backgroundImage: `url(${props.data.banner1.backgroundImg})` }}
    // >
    //   <div
    //     className="heroslider-slider heroslider-animated tm-slider-dots tm-slider-dots-left slick-initialized slick-slider slick-dotted"
    //     data-white-overlay="7"
    //   >
    //     <div className="slick-list draggable" style={{ height: "570.15px" }}>
    //       <div
    //         className="slick-track"
    //         style={{ opacity: "1", width: "3522px" }}
    //       >
    //         <div
    //           className="heroslider-singleslider d-flex align-items-center slick-slide"
    //           style={{
    //             minHeight: "calc(100vh - 143.45px)",
    //             width: "1174px",
    //             position: "relative",
    //             left: "0px",
    //             top: "0px",
    //             zIndex: "998",
    //             opacity: "0",
    //             transition: "opacity 500ms ease 0s",
    //           }}
    //           tabIndex="-1"
    //           role="tabpanel"
    //           id="slick-slide00"
    //           aria-describedby="slick-slide-control00"
    //           data-slick-index="0"
    //           aria-hidden="true"
    //         >
    //           <div className="container">
    //             <div className="row align-items-center">
    //               <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1">
    //                 <div className="heroslider-content">
    //                   <h1>{props.data.banner1.heading}</h1>
    //                   <p>{props.data.banner1.description}</p>
    //                   <Link to="/about">
    //                     <span className="tm-button" tabIndex="-1">
    //                       About Us
    //                     </span>
    //                   </Link>
    //                 </div>
    //               </div>
    //               <div className="col-lg-5 col-md-6 col-sm-8 col-12 order-1 order-md-2">
    //                 <div className="heroslider-image">
    //                   <svg viewBox="0 0 665 645">
    //                     <defs>
    //                       <pattern
    //                         id="attachedImage1"
    //                         height="100%"
    //                         width="100%"
    //                         patternContentUnits="objectBoundingBox"
    //                       >
    //                         <image
    //                           xlinkHref="images/heroslider/heroslider-image-1.jpg"
    //                           preserveAspectRatio="none"
    //                           width="1"
    //                           height="1"
    //                         ></image>
    //                       </pattern>
    //                     </defs>
    //                     <path
    //                       fill="url(#attachedImage1)"
    //                       d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="heroslider-singleslider d-flex align-items-center slick-slide slick-current slick-active"
    //           style={{
    //             minHeight: "calc(100vh - 143.45px)",
    //             width: "1174px",
    //             position: "relative",
    //             left: "-1174px",
    //             top: "0px",
    //             zIndex: "999",
    //             opacity: "1",
    //           }}
    //           tabIndex="0"
    //           role="tabpanel"
    //           id="slick-slide01"
    //           aria-describedby="slick-slide-control01"
    //           data-slick-index="1"
    //           aria-hidden="false"
    //         >
    //           <div className="container">
    //             <div className="row align-items-center">
    //               <div className="col-lg-5 col-md-6 col-sm-8 col-12">
    //                 <div className="heroslider-image heroslider-image-left">
    //                   <svg viewBox="0 0 665 645">
    //                     <defs>
    //                       <pattern
    //                         id="attachedImage2"
    //                         height="100%"
    //                         width="100%"
    //                         patternContentUnits="objectBoundingBox"
    //                       >
    //                         <image
    //                           xlinkHref="images/heroslider/heroslider-image-2.jpg"
    //                           preserveAspectRatio="none"
    //                           width="1"
    //                           height="1"
    //                         ></image>
    //                       </pattern>
    //                     </defs>
    //                     <path
    //                       fill="url(#attachedImage2)"
    //                       d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //               </div>
    //               <div className="col-lg-7 col-md-6 col-12">
    //                 <div className="heroslider-content">
    //                   <h1>{props.data.banner2.heading}</h1>
    //                   <p>{props.data.banner2.description}</p>
    //                   <Link to="/about">
    //                     <span className="tm-button" tabIndex="-1">
    //                       About Us
    //                     </span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="heroslider-singleslider d-flex align-items-center slick-slide"
    //           style={{
    //             minHeight: "calc(100vh - 143.45px)",
    //             width: "1174px",
    //             position: "relative",
    //             left: "-2348px",
    //             top: "0px",
    //             zIndex: "998",
    //             opacity: "0",
    //             transition: "opacity 500ms ease 0s",
    //           }}
    //           tabIndex="-1"
    //           role="tabpanel"
    //           id="slick-slide02"
    //           aria-describedby="slick-slide-control02"
    //           data-slick-index="2"
    //           aria-hidden="true"
    //         >
    //           <div className="container">
    //             <div className="row align-items-center">
    //               <div className="col-lg-7 col-md-6 col-12 order-2 order-md-1">
    //                 <div className="heroslider-content">
    //                   <h1>{props.data.banner2.heading}</h1>
    //                   <p>{props.data.banner3.description}</p>
    //                   <Link to="/about">
    //                     <span className="tm-button" tabIndex="-1">
    //                       About Us
    //                     </span>
    //                   </Link>
    //                 </div>
    //               </div>
    //               <div className="col-lg-5 col-md-6 col-sm-8 col-12 order-1 order-md-2">
    //                 <div className="heroslider-image">
    //                   <svg viewBox="0 0 665 645">
    //                     <defs>
    //                       <pattern
    //                         id="attachedImage3"
    //                         height="100%"
    //                         width="100%"
    //                         patternContentUnits="objectBoundingBox"
    //                       >
    //                         <image
    //                           xlinkHref="images/heroslider/heroslider-image-3.jpg"
    //                           preserveAspectRatio="none"
    //                           width="1"
    //                           height="1"
    //                         ></image>
    //                       </pattern>
    //                     </defs>
    //                     <path
    //                       fill="url(#attachedImage3)"
    //                       d="M277.030,1.101 C452.838,-10.886 534.393,78.587 579.557,198.565 C624.722,318.542 691.616,359.832 645.425,497.920 C599.233,636.008 432.396,654.275 367.205,638.129 C302.015,621.984 234.375,580.155 153.191,548.742 C32.427,502.014 2.584,440.527 0.176,379.950 C-3.230,294.260 41.806,284.689 56.287,190.747 C73.638,78.186 139.502,10.477 277.030,1.101 Z"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeroSection;
