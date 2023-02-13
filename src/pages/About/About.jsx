import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import AboutUs from './sections/AboutUs'
import MissionVision from './sections/MissionVision'

const breadCrumb = {
  backgroundImage : "images/bg/breadcrumb-bg.jpg",
  heading : "About Us",
  links : [
    {id:1,link:"",text:"Home"}
  ],
  activeLink : "About"
}

function About() {
  return (
    <div id="wrapper" className="wrapper">
        <Breadcrumb data={breadCrumb} />
        <main className="main-content">
            <AboutUs/>
            <MissionVision/>
        </main>
        <Footer/>
    </div>
  )
}

export default About