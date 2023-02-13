import React from 'react'

function Footer() {
  return (
    <footer className="footer">
            <div className="footer-toparea tm-padding-section">
                <div className="container">
                    <div className="row widgets footer-widgets">

                        <div className="col-lg-4 col-md-6 col-12">
                            
                            <div className="single-widget widget-contact">
                                <h5 className="widget-title">Get In Touch</h5>
                                <ul>
                                    <li><b>Address :</b>K – Sector, F1 Line, Shop no.03,Cheeta camp , Trombay, Mumbai – 400088.</li>
                                    <li><b>Phone :</b><a href="tel:+91 86680 18708">+91 86680 18708</a>|<a href="tel:+91 88282 19119">+91 88282 19119</a></li>
                                    <li><b>Timing :</b>Morning 9.00 Am to 12.30 pm</li>
                                    <li><b>Email :</b><a href="mailto:abdullah@yaraaccupunturist.com">abdullah@yaraaccupunturist.com</a></li> 
                                </ul>
                                <ul className="widget-contact-social">
                                    <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            
                            <div className="single-widget widget-contact">
                                <h5 className="widget-title">Appointment is Mandatory</h5>
                                <ul>
                                <li><b>Address :</b>Shop no 2. Plot No 4,5,6,Sai Sthan CHS, Sector 29, Nerul (E)</li>
                                    <li><b>Phone :</b><a href="tel:+91 86680 18708">+91 86680 18708</a>|<a href="tel:+91 88282 19119">+91 88282 19119</a></li>
                                    <li><b>Timing :</b>5.00 pm to 9.30 pm </li>
                                    <li><b>Email :</b><a href="mailto:abdullah@yaraaccupunturist.com">abdullah@yaraaccupunturist.com</a></li> 
                                </ul>
                                <ul className="widget-contact-social">
                                    <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                                    <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12">
                            
                            <div className="single-widget widget-quicklinks">
                                <h5 className="widget-title">Customer services</h5>
                                <ul>
                                    <li><a href="#">Physiotherapy</a></li>
                                    <li><a href="#">Massage Therapy</a></li>
                                    <li><a href="#">Vehicle Injury Treatment</a></li>
                                    <li><a href="#">Acupuncture</a></li>
                                    <li><a href="#">Neurological Rehabilitation</a></li>
                                    <li><a href="#">Custom-Made Orthotics</a></li>
                                </ul>
                            </div>            
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-12">   
                            <div className="single-widget widget-newsletter">
                                <h5 className="widget-title">Subscribe us</h5>
                                <p>Get Business news, tip and solutions to
                                    your problems from our experts.</p>
                                <form id="tm-mailchimp-form" className="widget-newsletter-form">
                                    <input id="mc-email" type="text" placeholder="Email address" required="required" />
                                    <button id="mc-submit" type="submit" className="tm-button"><i className="zmdi zmdi-mail-send"></i></button>
                                </form>

                                <div className="tm-mailchimp-alerts">
                                    <div className="tm-mailchimp-submitting"></div>
                                    <div className="mailchimp-success"></div>
                                    <div className="tm-mailchimp-error"></div>
                                </div>
                               
                                <img src="images/icons/payment-methods.png" alt="payment methods" />
                            </div>
                           
                        </div> */}

                    </div>
                </div>
            </div>
            <div className="footer-bottomarea">
                <div className="container">
                    <p className="footer-copyright">Copyright 2019 by <a href="#">thememarch</a>. All rights reserved</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer