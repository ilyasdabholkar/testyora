import React from 'react'
import DetailCards from '../components/DetailCards'

function ContactUsArea() {

    const contactDetails = [{
        id: 1,
        icon : "flaticon-placeholder",
        backicon : "flaticon-placeholder",
        heading : "Our location",
        paragraph : "K – Sector, F1 Line, Shop no.03,Cheeta camp , Trombay, Mumbai – 400088.",
        paragraph2 : "Shop no 2. Plot No 4,5,6,Sai Sthan CHS, Sector 29, Nerul (E)"
    },{
        id:2,
        icon : "flaticon-alarm-clock",
        backicon : "flaticon-alarm-clock",
        heading : "Our Timing",
        list : [
            {
                key:"Monday - Friday",
                data:"9.00 Am to 12.30 pm"
            },
            {
                key:"Monday - Friday",
                data:"5.00 pm to 9.30 pm"
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
        heading : "Our Contact",
        list : [
            {
                key:"Phone",
                data:"+91 86680 18708"
            },
            {
                key:"Phone",
                data:"+91 88282 19119"
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