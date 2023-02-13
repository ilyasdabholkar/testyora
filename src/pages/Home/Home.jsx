import React from 'react'
import Footer from '../../common/Footer'
import AboutUs from './sections/AboutUs'
import AppointmentArea from './sections/AppointmentArea'
import CallToAction from './sections/CallToAction'
import FeatureArea from './sections/FeatureArea'
import HeroSection from './sections/HeroSection'
import PricingArea from './sections/PricingArea'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import HomeData from '../../assets/Home.json';

import "swiper/css";
import "swiper/css/navigation";


function Home() {
  return (
    <div id="wrapper" className="wrapper">
      <HeroSection data={HomeData.Hero}/>
      <main className="main-content">
        {/* <FeatureArea data={HomeData.Features}/> */}
        <AboutUs data={HomeData.AboutUs}/>
        <Services subHeading="Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an cule dicta iriure at phaedrum." data={HomeData.Services}/>
        <CallToAction/>
        <Testimonials/>
        <AppointmentArea/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home