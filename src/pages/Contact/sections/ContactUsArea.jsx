import React from 'react'
import DetailCards from '../components/DetailCards'

function ContactUsArea() {

    const contactDetails = [{
        id: 1,
        icon : "flaticon-placeholder",
        backicon : "flaticon-placeholder",
        heading : "Our location",
        paragraph : "7415 Transcanadienne, Suite 100 St. Laurent, Quebec, Canada H45T 1Z22"
    },{
        id:2,
        icon : "flaticon-alarm-clock",
        backicon : "flaticon-alarm-clock",
        heading : "Our location",
        list : [
            {
                key:"Monday - Friday",
                data:"12:00 - 17:00"
            },
            {
                key:"Saturday",
                data:"15:00 - 18:00"
            },
            {
                key:"Sunday",
                data:"Closed"
            }
        ]
    },
    {
        id:3,
        icon : "flaticon-phone",
        backicon : "flaticon-phone",
        heading : "Our location",
        list : [
            {
                key:"Phone",
                data:"1 800 915 6270"
            },
            {
                key:"Tel",
                data:"1 514 733 2010"
            },
            {
                key:"Fax",
                data:"1 866 535 1747"
            }
        ]
    }]
  return (
    <div className="tm-section contact-us-area tm-padding-section bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                            <div className="tm-section-title text-center">
                                <h2>How To Find Us</h2>
                                <p>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem
                                    an cule dicta iriure at phaedrum. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-30-reverse">
                       {contactDetails.map(item=>{
                        return (<DetailCards key={item.id} data={item}/>)
                       })}
                    </div>
                    <div className="row justify-content-center mt-50">
                        <div className="col-lg-8">
                            <form id="tm-contactform" action="assets/php/mailer.php" method="POST" className="tm-form tm-contact-form">
                                <div className="tm-form-inner">
                                    <div className="tm-form-field tm-form-fieldhalf">
                                        <input type="text" name="name" required="required" placeholder="Name*"/>
                                    </div>
                                    <div className="tm-form-field tm-form-fieldhalf">
                                        <input type="email" name="email" required="required" placeholder="Email*"/>
                                    </div>
                                    <div className="tm-form-field tm-form-fieldhalf">
                                        <input type="text" name="phone" placeholder="Phone"/>
                                    </div>
                                    <div className="tm-form-field tm-form-fieldhalf">
                                        <input type="text" name="subject" required="required" placeholder="Subject*" />
                                    </div>
                                    <div className="tm-form-field">
                                        <textarea name="message" cols="30" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div className="tm-form-field text-center">
                                        <button type="submit" className="tm-button tm-button-dark">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-messages"></p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ContactUsArea