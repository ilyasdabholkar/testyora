import React from "react";

function DetailRight() {
  return (
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
                <li><b>Address :</b>2726 Avenue Papineau Montreal, QC, Canada</li>
                <li><b>Phone :</b><a href="tel:+18009156270">1-800-915-6270</a></li>
                <li><b>Email :</b><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
            <ul className="widget-contact-social">
                <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
</div>
</div>
  );
}

export default DetailRight;
