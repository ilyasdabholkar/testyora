import React from "react";
import Testimonial from "../components/Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function Testimonials() {
  const testimonials = [
    {
      id:1,
      name: "Penny Beaird",
      profile: "Financer",
      review:
        "I started seeing Dr. Robinson on the recommendation of my massage therapist.Massage therapy is the science of movement and function. Massage therapy will help anybody who experiences difficulty with movement strength and pain.",
      photo: "/testyora/images/authors/author-image-1.jpg",
      ratings : 4
    },
    {
      id:2,
      name: "Ludie Cremin",
      profile: "Supervisor",
      review:
        "Quae iusto consequatur consectetur velit at nulla et enim debitis. Eligendi modi consectetur laudantium. Ut quis nobis numquam omnis suscipit eum est omnis.Explicabo ipsum accusamus consectetur animi laudantium quia.",
      photo: "/testyora/images/authors/author-image-1.jpg",
      ratings : 5
    },
    {
      id:3,
      name: "Ottilie Wisoky",
      profile: "Marketer",
      review:
        "Molestias dicta non laboriosam eum ut eos et. Dignissimos temporibus sit quis aut itaque vel. Maiores a est. Id ut aspernatur aliquam cumque aut ut alias accusamus. Minus aperiam fugiat tempora aut repellendus voluptatem debitis sequi.",
      photo: "/testyora/images/authors/author-image-1.jpg",
      ratings : 4
    },
  ];

  return (
    <div className="tm-section testimonial-area tm-padding-section bg-grey">
      <div className="bg-animated-shape">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10 col-12">
            <div className="tm-section-title text-center">
              <h2>What Our Customers Say</h2>
            </div>
          </div>
        </div>
        <div className="testimonial-slider-active tm-slider-arrow-2 slick-initialized slick-slider">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {testimonials.map((testimonial) => {
              return (
              <SwiperSlide key={testimonial.id}>
                <Testimonial
                  name={testimonial.name}
                  review={testimonial.review}
                  profile={testimonial.profile}
                  photo={testimonial.photo}
                  ratings={testimonial.ratings}
                />
              </SwiperSlide>
            );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
