import React from "react";

function AppointmentDetailCard() {
  return (
    <div className="col-lg-6 mt-50">
      <div className="tm-information">
        <div className="tm-information-timing">
          <h5>Opening Hours</h5>
          <ul>
            <li>
              Monday - Friday <span>Morning 9.00 Am to 12.30 pm</span>
            </li>
            <li>
              Monday - Friday <span>Evening 5.00 pm to 9.30 pm</span>
            </li>
            {/* <li>
            Saturday <span>15:00 - 18:00</span>
          </li> */}
            <li>
              Sunday <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="tm-information-contact">
          <h5>Contact Details</h5>
          <ul>
            <li>
              <b>Address :</b>K – Sector, F1 Line, Shop no.03,Cheeta camp ,
              Trombay, Mumbai – 400088.
            </li>
            <li>
              <b>Address :</b>Shop no 2. Plot No 4,5,6,Sai Sthan CHS, Sector 29,
              Nerul (E)
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
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetailCard;
