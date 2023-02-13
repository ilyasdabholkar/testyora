import React from 'react'

function AppointmentForm() {
  return (
    <div className="col-lg-6 mt-50">
    <div className="tm-appointment">
      <h2>Make an Appointment</h2>
      <form action="#" className="tm-form">
        <div className="tm-form-inner">
          <div className="tm-form-field tm-form-fieldhalf">
            <input
              type="text"
              required="required"
              placeholder="Name*"
            />
          </div>
          <div className="tm-form-field tm-form-fieldhalf">
            <input
              type="email"
              required="required"
              placeholder="Email*"
            />
          </div>
          <div className="tm-form-field tm-form-fieldhalf">
            <select name="select-services">
              <option value="0">Select Service</option>
              <option value="a">Reducing or eliminating pain</option>
              <option value="b">Improving joint mobility</option>
              <option value="c">Circulatory problems</option>
              <option value="d">Improving lymphatic drainage</option>
              <option value="e">Reducing muscular tension</option>
              <option value="f">Post-surgical rehabilitation</option>
            </select>
          </div>
          <div className="tm-form-field tm-form-fieldhalf">
            <input
              type="text"
              required="required"
              data-toggle="datepicker"
              placeholder="Select Date"
            />
          </div>
          <div className="tm-form-field">
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="tm-form-field">
            <button type="submit" className="tm-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AppointmentForm